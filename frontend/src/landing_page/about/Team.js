import React from 'react'

function Team() {
    return (
        <div className='container'>
            <div className='row mt-5 p-5'>
                <h1 className='text-center mb-5'>People</h1>
            </div>
            <div className='row p-3 text-muted'>
                <div className='col text-center'>
                    <img src='/media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"50%"}}/>
                    <h5 className='mb-3 mt-4'>Nithin Kamath</h5>
                    <h6 className='text-muted'>Founder, CEO</h6>
                </div>
                <div className='col p-3'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a className='text-decoration-none' href=''>Homepage</a> / <a className='text-decoration-none' href=''>TradingQnA</a> / <a className='text-decoration-none' href=''>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;