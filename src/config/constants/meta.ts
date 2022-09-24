import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'USDT DeFi',
  description:
    'The most popular AMM on BSC by user count! Earn USDTd through yield farming or win it in the Lottery, then stake it in USDTd Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by USDT DeFi), NFTs, and more, on a platform you can trust.',
  image: 'https://swap.usdt-defi.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('USDT DeFi')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('USDT DeFi')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('USDT DeFi')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('USDT DeFi')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('USDT DeFi')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('USDT DeFi')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('USDT DeFi')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('USDT DeFi')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('USDT DeFi')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('USDT DeFi')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('USDT DeFi')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('USDT DeFi')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('USDT DeFi')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('USDT DeFi')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('USDT DeFi')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('USDT DeFi')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('USDT DeFi')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('USDT DeFi')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('USDT DeFi Info & Analytics')}`,
        description: 'View statistics for USDT DeFi exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('USDT DeFi Info & Analytics')}`,
        description: 'View statistics for USDT DeFi exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('USDT DeFi Info & Analytics')}`,
        description: 'View statistics for USDT DeFi exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('USDT DeFi')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('USDT DeFi')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('USDT DeFi')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('USDT DeFi')}`,
      }
    default:
      return null
  }
}
