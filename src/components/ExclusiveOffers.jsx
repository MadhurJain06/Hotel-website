import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-slate-50'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <Title align='left' title='Exclusive Offers' subTitle='Discover our exclusive offers and deals, designed to provide you with the best value for your stay.' />
            <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow-icon"
                className='group-hover:translate-x-1 transition-all' />
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl '>
            {/* display cards here */}
            {exclusiveOffers.map((item)=>(
                <div className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat
                bg-cover bg-center ' style={{backgroundImage: `url(${item.image})`}}>
                    <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white font-medium text-gray-800 rounded-full'>{item.priceOff}% OFF!!!</p>
                    <div>
                        <p className='text-2xl font-medium font-playfair'>{item.title}</p>
                        <p>{item.description}</p>
                        <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                    </div>
                    <button className=' flex items-center gap-2 px-4 py-2 font-medium mt-4 mb-5 cursor-pointer'>
                        View Offers!
                        <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="arrow-icon" />
                    </button>
                </div>

            ))}

        </div>
    </div>
  )
}

export default ExclusiveOffers