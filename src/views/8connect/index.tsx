import React, { useEffect } from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import './index.css'
import { Heading } from '@pancakeswap/uikit'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const FlexWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
@media screen and (max-width: 900px) {
}
`
const FlexWrapper2 = styled.div`
  display:flex;
  flex-direction:column;
  margin:20px;
  margin-left:200px;
  margin-right:200px;
@media screen and (max-width: 900px) {
  margin-left:20px;
  margin-right:20px;
}
`

  
const Home: React.FC = () => {
  

  return (
    <FlexWrapper >
      <PageMeta />
     <FlexWrapper2 style={{color:"#fff"}}>
       <Heading textAlign="center" scale='xl'>
         8-CONNECT NETWORKS
       </Heading>
       <br/>
<br/>
     <Heading textAlign="center">The protocol will entail a oracle plugged into 8 different blockchains that will aggregate data 
feeds from pools and farms across them and will have a multichain bridge to facilitate a gas
efficient layer solution for the underlying avenues to be entered and executed in an efficient 
manner. This multichain connection will be the largest interconnected network currently seen in 
the space and will provide a larger selection of yield oppertunities then ever seen before by 
any other protocol.</Heading>


<br/>
<br/>

<Heading textAlign="center">Track your investments over 8 different chains in our dashboard
& seemlessly switch between pools & farms in a gas efficient manner.</Heading>
     </FlexWrapper2>
     <FlexWrapper2 className="networks-block" style={{color:"#fff"}}>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/eth.png" alt="eth"/>
                        <p className="text network-text">Ethereum</p>
                    </div>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/gnosis.png" alt="gnosis"/>
                        <p className="text network-text">Gnosis</p>
                    </div>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/bsc.png" alt="bsc"/>
                        <p className="text network-text">BNB Chain</p>
                    </div>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/avalache.png" alt="avalache"/>
                        <p className="text network-text">Avalanche</p>
                    </div>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/polygon.png" alt="polygon"/>
                        <p className="text network-text">Polygon</p>
                    </div>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/arbitrum.png" alt="arbitrum"/>
                        <p className="text network-text">Arbitrum</p>
                    </div>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/optimism.png" alt="optimism"/>
                        <p className="text network-text">Optimism</p>
                    </div>
                    <div className="main-network">
                        <img style={{maxWidth: "100%"}} className="network-image" src="https://1inch.io/img/main/fantom.png" alt="fantom"/>
                        <p className="text network-text">Fantom</p>
                    </div>
            </FlexWrapper2>
    
        </FlexWrapper>
  )
}

export default Home
