# Ganache Usage with Truffle GANACHE UI

//1

# connect your ganace with your truffle in project;

# USING BLOCKCHAIN SIMULATOR GANACHE;

---

1// open ganache;
2// connect your turffle-config with ganache;
3// add truffle file in ganache simulator with link file
4// check after migrate ;
5//

# command truffle console

// this js truffle console write web3 and check balance and other configurations;

a) Understanding truffle Configuration
. Creating contract that allow to read and write state.
. How to use keywords that are not working
.How to change solidity compiler inside truffle framework
.How to authorize Execution Policy to run terminal within visualcode.
.How to run two console separately while using console as an Ethereum testing node

b) Cotract interaction Using truffle Console
c) Truffle Mannual Commands and Transactions
d) Ganache Usage with Truffles

//change Compiler setting in Truffle Project
solc = change version .8

# remove Exection Policy restriction for terminal in VsCode

open power shell and wirte this command your test is working in cmd vs code
//command

# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

//connecting one console testing client with another console
//command

# truffle develop

it connect with node
// when you write truffle develop in other cmd it connect with existing node

# truffle develop

# beautifull awasome Commands for truffle Development Console:

## //create instance of smartContract:

# truffle(develop)> let instance = await HelloWorld.deployed()

# truffle(develop)> instance

## //call smart contract Function

# truffle(develop)> instance.setMyName("Hassan")

## send Ether to other user

# truffle(develop)> web3.eth.sendTransaction({from:accounts[1],value:10000000,to:accounts[0] })

## Get Balance of any Account

# truffle(develop)> web3.eth.getBalance("0x18d345678f4567y34234f45234gd")

## convert Wei to Ether

# truffle(develop)> web3.utils.fromWei('10000000000000000','ether')

convert Ether to wei

# truffle(develop)> web3.utils.toWei('1','ether')

//convert Balance of any accounts into Ether ;

# truffle(develop)>web3.utils.fromWei( web3.eth.getBalance("0x18d345678f4567y34234f45234gd"),'ether')

//
Deploy contract on the ropsten By infura and metaMask;
truffle migrate --network ropsten

//get instance with the contract address ;
let instance = Hellow_infura.at('0x63Ba449a90E985E87FC4e10F94a99ffC7342068D')

// if you wanna to connect directly with ropsten by the truffle console

# truffle console --network ropsten

//it give you a ropsten console

# verify

# truffle run verify Hello_infura --network rinkeby

# truffle run verify myNft@0x7d7Aed59dc16109372439A89ff4710f067a13C49 --network ropsten

# truffle migrate --reset --network ropsten

deploy and verify Contract
truffle run verify 0xc3F372C5e7a10dB6Fa4261cDCE18dfa124cEEBB6 --network ropsten
