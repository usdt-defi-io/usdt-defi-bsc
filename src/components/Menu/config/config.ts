import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Exchange'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile:false,
    hideSubNav:true,
    items: [
      
    ],
  },
  {
    label: t('Liquidity'),
    icon: 'Swap',
    href: '/add/0x93D00A0fBd822F249458C5f973bee6C5248670a9',
    showItemsOnMobile:false,
    hideSubNav:true,
    items: [
      
    ],
  }
  // ,
  // {
  //   label: t('Bridge'),
  //   href: '',
  //   icon: 'Earn',
  //   showItemsOnMobile:true,
  //   items: [
  //     {
  //       label:"Celer cBridge",
  //       href:"https://cbridge.celer.network/1/56",
  //       type:DropdownMenuItemType.EXTERNAL_LINK
        
  //     },
  //     {
  //       label:"Anyswap bridge",
  //       href:"https://bsc.anyswap.exchange/bridge#/router",
  //       type:DropdownMenuItemType.EXTERNAL_LINK
        
  //     }
  //   ]
  // }
  ,
  {
    label: t('Farms'),
    href: '/farms',
    icon: 'Earn',
    showItemsOnMobile:false,
    hideSubNav:true,
    items: [
      
    ]
  }
  ,
  {
    label: t('Pools'),
    href: '/pools',
    icon: 'Earn',
    showItemsOnMobile:false,
    hideSubNav:true,
    items: [
      
    ],
  }
 

  
]

export default config
