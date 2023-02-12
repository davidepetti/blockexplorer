import { Box, Card, Heading } from '@chakra-ui/react';
import Transaction from './Transaction';

export default function Transactions({ transactions }) {
  return (
    <Box w='50%'>
      <Heading>Transactions</Heading>
      <Card>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </Card>
    </Box>
  );
}
