import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'USDTd',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x93D00A0fBd822F249458C5f973bee6C5248670a9',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'USDTd-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xF9cB25eE4e9d90000fF26dfE6bb03120501816De',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
  ,
  {
    pid: 3,
    lpSymbol: 'USDTd-MATIC LP',
    lpAddresses: {
      97: '',
      56: '0xa9a572c36125577ce800cf25bc78fdc6a956606f',
    },
    token: serializedTokens.matic,
    quoteToken: serializedTokens.cake,
  }
  ,
  {
    pid: 4,
    lpSymbol: 'USDTd-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xea44c01a899dcb234136ab45a3e07efe79b48394',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.cake,
  }
  ,
  {
    pid: 5,
    lpSymbol: 'USDTd-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x921c289e54e3eff5d83914752699f96fd6f1c0b0',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.cake,
  }
  ,
  {
    pid: 6,
    lpSymbol: 'USDTd-BTC LP',
    lpAddresses: {
      97: '',
      56: '0x1cf2a8af13d56beeefc6cb2e1bd2d85f382993ea',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.cake,
  }
  

]

export default farms
