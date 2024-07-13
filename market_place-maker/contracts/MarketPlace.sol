// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Asset.sol";

contract MarketPlace is ERC20 {
    address public owner;
    Asset public immutable gameAsset;
    uint private _perAmount;

    constructor(
        uint _tokenToMint,
        address _owner,
        uint _perTokenAmount
    ) ERC20("Degen", "DGN") {
        gameAsset = new Asset();
        _perAmount = _perTokenAmount;
        _mint(_owner, _tokenToMint); // very small amount because it takes high gas fees
        owner = _owner;
    }

    ///@notice to reward a certain user by _amount amount only callable by the owner.

    function mintTokenReward(address _address, uint _amount) external {
        _mint(_address, _amount);
    }

    ///@notice for checking the balance of token of caller account.

    function checkingBalance() external view returns (uint) {
        return balanceOf(msg.sender);
    }

    function returnAsset() external view returns (address) {
        return address(gameAsset);
    }

    function returnOwner() external view returns (address) {
        return owner;
    }

    // ///@notice redeeming  token for a NFT
    function redeemTokens(string memory _URI, uint _NftPrice) external {
        require(balanceOf(msg.sender) >= _NftPrice);
        _transfer(msg.sender, address(this), _NftPrice);
        gameAsset.gameAssetMint(msg.sender, _URI);
    }

    function buyTokens(uint _amount) external payable {
        uint totalPayableAmount = _amount * _perAmount;
        require(msg.value >= totalPayableAmount, "Not Enough Wei");
        uint remainingBalance = msg.value - totalPayableAmount;
        (bool res, ) = payable(msg.sender).call{value: remainingBalance}("");
        require(res);
        _mint(msg.sender, _amount);
    }

    function getMintedNFT() external view returns (string[] memory) {
        return gameAsset.returnMintedNFT(msg.sender);
    }

    function withdrawEther() external {
        (bool res, ) = payable(msg.sender).call{
            value: balanceOf(address(this))
        }("");
        require(res);
    }

    // function contractBalance() external view returns (uint) {
    //     return balanceOf(address(this));
    // }

    ///@notice to receive wei/ethers from external sources like other account

    receive() external payable {}
}
