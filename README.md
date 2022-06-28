# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Smart contract overview

It is a ERC721(NFT) implementation with additional features to make it usable in a NTF marketplace like OpenSea

## Marketplace support

 * ERC721Metadata -  to store the metadata of the token for additional properties for representing tokens in a marketplace

 * ERC721Enumerable - to make all tokens easily accessible in the marketplace

## Requirement to mint tokens only after proving the ownership

Using ZoKrates for zkSNARKs to verify the ownership. 

It is just a "proof" to demonstrate how to use Zokrates - showing that minter knows the square of a number. 

# How to run and test the project

## Configuration

Create .env file
    
    API_URL=<infura_api_url>
    PRIVATE_KEY=<your_private_key>
    SYMBOL=<token_symbol>
    NAME=<token_name>
    BASE_URL=<toke_base_url>
    NETWORK_ID=<network_id>

## Deployment to Rinkeby testnet

    1. Install all the required packages in eth-contracts directory - npm install
    2. Conigure Infura API key in .env file - API_URL=<your_infura_api_url>
    3. Configure private key in .env file - PRIVATE_KEY=<your_private_key>
    4. Deploy contract to Rinkeby testnet - **truffle migrate --network rinkeby**
    5. Find the token in OpenSea - https://testnets.opensea.io/collection/<symbol>

## Generate a proof

    For simplicity, Zokrates directory already contains witness etc. files to generate a proof.
    
    Run npm script to generate a proof - **npm run generate-proof 4 2**(for the square of number 2)
    
## Submit the proof and mint corresponding token

    Submit the solution for previously generated proof and mint a token with corresponding tokenID 2 - npm run mint 2

## OpenSea links and contract address for token andr

* [OpenSea](https://testnets.opensea.io/collection/andr/)
* [EtherScan](https://rinkeby.etherscan.io/address/0xad452f8881aa3a453ae42cd86b48ba82e5c661b1/)

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
