import React from 'react'

function Universe() {
    return (
        <div className='container mt-5 text-center'>
            <div className='row text-center mt-5'>
                <h1 className='fs-4 mb-4'>The Zerodha Universe</h1>
                <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center p-5 mt-5'>
                <div className='col'>
                    <img src='media/images/zerodhaFundhouse.png' className='mb-3' style={{width: '45%'}}/>
                    <p className='text-small text-muted' style={{margin: '0 auto', maxWidth: '220px'}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col'>
                    <img src='media/images/sensibullLogo.svg' style={{width: '45%'}} className='mb-3'/>
                    <p className='text-small text-muted' style={{margin: '0 auto', maxWidth: '220px'}}>Options trading platform that lets you create strategies, analyze positions, and examine key market data.</p>
                </div>
                <div className='col'>
                    <img src='media/images/goldenpiLogo.png' style={{width: '45%'}} className='mb-3'/>
                    <p className='text-small text-muted' style={{margin: '0 auto', maxWidth: '220px'}}>Investment research platform with detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>
            <div className='row p-5 text-center mb-5'>
                <div className='col'>
                    <img src='media/images/streakLogo.png' style={{width: '45%'}} className='mb-3'/>
                    <p className='text-small text-muted' style={{margin: '0 auto', maxWidth: '220px'}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col'>
                    <img src='media/images/smallcaseLogo.png' style={{width: '45%'}} className='mb-3'/>
                    <p className='text-small text-muted' style={{margin: '0 auto', maxWidth: '220px'}}>Thematic investing platform that helps you invest in diversified portfolios using ETFs.</p>
                </div>
                <div className='col'>
                    <img src='media/images/dittoLogo.png' style={{width: '45%'}} className='mb-3'/>
                    <p className='text-small text-muted' style={{margin: '0 auto', maxWidth: '220px'}}>Personalized advice on life and health insurance, with no spam and no mis-selling.</p>
                </div>
            </div>
            <button className='p-2 btn btn-primary fs-7 mb-5' style={{width: "15%", margin: "0 auto"}}>Signup Now</button>
        </div>
    );
}

export default Universe;
