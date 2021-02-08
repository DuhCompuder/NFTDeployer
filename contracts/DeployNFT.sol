//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DeployNFT is ERC721 {
    constructor() ERC721("NFT name", "NFT symbol") public {
        
    }
}
