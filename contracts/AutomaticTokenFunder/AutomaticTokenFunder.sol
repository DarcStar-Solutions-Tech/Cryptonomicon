// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

import { PAUSER_ROLE, UPGRADER_ROLE, WITHDRAW_ROLE, MODIFIER_ROLE } from "../shared/libraries/Constants.sol";

contract AutomaticTokenFunder is Initializable, AccessControlUpgradeable, PausableUpgradeable, UUPSUpgradeable {
    using SafeMathUpgradeable for uint256;

    mapping(string => ERC20Upgradeable) private tokens;
    mapping(address => mapping(address => uint256)) private contractBalanceMinimum;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {} //solhint-disable-line no-empty-blocks

    function initialize(address[] memory tokenAddresses) public initializer {
        __TokenFunder_init(tokenAddresses);
    }

    /* solhint-disable func-name-mixedcase */
    // slither-disable-next-line naming-convention
    function __TokenFunder_init(address[] memory tokenAddresses) public {
        __AccessControl_init_unchained();
        __Pausable_init_unchained();
        __UUPSUpgradeable_init_unchained();
        __TokenFunder_init_unchained(tokenAddresses);
    }

    // slither-disable-next-line naming-convention
    function __TokenFunder_init_unchained(address[] memory tokenAddresses) public {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(PAUSER_ROLE, msg.sender);
        _setupRole(UPGRADER_ROLE, msg.sender);
        _setupRole(WITHDRAW_ROLE, msg.sender);
        _setupRole(MODIFIER_ROLE, msg.sender);
        setInitialTokens(tokenAddresses);
    }

    /* solhint-enable func-name-mixedcase */

    function setInitialTokens(address[] memory tokenAddresses) internal {
        uint256 tokenLength = tokenAddresses.length;
        for (uint256 i = 0; i < tokenLength; i++) {
            setToken(tokenAddresses[i]);
        }
    }

    function setToken(address tokenAddress) public onlyRole(MODIFIER_ROLE) {
        ERC20Upgradeable token = ERC20Upgradeable(tokenAddress);
        string memory tokenSymbol = token.symbol();
        tokens[tokenSymbol] = token;
    }

    function deleteToken(string memory tokenSymbol) public onlyRole(MODIFIER_ROLE) {
        delete tokens[tokenSymbol];
    }

    function getTokenAddress(string memory tokenSymbol) public view returns (address) {
        ERC20Upgradeable token = getToken(tokenSymbol);
        return address(token);
    }

    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function withdraw(uint256 amount) external onlyRole(WITHDRAW_ROLE) {

    }

    function getToken(string memory tokenSymbol) internal view returns (ERC20Upgradeable) {
        return tokens[tokenSymbol];
    }

    function depositTokens(string memory tokenSymbol, uint256 amount) external {
        ERC20Upgradeable token = getToken(tokenSymbol);
        require(token.balanceOf(msg.sender) >= amount, "You have insufficient Token Balance");
        token.increaseAllowance(address(this), amount);
    }

    function getTokenBalance(string memory tokenSymbol) public view returns (uint256) {
        ERC20Upgradeable token = getToken(tokenSymbol);
        return token.allowance(msg.sender, address(this));
    }

    function withdrawTokens(string memory tokenSymbol, uint256 amount) external {
        uint256 currentAllowance = getTokenBalance(tokenSymbol);
        require(currentAllowance >= amount, "Insufficient Token deposited");
        ERC20Upgradeable token = getToken(tokenSymbol);
        token.decreaseAllowance(address(this), amount);
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

    // The following functions are overrides required by Solidity.
    function supportsInterface(bytes4 interfaceId) public view override(AccessControlUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function version() external pure returns (string memory) {
        return "1.0";
    }
}
