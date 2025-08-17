import React, { useState,useEffect } from 'react'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setmainImage] = useState(null);
    useEffect(() => {
        const room = roomsDummyData.find((room) => ( room._id === id))
        room && setRoom(room)
        room && setmainImage(room.images[0])
    },[]);
    //return when the room data is available
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/* room details  */}
        <div className='flex flex-col md:flex-row gap-2 items-start md:items-center'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='font-inter text-sm'>{room.roomType}</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 rounded-full bg-orange-400 text-white'>20% OFF</p>
        </div>
        {/* room rating  */}
        <div className='flex items-center gap-2 mt-2'>
            <StarRating />
            <p className='ml-2'>200+ reviews</p>
        </div>
        {/* room address  */}
        <div className='flex items-center gap-1 text-gray-600 mt-2'>
            <img src={assets.locationIcon} alt="location-icon" />
            <span>{room.hotel.address}</span>
        </div>
        {/* room images  */}
        <div className='flex flex-col md:flex-row gap-6 mt-4'>
            <div className='lg:w-1/2 w-full mb-6'>
                <img src={mainImage} alt="room image" className='w-full rounded-xl shadow-lg object-cover' />
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length>1 && room.images.map((image, index) =>(
                    <img src={image} key={index} alt="Room Image" onClick={()=>setmainImage(image)} 
                    className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage===image && 'outline-3 outline-orange-500'} `} />
                ))}
            </div>
        </div>
        {/* room description  */}
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                  <h1 className='text-3xl md:text-4xl font-playfair'>
                    Experience Luxurious Comfort in Our Exquisite Rooms
                </h1>
                {/* amenities  */}
                <div className='flex flex-col md:flex-row gap-6 mt-10'>
                    {room.amenities.map((item, index) => (
                        <div key={index} className='flex items-center gap-2 bg-[#F5F5FF]/70 px-3 py-2 rounded-lg mb-2'>
                        <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                        <p className='text-xs '>
                            {item}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
              {/* room price  */}
              <p className='text-2xl text-gray-700 font-medium'>
                  ${room.pricePerNight} <span>per night</span>
              </p>
        </div>
        {/* Checkin Checkout form */}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
          <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
            <div className='flex flex-col'>
              <label htmlFor="checkInDate" className='font-medium'>Check in date</label>
                <input type="date" id='checkInDate' placeholder='Check-in'className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
         </div>
                  <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

          <div className='flex flex-col'>
              <label htmlFor="checkOutDate" className='font-medium'>Check out date</label>
              <input type="date" id='checkOutDate' placeholder='Check-out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>
          <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
          <div className='flex flex-col'>
              <label htmlFor="guests" className='font-medium'>Guests</label>
              <input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>
        </div>
        
        <button type='submit' className='cursor-pointer bg-primary hover:bg-primary-dull active:scale-95 transition-all  text-base rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4'>
           Check Availability
        </button>
          </form>
        {/* common specifications */}
        <div className='mt-25 space-y-4'> 
            {roomCommonData.map((spec, index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                    <div>
                        <p className='text-base'>{spec.title}</p>
                        <p className='text-gray-500'>{spec.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <p className='max-w-3xl border-y border-gray-300 py-10 my-15 text-gray-600'>
            Guests will be allocated rooms at ground floor according to the availability.You can enjoy the beautiful view of the city from your room. The rooms are equipped with all the necessary amenities to ensure a comfortable stay.
            The price includes breakfast and access to the hotel's facilities. The hotel also offers a range of services such as laundry, room service, and concierge service on chargable basis.
            But we are sure that you will love your stay here. The hotel is located in a prime location, close to all the major attractions of the city. You can easily explore the city and return to your room for a relaxing evening. 
            </p>
            {/* host */}
            <div className='flex flex-col items-start gap-4'>
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:w-16 rounded-full'/>
                    <div>
                        <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
                        <div className='flex items-center gap-2 mt-1'>
                            <StarRating />
                            <p className='ml-2'>
                                200+ reviews
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RoomDetails