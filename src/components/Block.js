import { Box, Card, Flex, Spacer, Text } from '@chakra-ui/react';

export default function Block({ block }) {
  return (
    <Card>
      <Flex>
        <Box>
          <Text>{block.number}</Text>
          <Text color='blue'>
            {Math.floor((Date.now() - block.timestamp) / 1000)}
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text>
            Validator {block.miner.slice(0, 8) + '...' + block.miner.slice(-8)}
          </Text>
          <Text>{block.transactions.length}</Text>
        </Box>
      </Flex>
      <hr />
    </Card>
  );
}
