import React from 'react'

function Hero() {
    return (
        <section className='supportHero'>
            <div className='container text-white p-5'>
                <div className='d-flex justify-content-between mb-5'>
                    <h4 className='fs-4'>Support Portal</h4>
                    <a className='text-white' href=''>Track ticket</a>
                </div>
                <div className='row pt-3'>
                    <div className='col-6'>
                        <h1 className='fs-3 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                        <input style={{ fontSize: '1.1rem', outline: 'none' }} className="mb-4 w-100 border-0 rounded-2 px-4 py-4 shadow-sm" type='text' placeholder="Eg: how do i activate F&O, why is my order getting rejected.."></input>
                        <a className='text-white me-3' href=''>Track account opening</a>
                        <a className='text-white me-3' href=''>Track segment activation</a>
                        <a className='text-white me-3' href=''>Intraday margins</a>
                        <a className='text-white me-3' href=''>Kite user manual</a>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-5 ps-5'>
                        <h1 className='fs-3'>Featured</h1>
                        <ol className="text-white ps-3 ms-3">
                            <li className="mb-2">
                                <a className="text-white" href="">
                                    Current Takeovers and Delisting - January 2024
                                </a>
                            </li>
                            <li>
                                <a className="text-white" href="">
                                    Latest Intraday leverages - MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;