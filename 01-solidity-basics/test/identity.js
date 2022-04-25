const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Identity", function () {
  it("It should gave the owner name as Jahanzaib and age > 18", async function () {
    const Identity = await ethers.getContractFactory("Identity");
    const identity = await Identity.deploy("Jahanzaib",19);
    await identity.deployed();

    expect(await identity.getName()).to.equal("Jahanzaib");
    console.log("Deployer name =>",await identity.getName());
    const tx = await identity.setName("Dave")
    expect(await identity.getName()).to.equal("Dave");
    console.log("New name =>", await identity.getName());
    
    expect(await identity.age()).to.equal(19);
    expect(await identity.store()).to.equal("i am local state varialbe");
    const agetx = identity.setAge(25);
    expect(await identity.age()).to.equal(25);
    
    const length = await identity.getArrLength();
    for (let i = 0; i <length; i++) {
      const element = await identity.arr([i]);
      console.log(`array element => ${i} `, element);
      
    }
    
    
    // const setGreetingTx = await greeter.setGreeting("new name");

    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
