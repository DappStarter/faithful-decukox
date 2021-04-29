require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain million gloom prize swift vapor'; 
let testAccounts = [
"0x6f7c16c4c9a5060e2a3b63fee53d83c52a423534c27a9d99534e39612396b8c2",
"0x627ac2c8f48801b8630256ab63cec1b6ad3fbfc04fa1ec2d3567cfbf2067bf29",
"0x0f0d22017425003f6cab3311fa80ec2d8cab252e40f448f327924afc1e2e6475",
"0xb342057bea4bf76e4057a56d43f7f3d08bcab8bc324d10eb803b5bbb866c272f",
"0xd2267d61fa1544547876909509b76c4ffbd78f223751a96e57b5fce2b921fb5f",
"0x0cc6a393340aed18b7d601c40bb7c1b26803b0ff0f8def24cd2e67cb31b3d66e",
"0x44488866eabf01b94bbecaf84d16171b6e5f141042a96f25fad520d980adc2ec",
"0x4af601ffbcbcfc9acbbc93b85b0780c2b41c2242cad884f31a643b0be2753ab7",
"0x07f323cac777fcd958dcc3949adaa5fc3b41b818ce08471f9545c16b0fbbf5dc",
"0x374403a6986219f186f06de0da18fa35248c797f5a333871bcf753ae3b6ca6a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
