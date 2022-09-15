// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WavePortal is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public totalWaves;

    struct Wave {
        address from;
        string message;
    }

    mapping(address => Wave[]) wavesByUser;

    event UserWaved(address from, address to);

    constructor() {}

    function wave(string memory _message, address _to) public {
        totalWaves.increment();

        Wave memory newWave = Wave({ from: msg.sender, message: _message });
        wavesByUser[_to].push(newWave);

        emit UserWaved(msg.sender, _to);
    }

    function wavesCount() public view returns (uint256) {
        return totalWaves.current();
    }

    function myWaves() public view returns (Wave[] memory) {
        return wavesByUser[msg.sender];
    }
}
