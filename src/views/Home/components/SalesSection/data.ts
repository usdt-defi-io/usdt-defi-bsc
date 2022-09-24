import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'What is DeFi?',
  bodyText: 'Decentralized finance is an emerging financial tech which is based on secure ledgers similar to those used by cryptocurrencies. DeFi eliminates the need for a centralized authority and the fees for management costs associated with them. DeFi is revolutionising the space by letting you be the sole owner and director of your finances with the help of smart contacts to make financial decisions and reap higher returns on your capital not seen in centralized finance.',
  reverse: false,
  primaryButton: {
    to: '/pools',
    text: 'Earn',
    external: false,
  },
  
  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBUSD.png', alt: 'BTC token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Introduction to Aggreg8',
  bodyText: 'Aggreg8 finance is a protocol on the Binance Smart Chain that uses Yield Farming along with Lending & Auto-compounding strategies to maximize and rebalance funds across pools to maximize APY returns. The protocol itself is managed in a decentralized manner and will be maintained by a collective of developers and governed by $USDTd holders that will put proposals forward to improve the strategies, vaults and interface.',
  reverse: true,
  primaryButton: {
    to: 'https://medium.com/@aggreg821/aggreg8-finance-protocol-9db77c9869b8',
    text: 'Learn More',
    external: true,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaUSDT.png', alt: 'Stocks chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Stable-Coin Farms',
  bodyText:
    'Stable coin farms have been gaining popularity in the last few years and decentralised stable coins in particular are becoming a great alternative to hedge funds and pose as a great alternative to traditional currencies that are prone to inflation. Stable coin farms & strategies by the likes of Abracadabra & Curve DAO  offer high low risk returns of 20% + APY. We will be sharing & utilizing similar strategies and avenues as these protocols to yield safe return. Our protocol offers allocations across 10+ low-risk farms for peace of mind and high and safe returns for scenarios like bear markets where traditional farms can be a risky gamble.',
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBNB.png', alt: 'USDTd token' }
    ],
  },
}
