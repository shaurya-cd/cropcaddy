import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 max-w-4xl w-full'>
        <div>
            <h2 className='font-bold pb-5'>Company</h2>
            <p>How it works</p>
            <p>Prizing</p>
            <p>Docs</p>
        </div>
        <div>
            <h2 className='font-bold pb-5'>Resources</h2>
            <p>Blog post list name goes here</p>
            <p>See resources {">"}</p>
        
        </div>
        <div>
            <h2 className='font-bold pb-5'>About</h2>
            <p>Terms & Conditions</p>
            <p>Privacy policy</p>
        </div>

    </div>
  )
}

export default Footer