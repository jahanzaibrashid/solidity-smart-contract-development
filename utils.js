
function saveFrontendFiles(contract,contractName,obj) {
 
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  obj[contractName] = contract.address;

  fs.writeFileSync(contractsDir + "/contract-address.json", JSON.stringify(obj, undefined, 2));

  const TokenArtifact = artifacts.readArtifactSync(contractName);

  fs.writeFileSync(contractsDir + "/"+contractName+".json", JSON.stringify(TokenArtifact, null, 2));
}











async function main(contractName,obj){
  // console.log("contractName",contractName)
  let contractList = fs.readdirSync("./artifacts/contracts");
  if(contractList.length){
    let trimmedNames=[];
    let obj={};
    
    for(let i=0; i<contractList.length; i++){
      const name = contractList[i].replace(".sol","");
      trimmedNames.push(name);
    }

    for await (let name of trimmedNames){
      await deployAllContracts(name,obj);
    }

  }

  async function deployAllContracts(contractName,obj){
    const [deployer] = await ethers.getSigners();
  const Contract = await ethers.getContractFactory(contractName);
  const contract = await Contract.deploy();
  await contract.deployed();
  saveMultipleFiles(contract,contractName,obj);
  }

  function saveMultipleFiles(contract,contractName,obj) { 
    const contractsDir = __dirname + "/../frontend/src/contracts";
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
    obj[contractName] = contract.address;
    fs.writeFileSync(contractsDir + "/contract-address.json", JSON.stringify(obj, undefined, 2));
    const TokenArtifact = artifacts.readArtifactSync(contractName);
    fs.writeFileSync(contractsDir + "/"+contractName+".json", JSON.stringify(TokenArtifact, null, 2));
  }

  
}

