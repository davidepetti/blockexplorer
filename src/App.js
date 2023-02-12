import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Explorer from './components/Explorer';

export default function App() {
  return (
    <ChakraProvider>
      <Explorer />
    </ChakraProvider>
  );
}
