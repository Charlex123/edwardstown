import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'EdwardsTown',
  tokenName: 'EdwardsTown',
  tokenSymbol: 'EDWT',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.0055,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x460d68754039480e4Ab0b7414659C95Aa446bAEF",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
