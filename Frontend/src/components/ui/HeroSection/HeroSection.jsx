import React from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import "./heroSection.css"


const HeroSection = () => {
  return (
    <div>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2>
                  Discover Rare Digital Art, Collect
                  &<span>Sell Extraordinary</span>NFTs
                </h2>
                <p>
                Digital marketplace for cypto assets collections and Non-Fungitable tokens(NFT), sell,   collect and discover digital rare artwork.
                </p>
                <div className="hero_btn">
                  <button className="d-flex gap-2 align-items-center">
                    <i className="ri-rocket-line"></i>
                    <Link to="/market">Explore</Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" className="Right" >
                {/* <div className="hero_img" >
                    <img src={heroImg} className="w-100" />
                </div> */}
                <div className="hero__right" >
                    <div className="r_item" >
                        <img src="/img/i-2.gif"  className="r_item_img  " />
                    </div>
               
                
                    <div className="r_item" >
                        <img src="/img/i-4.gif"  className="r_item_img  " />
                    </div>
                
                    <div className="r_item" >
                        <img src="/img/i-3.gif"  className="r_item_img  " />
                    </div>
                
                    <div className="r_item" >
                        <img src="/img/i-5.gif"  className="r_item_img  " />
                    </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HeroSection;
