import { Card, Text, Flex, Box } from '@chakra-ui/react';

export default function Transaction({ transaction }) {
  return (
    <Card m='5' p='5'>
      <Flex justifyContent='space-around'>
        <Box m='auto'>
          <Text>
            {transaction.hash.slice(0, 8) + '...' + transaction.hash.slice(-8)}
          </Text>
        </Box>
        <Box alignContent='start'>
          <Text>
            From{' '}
            {transaction.from.slice(0, 8) + '...' + transaction.from.slice(-8)}
          </Text>
          <Text>
            To {transaction.to.slice(0, 8) + '...' + transaction.to.slice(-8)}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
