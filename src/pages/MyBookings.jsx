import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData)
  return (
    <div className='py-28 md:py-35 px-4 md:px-16 pt-32 lg:px-24 xl:px-32'>
        <Title title='My Bookings' subTitle='Easily manage your past, current and upcoming hotel reservations in one place. Plan your trip seamlessly with a few clicks' align='left'/>
    
        <div className='max-w-6xl mt-8 w-full tesxt-gray-800'>
            <div className='hidden md:grid md:grid-cols-[3fr_3fr_3fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                <div className='w-1/3'>Hotels</div>
                <div className='w-1/3'>Data and TImings</div>
                <div className='w-1/3'>Payment</div>
            </div>
            {bookings.map((booking)=>(
              <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_3fr_3fr] w-full border-b border-gray-300 py-6 first:border-t'>
                {/* hotel details */}
                <div className='flex flex-col md:flex-row'>
                  <img src={booking.room.images[0]} alt="hotel-img" 
                  className='min-md:w-44 rounded shadow object-cover ' />
                  <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                    <p className='font-playfair text-2xl'>{booking.hotel.name }</p>
                    <span className='font-inter text-sm'>({booking.room.roomType})</span>
                  
                  <div className='flex items-center gap-1 text-gray-500 mt-2 ml-1 text-xs '>
                    <img src={assets.locationIcon} alt="loc-icon"/>
                    <span>{booking.hotel.address}</span>
                  </div>
                  <div className='flex items-center gap-1 text-gray-500 mt-2 ml-1 text-sm'>
                    <img src={assets.guestsIcon} alt="guest-icon" />
                    <span>Guests: {booking.guests}</span>
                  </div>
                
                  <p className='text-base'>Total: ${booking.totalPrice}</p>
                </div>
                </div>
                {/* Date and timings */}
                <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                  <div>
                    <p>Check-in:</p>
                    <p className='text-gray-500 text-sm'>{new Date(booking.checkInDate).toDateString()}</p>
                  </div>
                  <div>
                    <p>Check-out:</p>
                    <p className='text-gray-500 text-sm'>{new Date(booking.checkOutDate).toDateString()}</p>
                  </div>

                </div>
                
                {/* paymeny status */}
                <div className='flex flex-col items-start justify-center pt-3'>
                 <div className='flex items-center gap-2'>
                    <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}> </div>
                      <p className={`text-sm ${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                        {booking.isPaid ? 'Paid' : 'Not Paid'}
                      </p>
                 </div>
                 { !booking.isPaid && (
                  <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>Pay Now</button>
                 )}

                </div>
              </div>
            ))}
        </div>
    </div>

  )
}

export default MyBookings