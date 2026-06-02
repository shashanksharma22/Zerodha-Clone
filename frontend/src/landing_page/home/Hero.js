import React from 'react'

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                    <img src='/media/images/homeHero.png' alt='HeroImage' className='mb-5'/>
                    <h1 className='mt-5 fs-3 mb-3'>Invest in everything</h1>
                    <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds and more.</p>
                    <button className='p-2 btn btn-primary fs-7 mb-5' style={{width: "15%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;