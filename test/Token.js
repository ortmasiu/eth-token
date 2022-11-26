const { expect } = require("chai");  // import the expect method from the chai lib
const { ethers } = require("hardhat");  // {} destructures the ethers from the hardhat library

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether");
}

describe("Token", () => {
    let token;

    beforeEach( async () => {
        // Code goes here... Mitigate against repeating code, run this function before each 
        // 1. Fetch Token from blockchain
        const Token = await ethers.getContractFactory("Token"); 
        token = await Token.deploy("Masiu University", "MU", "1000000");  // deploy the the token the blockchain 
        
    })

    describe("Deployment", () => {
        const name = "Masiu University";
        const symbol = "MU";
        const decimals = "18";
        const totalSupply = tokens("1000000");

        // Tests go inside here 
        it("has correct name", async () => {
            // 2. Read token name from blockchain
            // const name = await token.name();
            // 3. Check if the name is correct
            expect(await token.name()).to.equal(name);
        })

        it("has correct symbol", async () => {
            // 2. Read token name from blockchain
            // const symbol = await token.symbol();
            // 3. Check if the name is correct
            expect(await token.symbol()).to.equal(symbol);
        })

        it("has correct decimals", async () => {
            expect(await token.decimals()).to.equal(decimals);
        })

        it("has correct total supply", async () => {
            const value = totalSupply;
            expect(await token.totalSupply()).to.equal(value);
        })
    })

})