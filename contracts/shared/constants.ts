import { keccak256, toUtf8Bytes } from "ethers/lib/utils";
import { ERC20Deployment } from "./ERC20Deployment";

export const ROLES = {
  WITHDRAW_ROLE: keccak256(toUtf8Bytes("WITHDRAW_ROLE")),
  MINTER_ROLE: keccak256(toUtf8Bytes("MINTER_ROLE")),
  URI_SETTER_ROLE: keccak256(toUtf8Bytes("URI_SETTER_ROLE")),
  PAUSER_ROLE: keccak256(toUtf8Bytes("PAUSER_ROLE")),
  UPGRADER_ROLE: keccak256(toUtf8Bytes("UPGRADER_ROLE")),
  MODIFIER_ROLE: keccak256(toUtf8Bytes("MODIFIER_ROLE")),
  TOKEN_SETTER_ROLE: keccak256(toUtf8Bytes("TOKEN_SETTER_ROLE")),
};

export const LINK_TOKEN_ADDRESSES: ERC20Deployment[] = [
  {
    chainId: 1,
    chainName: "Ethereum  Mainnet",
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
  {
    chainId: 42,
    chainName: "Kovan",
    address: "0xa36085F69e2889c224210F603D836748e7dC0088",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
  {
    chainId: 4,
    chainName: "Rinkeby",
    address: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
  {
    chainId: 5,
    chainName: "Goerli",
    address: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
  {
    chainId: 56,
    chainName: "Binance Mainnet",
    address: "0x404460c6a5ede2d891e8297795264fde62adbb75",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
  {
    chainId: 97,
    chainName: "Binance Testnet",
    address: "0x84b9b910527ad5c03a9ca831909e21e236ea7b06",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
  {
    chainId: 137,
    chainName: "Polygon Mainnet",
    address: "0xb0897686c545045afc77cf20ec7a532e3120e0f1",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
  {
    chainId: 80001,
    chainName: "Mumbai Mainnet",
    address: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
    name: "ChainLink Token",
    tokenSymbol: "LINK",
    decimals: 18,
  },
];
