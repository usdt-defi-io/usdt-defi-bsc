import React from 'react'
import { Flex, Text, Button, Link, Heading } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import ColoredWordHeading from '../ColoredWordHeading'

import CompositeImage, { CompositeImageProps } from '../CompositeImage'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  images: CompositeImageProps
}

const IsMobileR = styled.div`
  display:flex;
  position:relative;
  flex-direction: row;
  align-items:['flex-end', null, null, 'center'];
  justify-content:center;
@media screen and (max-width: 900px) {
  
  display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}
`
const IsMobile = styled.div`
  display:flex;
  position:relative;
  flex-direction: row-reverse;
  align-items:['flex-end', null, null, 'center'];
  justify-content:center;
@media screen and (max-width: 900px) {
  
  display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}
`

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton,  images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return (
    <Flex flexDirection="column">
      {reverse?<IsMobile
      
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <Heading scale="xl">
      {headingTranslatedText}
    </Heading>
          <Text color="textSubtle" mb="24px">
            {bodyTranslatedText}
          </Text>
          <Flex>
            <Button mr="16px">
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="#000" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
            
          </Flex>
        </Flex>
        <Flex
          height={['500px', null, null, '100%']}
          width={['500px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['10px', null, null, '0']}
        >
          <img width="95%" src={images.attributes[0].src} alt="bnb" />
        </Flex>
      </IsMobile>:<IsMobileR
      
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <Heading scale="xl">
      {headingTranslatedText}
    </Heading>
          <Text color="textSubtle" mb="24px">
            {bodyTranslatedText}
          </Text>
          <Flex>
            <Button mr="16px">
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="#000" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
            
          </Flex>
        </Flex>
        <Flex
           height={['500px', null, null, '100%']}
           width={['500px', null, null, '100%']}
           flex={[null, null, null, '1']}
           mb={['10px', null, null, '0']}
         >
           <img width="95%"  src={images.attributes[0].src} alt="bnb" />
        </Flex>
      </IsMobileR>}
      
    </Flex>
  )
}

export default SalesSection
