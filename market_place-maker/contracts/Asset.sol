// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Asset is ERC721URIStorage {
    uint256 private TokenCount;
    mapping(address => string[]) public mintedAssets;
    string[] public toMintNFT;

    constructor() ERC721("GameAsset", "GAT") {}

    function gameAssetMint(address to, string memory _URI) public {
        _mint(to, TokenCount);
        _setTokenURI(TokenCount, _URI);
        mintedAssets[to].push(_URI);
        TokenCount++;
    }

    function addMintNFT(string memory _URI) external {
        toMintNFT.push(_URI);
    }

    function returnToMintNFT() external view returns (string[] memory) {
        return toMintNFT;
    }

    function returnMintedNFT(
        address _myAddress
    ) external view returns (string[] memory) {
        return mintedAssets[_myAddress];
    }
}
