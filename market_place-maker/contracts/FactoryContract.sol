// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MarketPlace.sol";

contract FactoryContract {
    struct InstanceInfo {
        string name;
        address instanceAddress;
    }

    InstanceInfo[] private instances;
    address[] public inst;

    function registerMarketPlace(
        string memory _name,
        uint _perTokenAmount
    ) external {
        address contractInstance = address(
            new MarketPlace(100, msg.sender, _perTokenAmount)
        );
        InstanceInfo memory instancesInfo = InstanceInfo(
            _name,
            contractInstance
        );
        instances.push(instancesInfo);
        inst.push(contractInstance);
    }

    function getInstances() external view returns (InstanceInfo[] memory) {
        return instances;
    }

    function totalRegistered() external view returns (uint) {
        return instances.length;
    }
}
