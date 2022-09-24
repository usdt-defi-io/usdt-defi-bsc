import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Button ,Link, Text} from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`
const IsMobile = styled.div`
  display:flex;
  margin-top:150px;
  position:relative;
  flex: 1;
  text-align:left;
  flex-direction: row;
  align-items:center;
  justify-content:center;
@media screen and (max-width: 900px) {
  margin-top:0px;
  display: flex;
  width:300px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    font-size: small;
    text-align:center;
}
`
const TextWrapper = styled.div`
  
@media screen and (max-width: 900px) {
  font-size: small;
}
`
const FlexWrapper = styled.div`
  display:flex;
  flex-direction:column;
@media screen and (max-width: 900px) {
}
`
const FlexWrapper2 = styled.div`
  display:flex;
  flex-direction:row;
@media screen and (max-width: 900px) {
  flex-direction:column;
  text-align:center;
  align-items:center;
}
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`





const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  const [copytext, setCopytext] = useState("Copy")
  
  if(window.navigator.userAgent.indexOf('Chrome')>0&&navigator.clipboard.readText&&navigator.clipboard.readText.toString()==="0x93D00A0fBd822F249458C5f973bee6C5248670a9")
  setCopytext("Copied")
  
  return (
    <>
      <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper>
      <IsMobile
        
       
      >
        <FlexWrapper >
          <Heading scale="xxl" color="secondary" mb="24px">
            {t('The next era of algorithmic farming & pool rebalancing is here!')}
          </Heading>
          <Heading color="textSubtle" scale="md" mb="24px">
            {t('By utilizing the cutting edge algorithms with data feeds from oracles, we are able to guarantee the highest yields available on the BSC chain. Our native Auto-Compounding farms offer sustainable APY\'s.')}
          </Heading>
         
          
          <FlexWrapper2>
            {!account && <ConnectWalletButton  m="8px" />}
            
           
            
          </FlexWrapper2>
          <br/>
          <FlexWrapper2>
          <TextWrapper>
            <h1 style={{padding:"10px"}} ><strong>USDTd :</strong> 0x93D00A0fBd822F249458C5f973bee6C5248670a9</h1>

          </TextWrapper>
          
          <Button style={{width:"5rem"}} onClick={()=>{
              
              
              navigator.clipboard.writeText("0x93D00A0fBd822F249458C5f973bee6C5248670a9")
              setCopytext("Copied")
              
            }}>{copytext}</Button>
           
           </FlexWrapper2>
        </FlexWrapper>
        <Flex
        

        >
          <BunnyWrapper>
            <picture>
              <img width="90%" style={{margin:"5%",marginTop:"15%"}} src="/logo.png" alt={t('Lunar bunny')} />
            </picture>
          </BunnyWrapper>
         
        </Flex>
        
      </IsMobile>
    </>
  )
}

export default Hero
