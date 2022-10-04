// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract WavePortal is Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter public totalWaves;

    struct Wave {
        address from;
        string message;
    }

    struct WaveFund {
        uint256 reward;
        uint256 total;
    }

    mapping(address => Wave[]) wavesByUser;
    mapping(address => WaveFund) private _fundByUser;

    event UserWaved(address from, address to);

    constructor() {}

    function setReward(uint256 _newPrize) public {
        _fundByUser[msg.sender].reward = _newPrize;
    }

    function getReward() public view returns (uint256) {
        return _fundByUser[msg.sender].reward;
    }

    function getFunds() public view returns (uint256) {
        return _fundByUser[msg.sender].total;
    }

    function fund() public payable {
        _fundByUser[msg.sender].total = _fundByUser[msg.sender].total.add(msg.value);
    }

    function withdraw() public {
        require(_fundByUser[msg.sender].total <= address(this).balance, 'Insufficient funds for withdrawing ETH');
        ( bool success, ) = msg.sender.call{ value: _fundByUser[msg.sender].total }("");
        require(success, 'Failed to withdraw ETH though the funds are sufficient');
        _fundByUser[msg.sender].total = 0;
    }

    function wave(string memory _message, address _to) public {
        totalWaves.increment();

        Wave memory newWave = Wave({ from: msg.sender, message: _message });

        WaveFund memory _fund = _fundByUser[_to];

        if (_fund.reward > 0) {
            require(
                (
                    _fund.reward <= address(this).balance
                    && _fund.reward <= _fund.total
                ),
                'Insufficient funds for withdrawing ETH after Wave'
            );
            ( bool success, ) = msg.sender.call{ value: _fund.reward }("");
            require(success, 'Failed to withdraw ETH though the funds are sufficient');
            
            _fundByUser[_to].total = _fundByUser[_to].total.sub(_fund.reward);
        }

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
