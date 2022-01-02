# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
### How to configure smart_contract
        npx hardhat

#### To test hardhat
        npx hardhat test

### How to run client
        cd client
        npm run dev

### How to get test account/address for  ethereum and make sure to add Metamask chrome extension to your google chrome
        https://faucet.egorfine.com/

### Use below url to deploy your smart contract
        https://alchemy.com

### Command to deploy smart contract
        npx hardhat run scripts/deploy.js --network ropsten

#### Once you run this command you will get a contractAddress. Copy it and add it in client->src->utils->constants.js file and you will also find json file in smart_contract->artifacts->contracts->[filename].sol->[filename].json. Copy this file and paste in client->src->utils->[filename].json