// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
const Verifier = artifacts.require('Verifier');
const {proof2} = require("./proof");

contract('Verifier', accounts => {
        describe('verification tests', function () {

            it('verification succeeds with correct proof', async function () {
                const verifier = await Verifier.new();
                const result = await verifier.verifyTx(proof2.proof, proof2.inputs);
                assert.equal(result, true, 'verification failed');
            })

            it('verification fails with incorrect proof', async function () {
                const invalidInput = [
                    "0x0000000000000000000000000000000000000000000000000000000000000002",
                    "0x0000000000000000000000000000000000000000000000000000000000000000"
                ]
                const verifier = await Verifier.new()
                const result = await verifier.verifyTx(proof2.proof, invalidInput)
                assert.equal(result, false, 'verification passed with invalid input')
            })

        })
    }
)



