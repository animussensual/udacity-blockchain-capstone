pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./ERC721EnumerableWithMetaData.sol";
import 'openzeppelin-solidity/contracts/utils/Address.sol';
import 'openzeppelin-solidity/contracts/drafts/Counters.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';
import "./Verifier.sol";

contract SolnSquareVerifier is ERC721EnumerableWithMetaData {
    using SafeMath for uint256;
    using Address for address;
    using Counters for Counters.Counter;

    Verifier private _verifier;

    struct Solution {
        uint256 index;
        address owner;
        uint256 token;
    }

    mapping(uint256 => Solution) _tokenSolutions;

    event SolutionAdded(uint256 index, address owner, uint256 token);

    constructor(address verifier, string memory symbol, string memory name, string memory baseURI)
    public ERC721EnumerableWithMetaData(symbol, name, baseURI){
        _verifier = Verifier(verifier);
    }

    /**
     * @dev Add a solution to the list of solutions

     * @param proofA First part of the proof
     * @param proofB Second part of the proof
     * @param proofC Third part of the proof
     * @param input Input to the verification
     */
    function addSolution(uint256[2] memory proofA, uint256[2][2] memory proofB, uint256[2] memory proofC, uint256[2] memory input) public {
        uint256 token = input[0];

        require(_tokenSolutions[token].owner == address(0), "Solution already exists");

        Verifier.Proof memory proof;
        proof.a = Pairing.G1Point(proofA[0], proofA[1]);
        proof.b = Pairing.G2Point(proofB[0], proofB[1]);
        proof.c = Pairing.G1Point(proofC[0], proofC[1]);

        require(_verifier.verifyTx(proof, input), "Invalid proof");

        Solution memory solution = Solution({
        index : token,
        owner : msg.sender,
        token : token
        });
        _tokenSolutions[token] = solution;

        emit SolutionAdded(token, msg.sender, token);
    }

    /**
    * @dev It checks if solution for this token exists and only then mints the token.
    * Parent contracts check that token is already not minted
    * @param _token The token to mint
    */
    function mint(address _to, uint256 _token) public returns(bool){
        require(_tokenSolutions[_token].owner == _to, "Solution does not exist");

        return super.mint(_to, _token);
    }
}






























