import React from 'react'
import './modal.css'

const Modal = ({setShowModel}) => {
  return (
    <div className='modal_wrapper' onClick={()=>setShowModel(false)} >
      <div className='single_modal' >
        <h6 className='text-center text-light'>Palce a Bid </h6>
        <p className='text-center text-light' >You must bid at least <span className='money' >5.69</span></p>

        <div className="input_item mb-4">
            <input type="number" placeholder='00:00 ETH' />
        </div>

        <div className="input_item mb-4">
            <h6 className='mb-2'>Enter Quantity</h6>
            <input type="number" placeholder='Enter Quantity' />
        </div>

        <div className='d-flex align-items-center justify-content-between'>
            <p>You must bid at least </p>
            <span className='money' >5.00 ETH</span>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
            <p>Service Free </p>
            <span className='money' >0.69 ETH</span>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
            <p>Total Bid Amount </p>
            <span className='money' >5.69 ETH</span>
        </div>

        <button className='place_bid_btn' >Place a Bid</button>
      </div>
    </div>
  )
}

export default Modal
