import { Box, Heading, Input } from '@chakra-ui/react';

export default function Search() {
  return (
    <Box my='10'>
      <Heading size='md' my='5'>
        The Ethereum Blockchain Explorer
      </Heading>
      <Input placeholder='Search by Address'></Input>
    </Box>
  );
}
