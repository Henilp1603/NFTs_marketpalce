import React from "react";
import { Link } from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import img01 from "../../../assets/images/img-01.jpg"
import ava01 from "../../../assets/images/ava-01.png"
import "./liveAuction.css";
import NFTcard from "../NFT-card/NFTcard";
import{NFT__DATA} from "../../../assets/data/data.js"


function LiveAuction() {
  return (
    <section>
      <Container>
        <Row>
            <Col lg="12" className="mb-5" >
                <div className="live_auction_top d-flex align-items-center justify-content-between " >
                    <h3>Live Auction</h3>
                    <span><Link to="/market" >Explore more</Link></span>
                </div>
            </Col>
               {
                   NFT__DATA.slice(0,4).map((item)=>(
                    <Col lg="3" className="mb-4" md='4' sm='6' >
                        <NFTcard key={item.id} item={item} />
                    </Col>
                ))
               }
        </Row>
      </Container>
    </section>
  );
}

export default LiveAuction;




 