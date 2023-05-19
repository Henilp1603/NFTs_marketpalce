import React from 'react'
import CommonSection from '../components/ui/CommonSection/CommonSection'
import {Col, Container, Row} from "reactstrap";
import { NFT__DATA } from '../assets/data/data';
import LiveAuction from "../components/ui/LiveAuction/LiveAuction"
import { Link, useParams } from 'react-router-dom';
import "../styles/nftdetails.css"

const NFTdetails = () => {
  const {id} =useParams();
  const singleNft=NFT__DATA.find(item=> item.id === id);
  return (
    <div>
      <CommonSection title={singleNft.title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" >
              <img src={singleNft.imgUrl} alt="" className='w-100 single_nft_img' />
            </Col>
            <Col lg="6" md="6" sm="6" >
              <div className='single_nft_content' >
                <h2>{singleNft.title}</h2>
                <div className='d-flex align-items-center justify-content-between mt-4 mb-4' >
                  <div className='d-flex align-items-center gap-4 single_nft_seen'>
                    <span><i class="ri-eye-line"></i>69</span>
                    <span><i class="ri-heart-line"></i>69</span>
                  </div>
                  <div className='d-flex align-items-center gap-2 single_nft_more ' >
                    <span><i class="ri-send-plane-line"></i></span>
                    <span><i class="ri-more-2-line"></i></span>
                  </div>
                </div>
                <div className='nft_creator d-flex gap-3 align-items-center' >
                    <div className="creator_img">
                      <img src={singleNft.creatorImg} alt="" className='w-100' />
                    </div>
                    <div className="creator_deatils">
                      <p>Created By</p>
                      <h6>{singleNft.creator}</h6>
                    </div>
                </div>
                <p className='my-4'>{singleNft.desc}</p>
                <button className='single_nft_btn d-flex align-items-center gap-2 w-100' ><i class="ri-shopping-bag-line"></i><Link to="/wallet">Place a Bid</Link></button>
              </div>


            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction/>
    </div>
  )
}

export default NFTdetails
