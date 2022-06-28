const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');
const truffleAssert = require('truffle-assertions');
const {proof2, proof3} = require("./proof");

contract('SolnSquareVerifier', accounts => {

        const account1 = accounts[0]
        const account2 = accounts[1]

        describe('verification tests', function () {
            let contract;
            beforeEach(async function () {
                const verifier = await Verifier.new();
                contract = await SolnSquareVerifier.new(verifier.address, "sym", "name", "url");
            })

            it('can submit correct solution', async function () {
                const result = await contract.addSolution(proof2.proof.a, proof2.proof.b, proof2.proof.c, proof2.inputs, {from: account1});
                truffleAssert.eventEmitted(result, 'SolutionAdded', (ev) => {
                    return ev.index == 2 && ev.owner == account1 && ev.token == 2;
                })
            })

            it('can mint token after verification', async function () {
                await contract.addSolution(proof3.proof.a, proof3.proof.b, proof3.proof.c, proof3.inputs, {from: account2});

                const result = await contract.mint(account2, 3, {from: account1});
                truffleAssert.eventEmitted(result, 'Transfer', (ev) => {
                    return true;
                })
            })

        })
    }
)