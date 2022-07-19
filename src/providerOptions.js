import Authereum from "authereum";
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
  /* See Provider Options Section */
  metamask: {
    id: "injected",
    name: "Metamask",
    type: "injected",
    check: "isMetaMask",
  },
  walletconnect: {
			package: WalletConnectProvider, // required
			options: {
				infuraId: '0x1E6b54f079157E58CC9b116F924B384509b63F82', //will support the following Mainnet (1), Ropsten (3), Rinkeby(4), Goerli (5) and Kovan (42)
				network: 'mainnet',
				qrcodeModalOptions: {
					mobileLinks: [
						'rainbow',
						'metamask',
						'argent',
						'trust',
						'imtoken',
						'pillar',
						'safepal',
					],
					desktopLinks: ['encrypted ink'],
				},
			},
		},
  authereum: {
    package: Authereum // required
  },
  binancechainwallet: {
    package: true
  }
};

export default providerOptions