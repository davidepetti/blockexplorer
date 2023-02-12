import { useEffect, useState } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import { Flex, Container, Spacer, HStack } from '@chakra-ui/react';

import Blocks from './Blocks';
import Search from './Search';
import Transactions from './Transactions';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

export default function Explorer() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const blockNumber = await alchemy.core.getBlockNumber();
      let blocks = [];
      for (let i = 0; i < 5; i++) {
        const block = await alchemy.core.getBlockWithTransactions(
          blockNumber - i
        );
        blocks.push(block);
      }
      setBlocks(blocks);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Container maxW='container.xl' my='20'>
      <Search />
      <HStack w='100%'>
        <Blocks blocks={blocks} />
        {blocks.length ? (
          <Transactions transactions={blocks[0].transactions.slice(0, 5)} />
        ) : (
          <Transactions transactions={[]} />
        )}
      </HStack>
    </Container>
  );
}

const BLOCK_NUMBER = 16606514;

const BLOCKS = [
  {
    hash: '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
    parentHash:
      '0x7ad761f2ed235ce521869583475bd7e9dacda69288f697b8b67a30549f4f0ffa',
    number: 16606514,
    timestamp: 1676130515,
    nonce: '0x0000000000000000',
    difficulty: 0,
    gasLimit: {
      type: 'BigNumber',
      hex: '0x01c9c380',
    },
    gasUsed: {
      type: 'BigNumber',
      hex: '0xa6b501',
    },
    miner: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5',
    extraData: '0x6265617665726275696c642e6f7267',
    transactions: [
      '0x2d80553ca7e91e377f1db9c5c94e336e3d8add82e91911d166abc55c83b9e4a4',
      '0xbe1bd47a9873d0a75f194879eee7aba68228ba61be32148f756550ca5703f368',
      /*...*/
    ],
    baseFeePerGas: {
      type: 'BigNumber',
      hex: '0x044563d108',
    },
    _difficulty: {
      type: 'BigNumber',
      hex: '0x00',
    },
  },
  {
    hash: '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
    parentHash:
      '0x7ad761f2ed235ce521869583475bd7e9dacda69288f697b8b67a30549f4f0ffa',
    number: 16606514,
    timestamp: 1676130515,
    nonce: '0x0000000000000000',
    difficulty: 0,
    gasLimit: {
      type: 'BigNumber',
      hex: '0x01c9c380',
    },
    gasUsed: {
      type: 'BigNumber',
      hex: '0xa6b501',
    },
    miner: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5',
    extraData: '0x6265617665726275696c642e6f7267',
    transactions: [
      '0x2d80553ca7e91e377f1db9c5c94e336e3d8add82e91911d166abc55c83b9e4a4',
      '0xbe1bd47a9873d0a75f194879eee7aba68228ba61be32148f756550ca5703f368',
      /*...*/
    ],
    baseFeePerGas: {
      type: 'BigNumber',
      hex: '0x044563d108',
    },
    _difficulty: {
      type: 'BigNumber',
      hex: '0x00',
    },
  },
];

const TRANSACTIONS = [
  {
    hash: '0x2d80553ca7e91e377f1db9c5c94e336e3d8add82e91911d166abc55c83b9e4a4',
    type: 2,
    accessList: [],
    blockHash:
      '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
    blockNumber: 16606514,
    transactionIndex: 0,
    confirmations: 15,
    from: '0x43e4715ae093a4C86B5eCdDb52216c4f879e9672',
    gasPrice: {
      type: 'BigNumber',
      hex: '0x0480fe9b08',
    },
    maxPriorityFeePerGas: {
      type: 'BigNumber',
      hex: '0x3b9aca00',
    },
    maxFeePerGas: {
      type: 'BigNumber',
      hex: '0x06a3b0838c',
    },
    gasLimit: {
      type: 'BigNumber',
      hex: '0x036e7a',
    },
    to: '0xA69babEF1cA67A37Ffaf7a485DfFF3382056e78C',
    value: {
      type: 'BigNumber',
      hex: '0xad04',
    },
    nonce: 126583,
    data: '0x78e111f60000000000000000000000009f27f8d357084a51928a010caf7d91d9157854b1000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c41f3cc1fe0000000000000000000000000000000000000000000000007a249c90ef1bb0e400000000000000000000000000000000000000000007ddd7627a6f7bc0000000000000000000000000000000000000000000000a450e7548669e36294440bfd90000000000000000000000000000000000000000000000000021c961fa1456700000000000000000000000000000000000000000000000000000000063e7b90b000000000000000000000000000000000000000a48163891bae580e25c1f4fe000000000000000000000000000000000000000000000000000000000',
    r: '0x6a528bbab0080c3b9c43911775fced24dfaaa8a46aa9ca56d75751499b690400',
    s: '0x3ea3428609ccb8f0347ad90c4274872037d61ce3b2abf29a2612706e00cdc4d9',
    v: 1,
    creates: null,
    chainId: 1,
  },
  {
    hash: '0x12ab7c33b592d5790315f5dcac2a74f49d4ec7857f28875a54c5421365c1a357',
    type: 2,
    accessList: [],
    blockHash:
      '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
    blockNumber: 16606514,
    transactionIndex: 1,
    confirmations: 15,
    from: '0xD9865ee7c7Bd8e3dE72c19ae298903d22AFe3541',
    gasPrice: {
      type: 'BigNumber',
      hex: '0x0480fe9b08',
    },
    maxPriorityFeePerGas: {
      type: 'BigNumber',
      hex: '0x3b9aca00',
    },
    maxFeePerGas: {
      type: 'BigNumber',
      hex: '0x06711c6a11',
    },
    gasLimit: {
      type: 'BigNumber',
      hex: '0x05375d',
    },
    to: '0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B',
    value: {
      type: 'BigNumber',
      hex: '0x0853a0d2313c0000',
    },
    nonce: 26,
    data: '0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000063e7bf9f00000000000000000000000000000000000000000000000000000000000000020b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000853a0d2313c0000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000853a0d2313c0000000000000000000000000000000000000000000000000044d3eafb7f2f575b9c00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20001f4a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000bb8c91a71a1ffa3d8b22ba615ba1b9c01b2bbbf55ad000000000000000000000000000000000000000000000000000000000000',
    r: '0xc5789860c9eaf98e48b09072880a8f791ebdf43c066d0b74fbbdfcf1f60f421f',
    s: '0x58b8323700a525c7a0ae5627fd11daab506b5267429dce70587e390e7f4c2d29',
    v: 0,
    creates: null,
    chainId: 1,
  },
];

