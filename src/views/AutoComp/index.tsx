import React, { useEffect } from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'

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

  
const Home: React.FC = () => {
  useEffect(()=>{
    document.getElementById("json").innerHTML = JSON.stringify({
        "chainId": 1,
        "price": "0.996655237748706",
        "guaranteedPrice": "0.98668868537121894",
        "estimatedPriceImpact": "0.417",
        "to": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
        "data": "0xd9627aa400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000005f5e100000000000000000000000000000000000000000000000005594e3d2a18ddee7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000006b175474e89094c44da98b954eedeac495271d0f869584cd000000000000000000000000100000000000000000000000000000000000001100000000000000000000000000000000000000000000001a1b5fdcf762743c29",
        "value": "0",
        "gas": "111000",
        "estimatedGas": "111000",
        "gasPrice": "69000000000",
        "protocolFee": "0",
        "minimumProtocolFee": "0",
        "buyTokenAddress": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "sellTokenAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "buyAmount": "99665523774870600000",
        "sellAmount": "100000000",
        "sources": [
          {
            "name": "0x",
            "proportion": "0"
          },
          {
            "name": "Uniswap",
            "proportion": "0"
          },
          {
            "name": "Uniswap_V2",
            "proportion": "1"
          },
          {
            "name": "Eth2Dai",
            "proportion": "0"
          },
          {
            "name": "Kyber",
            "proportion": "0"
          },
          {
            "name": "Curve",
            "proportion": "0"
          },
          {
            "name": "Balancer",
            "proportion": "0"
          },
          {
            "name": "Balancer_V2",
            "proportion": "0"
          },
          {
            "name": "Bancor",
            "proportion": "0"
          },
          {
            "name": "mStable",
            "proportion": "0"
          },
          {
            "name": "Mooniswap",
            "proportion": "0"
          },
          {
            "name": "Swerve",
            "proportion": "0"
          },
          {
            "name": "SnowSwap",
            "proportion": "0"
          },
          {
            "name": "SushiSwap",
            "proportion": "0"
          },
          {
            "name": "Shell",
            "proportion": "0"
          },
          {
            "name": "MultiHop",
            "proportion": "0"
          },
          {
            "name": "DODO",
            "proportion": "0"
          },
          {
            "name": "DODO_V2",
            "proportion": "0"
          },
          {
            "name": "CREAM",
            "proportion": "0"
          },
          {
            "name": "LiquidityProvider",
            "proportion": "0"
          },
          {
            "name": "CryptoCom",
            "proportion": "0"
          },
          {
            "name": "Linkswap",
            "proportion": "0"
          },
          {
            "name": "Lido",
            "proportion": "0"
          },
          {
            "name": "MakerPsm",
            "proportion": "0"
          },
          {
            "name": "KyberDMM",
            "proportion": "0"
          },
          {
            "name": "Smoothy",
            "proportion": "0"
          },
          {
            "name": "Component",
            "proportion": "0"
          },
          {
            "name": "Saddle",
            "proportion": "0"
          },
          {
            "name": "xSigma",
            "proportion": "0"
          },
          {
            "name": "Uniswap_V3",
            "proportion": "0"
          },
          {
            "name": "Curve_V2",
            "proportion": "0"
          },
          {
            "name": "ShibaSwap",
            "proportion": "0"
          },
          {
            "name": "Synapse",
            "proportion": "0"
          }
        ],
        "orders": [
          {
            "makerToken": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "takerToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "makerAmount": "99665523774870600000",
            "takerAmount": "100000000",
            "fillData": {
              "tokenAddressPath": [
                "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "0x6b175474e89094c44da98b954eedeac495271d0f"
              ],
              "router": "0xf164fc0ec4e93095b804a4795bbe1e041497b92a"
            },
            "source": "Uniswap_V2",
            "sourcePathId": "0x706992d3c01d4895b9086123222ee248b2c9229f074f43ff541fefee06dcff8c",
            "type": 0
          }
        ],
        "allowanceTarget": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
        "sellTokenToEthRate": "2746.39148",
        "buyTokenToEthRate": "2748.66660491188929911"
      }, undefined, 2);
  });

  return (
    <>
      <PageMeta />
     <div style={{color:"#fff",margin:"50px",marginLeft:"200px",marginRight:"200px"}}>
     <h1 style={{fontSize:"larger"}}>Auto compounding vaults are vaults that re-stake your rewards into pools or farms as they grow to increase the yield generated due to restaking more of the underlying asset which in turn = more asset in pool/farm to gain yield from. Our smart algorithms check for historical data and if any, lock up periods to make the most informed decisions for auto compounding strategies while maximizing yield.</h1>
     <h1 style={{fontSize:"larger"}}>Below is an example of a custom API
auto comp stratergy that derives data from 
different routers for auto-compounding 
from farms and pools of different exchanges
and chains more info can be found in our 
docs on how to utilize the algorithm.</h1>
     
     </div>
     <div style={{marginLeft:"auto",marginRight:"auto",width:"500px",height:"300px",display: "block", overflowX: "auto", background: "rgb(0, 56, 49)", color: "rgb(124, 255, 203)", fontSize: "16px", lineHeight:"1.5"}}> <pre id="json" />
     </div>
        </>
  )
}

export default Home
