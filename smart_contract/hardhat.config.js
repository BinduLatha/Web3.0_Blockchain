require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2kvzcddS8PsvZPx9oYHFt_LU670s1IUf',
      accounts: ['267d9afbe78ee63e357e4520eb5253e56c93fbc8e1990cab02cd92a1ff0c8e9f']
    }
  }
}