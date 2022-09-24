import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Text } from '@pancakeswap/uikit'

const AstroWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('To trade Astro, you must:')} </Text>
      <Text>• {t('Click on the settings icon')}</Text>
      <Text mb="24px">• {t('Set your slippage tolerance to 12%+')}</Text>
      <Text>{t('This is because Astro taxes a 10% fee on each transaction:')}</Text>
      <Text>• {t('6% fee is used for BUSD rewards redistributed to all existing holders')}</Text>
      <Text>• {t('3% fee is used to add liquidity')}</Text>
      <Text>• {t('1% fee is used for mission control')}</Text>
    </>
  )
}

export default AstroWarning
