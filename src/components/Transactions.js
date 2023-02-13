import { Box, Card, Divider, Heading } from '@chakra-ui/react';
import Transaction from './Transaction';

export default function Transactions({ transactions }) {
  return (
    <Box w='50%' border='1px' borderColor='gray.200' borderRadius='lg'>
      <Heading size='md' m='5'>
        Latest Transactions
      </Heading>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} />
      ))}
    </Box>
  );
}
