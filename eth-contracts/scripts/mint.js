const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const SolnSquareVerifier = require('../build/contracts/SolnSquareVerifier.json');
const proof = require("../../zokrates/code/square/proof.json");
require('dotenv').config();

mint(process.argv[2]).catch(e => {
    console.log(e)
})

async function mint() {
    let provider = new HDWalletProvider(process.env.PRIVATE_KEY, process.env.API_URL);
    let web3 = new Web3(provider);
    let contract = new web3.eth.Contract(SolnSquareVerifier.abi, SolnSquareVerifier.networks[process.env.NETWORK_ID].address);
    const owner = (await web3.eth.getAccounts())[0];

    let tokenId = parseInt(proof.inputs[0], 16);
    console.log("Sending solution and minting token:", tokenId)

    contract.methods.addSolution(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs).send({from: owner})
        .then(async _ => {
            console.log("Solution added")
            await contract.methods.mint(owner, proof.inputs[0]).send({from: owner}).then(async _ => {
                let symbol = await contract.methods.symbol().call({from: owner});
                let metadata = await contract.methods.tokenURI(proof.inputs[0]).call({from: owner});
                let name = await contract.methods.name().call({from: owner});
                console.log(`Token ${tokenId} minted`)
                console.log("Name:", name)
                console.log("Sym:", symbol)
                console.log("Token metadata:", metadata)
                console.log("OpenSea testnet url:", `https://testnets.opensea.io/collection/${symbol.toLowerCase()}`)
            });
            process.exit(0)
        }).catch(e => {
        console.log(e)
        process.exit(1)
    })
}

