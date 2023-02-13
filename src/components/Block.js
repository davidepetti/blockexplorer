import { Box, Card, Divider, Flex, Spacer, Text } from '@chakra-ui/react';

export default function Block({ block }) {
  const getFormattedTimestamp = () => {
    const seconds = Math.floor(Date.now() / 1000) - block.timestamp;
    return seconds > 59 ? '1 min ago' : seconds + ' secs ago';
  };

  return (
    <Card m='5' p='5'>
      <Flex justifyContent='space-around'>
        <Box>
          <Text>{block.number}</Text>
          <Text color='gray.500'>{getFormattedTimestamp()}</Text>
        </Box>

        <Box alignContent='start'>
          <Text>
            Validator {block.miner.slice(0, 8) + '...' + block.miner.slice(-8)}
          </Text>
          <Text>{block.transactions.length} txns</Text>
        </Box>
      </Flex>
    </Card>
  );
}