const TX_RECEIPT = {
  to: '0xA69babEF1cA67A37Ffaf7a485DfFF3382056e78C',
  from: '0x43e4715ae093a4C86B5eCdDb52216c4f879e9672',
  contractAddress: null,
  transactionIndex: 0,
  gasUsed: {
    type: 'BigNumber',
    hex: '0x01b789',
  },
  logsBloom:
    '0x00000000000000000000000000000001000000000000000002000000000000000001400000000000000000000000000002000000080024000000000000000000000080000000000800000008000040000000000000000000000000000000000000000000000000000000000000002000000000000000000000000010000800000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000002040000000000000002000000000000000000000000000000000000000000000000000000000001200008000010000000000000000000000000000000000000000000000000',
  blockHash:
    '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
  transactionHash:
    '0x2d80553ca7e91e377f1db9c5c94e336e3d8add82e91911d166abc55c83b9e4a4',
  logs: [
    {
      transactionIndex: 0,
      blockNumber: 16606514,
      transactionHash:
        '0x2d80553ca7e91e377f1db9c5c94e336e3d8add82e91911d166abc55c83b9e4a4',
      address: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
      topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x00000000000000000000000092560c178ce069cc014138ed3c2f5221ba71f58a',
        '0x00000000000000000000000056178a0d5f301baf6cf3e1cd53d9863437345bf9',
      ],
      data: '0x00000000000000000000000000000000000000000000003240a83cefa75f96b6',
      logIndex: 0,
      blockHash:
        '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
    },
    {
      transactionIndex: 0,
      blockNumber: 16606514,
      transactionHash:
        '0x2d80553ca7e91e377f1db9c5c94e336e3d8add82e91911d166abc55c83b9e4a4',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x00000000000000000000000056178a0d5f301baf6cf3e1cd53d9863437345bf9',
        '0x00000000000000000000000092560c178ce069cc014138ed3c2f5221ba71f58a',
      ],
      data: '0x0000000000000000000000000000000000000000000000007a249c90ef1bb0e4',
      logIndex: 1,
      blockHash:
        '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
    },
    {
      transactionIndex: 0,
      blockNumber: 16606514,
      transactionHash:
        '0x2d80553ca7e91e377f1db9c5c94e336e3d8add82e91911d166abc55c83b9e4a4',
      address: '0x92560C178cE069CC014138eD3C2F5221Ba71f58a',
      topics: [
        '0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67',
        '0x000000000000000000000000a69babef1ca67a37ffaf7a485dfff3382056e78c',
        '0x00000000000000000000000056178a0d5f301baf6cf3e1cd53d9863437345bf9',
      ],
      data: '0x0000000000000000000000000000000000000000000000007a249c90ef1bb0e4ffffffffffffffffffffffffffffffffffffffffffffffcdbf57c31058a0694a000000000000000000000000000000000000000a450e7548669e36294440bfd9000000000000000000000000000000000000000000000b9bb734f18d3d503496000000000000000000000000000000000000000000000000000000000000b5fa',
      logIndex: 2,
      blockHash:
        '0xae159315a46c8a8decebfab01756949025637b73dd4da27f6c9ef7b157da3580',
    },
  ],
  blockNumber: 16606514,
  confirmations: 36,
  cumulativeGasUsed: {
    type: 'BigNumber',
    hex: '0x01b789',
  },
  effectiveGasPrice: {
    type: 'BigNumber',
    hex: '0x0480fe9b08',
  },
  status: 1,
  type: 2,
  byzantium: true,
};
