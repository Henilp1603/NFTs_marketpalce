import React, { useState } from 'react'
import CommonSection from '../components/ui/CommonSection/CommonSection'
import {Col, Container, Row} from "reactstrap";
import { NFT__DATA } from '../assets/data/data';
import NFTcard from '../components/ui/NFT-card/NFTcard';
import '../styles/market.css'


const Market = () => {

  const [data,setData]=useState(NFT__DATA);
  const handleCategories=()=>{

  }

  const handleItems=()=>{

  }

  const handleSort=(e)=>{
      const filterValue=e.target.value;

      if (filterValue === "high") {
        const filterData=NFT__DATA.filter(item=>item.currentBid >=6);

        setData(filterData);
      }

      if (filterValue === "mid") {
        const filterData=NFT__DATA.filter(item=>item.currentBid >=5.50 && item.currentBid <6);

        setData(filterData);
      }

      if (filterValue === "low") {
        const filterData=NFT__DATA.filter(item=>item.currentBid >=4.69 && item.currentBid<5.5);

        setData(filterData);
      }
  }
  return (
    <div>
      <CommonSection title={"Market Place"} />

      <section className='market_section'>
          <Container>
            <Row>
              <Col lg="12" className='mb-5' >
                <div className='market_product_filter d-flex align-items-center justify-content-between '>
                  <div className='filter_left d-flex align-items-center gap-5 ' >
                    <div className='all_category_filter'>

                      
                      <select onChange={handleCategories} >
                        <option>All Categories</option>
                        <option value="art">Art</option>
                        <option value="music">Music</option>
                        <option value="domain-name">Domain Name</option>
                        <option value="virtual-world">Virtual World</option>
                        <option value="trending-card">Trending Cards </option>
                      </select>
                    </div>

                    <div className='all_itrms_filter'>

                      
                      <select onChange={handleItems} >
                        <option>All Items</option>
                        <option value="single-item">Single Item</option>
                        <option value="bundle">Bundle</option>
                      </select>
                    </div>
                  </div>

                  <div className='filter_right' >
                    
                 
                      <select onChange={handleSort} >
                        <option>Sort By</option>
                        <option value="high">High Rate</option>
                        <option value="mid">Mid Rate</option>
                        <option value="low">Low Rate</option>
                      </select>
                  </div>
                </div>
              </Col>
              {
                   data.map((item)=>(
                    <Col lg="3" className="mb-4" md='4' sm='6' >
                        <NFTcard key={item.id} item={item} />
                    </Col>
                   ))
              }
            </Row>
          </Container>
      </section>
    </div>
  )
}

export default Market
