require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*",
        },
        rinkeby: {
            provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, process.env.API_URL),
            network_id: 4,
            gas: 4500000,
            gasPrice: 20000000000
        },
    },
    mocha: {
        // timeout: 100000
    },
    compilers: {
        solc: {
            version: "0.5.5"
        }
    }
}
