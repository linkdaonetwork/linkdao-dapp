import React,{useState,useCallback,useEffect} from 'react'
import "./Dashboard.css"
import { getPrice } from '../../utils'

const Dashboard = () => {
    const [price,setPrice] =useState(0)
    const handlePrice= useCallback(async()=>{
        let pr = await getPrice()
        setPrice(pr)
      },[])
      useEffect(()=>{
        handlePrice()
      },[handlePrice])
    return (
        <>
            <div className="fssd01">
                <div className="fssd02">
                    <div className='fssd03'>10,000,000.00</div>
                    <div className='fssd04'>LKD Total Supply</div>
                </div>

                <div className="fssd02">
                    <div className='fssd03'>320,000.00</div>
                    <div className='fssd04'>LKD Circulating Supply</div>
                </div>


                <div className="fssd02">
                    <div className='fssd03'>$ {parseFloat(price).toFixed(5)}</div>
                    <div className='fssd04'>LKD Price</div>
                </div>

                <div className="fssd02">
                    <div className='fssd03'>$ {(320000*price).toFixed(3)}</div>
                    <div className='fssd04'>LKD Market Cap</div>
                </div>

                <div className="fssd02">
                    <div className='fssd03'>1000</div>
                    <div className='fssd04'>LKD Holders</div>
                </div>

                <div className="fssd02">
                    <div className='fssd03'>50,000.00</div>
                    <div className='fssd04'>LKD Staked</div>
                </div>

                <div className="fssd02">
                    <div className='fssd03'>$ 37,255</div>
                    <div className='fssd04'>Total Value Locked</div>
                </div>

                <div className="fssd02">
                    <div className='fssd03'>0</div>
                    <div className='fssd04'>Active Farms</div>
                </div>

                <div className="fssd02">
                    <div className='fssd03'>2</div>
                    <div className='fssd04'>Active Pool</div>
                </div>

            </div>
        </>
    )
}

export default Dashboard