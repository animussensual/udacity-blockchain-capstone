const fs = require("fs");
const Verifier = artifacts.require("Verifier.sol");
const SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");
require('dotenv').config();

module.exports = function (deployer) {
    deployer.deploy(Verifier).then(function () {
        return deployer.deploy(
            SolnSquareVerifier,
            Verifier.address,
            process.env.SYMBOL,
            process.env.NAME,
            process.env.BASE_URL);
    })
}