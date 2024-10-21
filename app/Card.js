import React from 'react'
import Image from 'next/image'

function Card() {
  return (
    <div className='flex flex-col md:flex-row items-center bg-zinc-100'>
      <Image width='100%' className='rounded-xl' src="https://cdn.prod.website-files.com/66064a2320fc666f748ff8a3/660691a0b34ea0fbb0bc3c98_jan-kopriva-LTMaAwxanGk-unsplash.jpg" />

      <div className='flex-1 p-10'>
          <h2 className='font-bold text-xl'>Precise Agrochemical Dosage</h2>
          <p>Targeted spraying ensures plants get exactly what they need.</p>
          <h2 className='font-bold text-xl'>Up to 90% Chemical Saving</h2>
          <p>Reduce agrochemical use while maintaining effective crop care.</p>
          <h2 className='font-bold text-xl'>Plant-Level Agronomy</h2>
          <p>Customized plant care with real-time Al technology on the field.</p>
      </div>
    </div>
  )
}

export default Card