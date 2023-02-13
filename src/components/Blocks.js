import { Box, Card, Heading } from '@chakra-ui/react';
import Block from './Block';

export default function Blocks({ blocks }) {
  return (
    <Box w='50%' border='1px' borderColor='gray.200' borderRadius='lg'>
      <Heading size='md' m='5'>
        Latest Blocks
      </Heading>
      {blocks.map((block) => (
        <Block block={block} />
      ))}
    </Box>
  );
}
