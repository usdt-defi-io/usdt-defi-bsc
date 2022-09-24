import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xA35Bebc62A8B777954dAE84236198a6557917d36',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.03',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.usdt,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x79b36e8568fb959579d40a21493bb33cb5fa8b05',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '74',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.usdc,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa2c89aa547e35b4be879d6b23f1c2f82262cf325',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '69.8',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.wbnb,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x5168ff5fa110033f69170deea6bd2936fa4546da',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '89.5',
    sortOrder: 1,
    isFinished: false,
  }
  
]

export default pools
