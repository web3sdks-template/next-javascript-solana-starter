import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Web3sdksProvider } from "@web3sdks/react/solana";
import "../styles/globals.css";

// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
const network = "mainnet-beta";

function MyApp({ Component, pageProps }) {
  return (
    <Web3sdksProvider network={network}>
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </Web3sdksProvider>
  );
}

export default MyApp;
