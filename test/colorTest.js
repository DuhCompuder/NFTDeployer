const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DeployNFT", function() {
    
    let contract;

    beforeEach(async () => {
        const DeployNFT = await ethers.getContractFactory("DeployNFT");
        contract = await DeployNFT.deploy();
        await contract.deployed();
    })
    it("Should return the new Color once it's changed", async () => {
        
        const address = await contract.address;
        expect(address).to.not.equal(0x0)
        expect(address).to.not.equal('')
        expect(address).to.not.equal(null)
        expect(address).to.not.equal(undefined)
    });

    it("has a name", async () => {
        const name = await contract.name();
        expect(name).to.equal("NFT name")
    })

    it("has a symbol", async () => {
        const symbol = await contract.symbol();
        expect(symbol).to.equal("NFT symbol")
    })
});