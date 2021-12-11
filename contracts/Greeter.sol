// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "hardhat/console.sol";

contract Greeter {
    string public greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() external view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory greeted) external {
        console.log("Changing greeting from '%s' to '%s'", greeting, greeted);
        greeting = greeted;
    }
}
