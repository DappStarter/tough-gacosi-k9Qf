require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stool radar misery unveil hard light army giant'; 
let testAccounts = [
"0xd9975abea997acc298ab4ba9437fa48b5c7c7d3234c4f6706250b7fce64d5527",
"0xb205a41d0d9d032b9edd5fda87c1e41dcc59c22690a59412ad56f895da14e334",
"0xd67903f314395a580dac0cc6b2d3cda1451806a315f13a5d4e04567e5ab1eb4b",
"0x98830b1a05ebea7b5b128b79929bd1dab973e9b1edb54676b31560cfeb5b1062",
"0xa3d241150999b63347946f76e09ebbdf7a9cacdba9a2fd1bce5103c701a0982c",
"0xda23624ed6205d277e5dbd4f5ea12568c1f25ea5375eb19eef9604ab142da810",
"0x81a131a1af9628c86bc61758ef08a2536b4a10ba02e9ba4303f359b0909b5219",
"0x8ba4d8e3d61b9964f2ad6d1723c3f45cdadf38da773658fcc6b3519d1197cd62",
"0x465e6f01ab15b5eee9a6baeb3ac558058b9d3a41787c2c46ab478828430a4ba2",
"0x307705e290951a6d78f2c8c1395e3aae318fcbef13d8451dc4e8c4d8cba8b459"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


