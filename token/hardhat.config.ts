// hardhat.config.ts
import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: '0.8.7'
    }]
  },
  networks: {
    hardhat: {
      chainId: 1337,
      // accounts: [{
      //   privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      //   balance: '9999'
      // }]
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/01091511c975487ba99f221730a3ba08',
      accounts: ['df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e'],
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/01091511c975487ba99f221730a3ba08',
      accounts: ['5af769cbc95afe98f6a0d08c641e419be331692e30f8a85e06f55adc6db2cd29'],
    },
  },
}

export default config