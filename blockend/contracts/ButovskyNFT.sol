// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract ButovskyNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    using Strings for uint256;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    Counters.Counter private _nonce;

    string[] firstWords = ['Average', 'Typical', 'Ordinary', 'Extra', 'Legendary', 'Experienced', 'Grown', 'Senior', 'Middle', 'Junior'];
    string[] secondWords = ['Anime', 'Gaming', 'Workout', 'Music', 'Tiktok', 'Movie', 'Coding', 'Meme', 'Cartoon', 'Networking'];
    string[] thirdWords = ['Fan', 'Enjoyer', 'Enthusiast', 'Master', 'Adept', 'Guru', 'Expert', 'Advocate', 'Researcher', 'Hater'];

    event Minted(address to, uint256 tokenId);
    
    constructor() ERC721("Butovsky NFT", "BDT") {
    }

    function generateSVG() internal returns (string memory) {
        bytes memory svg = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
                '<style>.base { fill: white; font-family: serif; font-size: 14px; }</style>',
                '<rect width="100%" height="100%" fill="black" />',
                '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">', generateName(),'</text>',
            '</svg>'
        );
        return string(
            abi.encodePacked(
                'data:image/svg+xml;base64,',
                Base64.encode(svg)
            )
        );
    }

    function generateJSON(uint256 tokenId) internal returns (string memory) {
        string memory svg = generateSVG();
        bytes memory json = abi.encodePacked(
            '{',
                '"name": "butovsky.dev #', tokenId.toString(), '",',
                '"description": "Welcome to my portfolio website!",',
                '"image": "', svg, '"',
            '}' 
        );

        return string(
            abi.encodePacked(
                'data:application/json;base64,',
                Base64.encode(json)
            )
        );
    }

    function generateName() internal returns (string memory) {
        return string(
            abi.encodePacked(
                firstWords[pseudoRandom(10)],
                secondWords[pseudoRandom(10)],
                thirdWords[pseudoRandom(10)]
            )
        );
    }

    function pseudoRandom(uint max) internal returns (uint256) {
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, _nonce.current()))) % max;
        _nonce.increment();
        return random;
    }

    function safeMint()
        public
        onlyOnce
    {
        uint256 tokenId = _tokenIds.current();
        string memory json = generateJSON(tokenId);

        /* for local development
        console.log("\n--------------------");
        console.log(
            string(
                abi.encodePacked(
                    "https://nftpreview.0xdev.codes/?code=",
                    json
                )
            )
        );
        console.log("--------------------\n");
        */

        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, json);

        emit Minted(msg.sender, tokenId);

        _tokenIds.increment();
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    /*
    function _baseURI()
        internal
        pure
        override(ERC721)
        returns (string memory) 
    {
        return "ipfs://";
    }
    */

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }


    function checkNotClaimed() public view returns (bool) {
        return (balanceOf(msg.sender) == 0);
    }

    modifier onlyOnce() {
        require(checkNotClaimed(), 'BDT NFT count must be 0 in order to mint');
        _;
    }
}