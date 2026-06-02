import React from 'react'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center'>
                <div className='col p-5 d-flex justify-content-center'>
                    <img src={imageURL} style={{maxWidth: '100%', height: 'auto'}}/>
                </div>
                <div className='col p-5'>
                    <h1 className='fs-4 mb-4'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a className="text-decoration-none" href={tryDemo}>Try demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a className="text-decoration-none" href={learnMore} style={{marginLeft:"70px"}}>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt='Google Play'/></a>
                        <a href={appStore} style={{marginLeft:"25px"}}><img src='media/images/appstoreBadge.svg' alt='App Store'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;