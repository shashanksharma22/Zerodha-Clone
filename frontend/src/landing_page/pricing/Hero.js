import React from 'react'

function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row text-center border-bottom p-5'>
                <h1>Pricing</h1>
                <h3 className='text-muted fs-5 mt-3 mb-5'>Free equity investments and flat ₹20 trayday and F&O trades</h3>
            </div>
            <div className='row text-center mt-5'>
                <div className='col mt-5 p-5'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-4 mb-4'>Free equity delivery</h1>
                    <p className='text-muted small'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col mt-5 p-5'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h1 className='fs-4 mb-4'>Intraday and F&O trades</h1>
                    <p className='text-muted small'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col mt-5 p-5'>
                    <img src='media/images/pricingMF.svg'/>
                    <h1 className='fs-4 mb-4'>Free direct MF</h1>
                    <p className='text-muted small'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;