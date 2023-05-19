import React from 'react'
import CommonSection from '../components/ui/CommonSection/CommonSection'
import {Col, Container, Row} from "reactstrap";
import "../styles/wallet.css"

const wallet_data=[
  {
    title:'Bitcoin',
    desc: 'A Bitcoin wallet is a digital wallet that can hold Bitcoin as well as other cryptocurrencies, like Ethereum or XRP.',
    icon:'ri-bit-coin-line',
  },
  {
    title:'Coinbase',
    desc: 'Coinbase Wallet is a separate app that allows you to store your private keys and to send, receive, and spend digital money.',
    icon:'ri-coin-line',
  },
  {
    title:'Metamask',
    desc: 'MetaMask is a cryptocurrency wallet that enables users to store Ether and other ERC-20 tokens.',
    icon:'ri-money-cny-circle-line',
  },
  {
    title:'Authereum',
    desc: 'Authereum is a smart-contract wallet that allows you to just login into any Dapp.No downloads required, no seed phrases',
    icon:'ri-vip-diamond-line',
  },
]


const Wallet = () => {
  return (
    <div>
      <CommonSection title='Wallet'/>
      <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5 text-center' >
                <div className='w-50 m-auto' >
                  <h3 className='text-light'>Connect your wallet</h3>
                  <p>Connecting your wallet is like "logging in" to Web3. Select your wallet from the options to get started.</p>
                </div>
              </Col>
              {
                wallet_data.map((item,index)=>(
                  <Col lg='3'key={index} >
                  <div className='wallet_item' >
                    <span><i class={item.icon}></i></span>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                 </Col>
                ))
              }
              

            </Row>
          </Container>
      </section>
    </div>
  )
}

export default Wallet
