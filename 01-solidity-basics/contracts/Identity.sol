//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Identity {
    //string and uint are identifire
    // you will be paid for state variable and there is no concepr of null 
    // if you declared uint the automatically 0 wil be stored in that variable
    // by default variale visibility will be private
    string private name;  
    uint public age;
    uint[4] public arr = [10,20,30,40];

    constructor(string memory _deployerName,uint _age) { 
        // console.log("Deploying a Greeter with greeting:", _greeting);
        name = _deployerName;
        age=_age;
        require(_age>18,"Age should be 18+");
    }

    function getName () public view returns(string memory){
        return name;
    }
    // because age is publicaly declared so no need for getter function
    // function getAge ()public view returns(uint){
    //     return age;
    // }

    function setAge (uint _newAge) public {
        age=_newAge;
    }
    function setName (string memory _name) public {
        name=_name;
    }

    // this function not changin any state and not reading state so this will be "pure" function
    function store() pure public returns(string memory){
        // memory keyword can not be used at contract level
        //  state will be stored in stack no it the smart contract storage this will not cost gas
        string memory state = "i am local state varialbe"; //local varialbe
        return state;
    }

    function getArrLength() public view returns(uint) {
        return arr.length;
    }

   

   
}
