import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider, useSession } from 'next-auth/react';
import Navbar from '../components/Navbar';



export default function App({Component,pageProps}: any) {
  return (
    <ChakraProvider>
      <SessionProvider>
        <Navbar/>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}