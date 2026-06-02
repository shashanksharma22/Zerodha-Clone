import React from 'react'

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center'>
                <div className='col p-5'>
                    <h1 className='mb-4 fs-4'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <a className='text-decoration-none' href={learnMore}>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col p-5 d-flex justify-content-center'>
                    <img src={imageURL} style={{maxWidth: '100%', height: 'auto'}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;