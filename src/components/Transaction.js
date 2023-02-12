import { Text } from '@chakra-ui/react';

export default function Transaction({ transaction }) {
  return (
    <div>
      <Text>{transaction.hash}</Text>
      <Text>{transaction.from}</Text>
      <Text>{transaction.to}</Text>
      <hr />
    </div>
  );
}
