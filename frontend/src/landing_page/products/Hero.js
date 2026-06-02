import React from 'react'

function Hero() {
    return (
        <div className='container text-center mt-5 p-3 mb-5 border-bottom'>
            <div className='row mb-5'>
                <h1 className='fs-3'>Zerodha Products</h1>
                <h4 className='mt-3 text-muted fs-5'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-3'>Check out our <a href='' className='text-decoration-none'>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;