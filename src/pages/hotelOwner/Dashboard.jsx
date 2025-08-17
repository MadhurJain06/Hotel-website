import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
        <Title align='left' font='outfit' title='Dashboard' subTitle='Monitor your room listings, track bookings, and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations.  ' />
        <div className='flex gap-4 mt-8'>
            {/* total bookings */}
            <div className='bg-primary/3 border border-primary/10 rounded-lg p-6 flex pr-8'>
                <img src={assets.totalBookingIcon} alt="bookings" className='max-sm:hidden h-10' />
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Bookings</p>
                    <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
                </div>
            </div>
            {/* total revenue */}
              <div className='bg-primary/3 border border-primary/10 rounded-lg p-6 flex pr-8'>
                  <img src={assets.totalRevenueIcon} alt="total-rev" className='max-sm:hidden h-10' />
                  <div className='flex flex-col sm:ml-4 font-medium'>
                      <p className='text-blue-500 text-lg'>Total Revenue</p>
                      <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
                  </div>
              </div>
        </div >
              {/* reecent bookings */}
              <h2 className='text-xl text-blue-950/70 font-medium mb-2 mt-8'>Recent Bookings</h2>
              <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
                    <table className='w-full'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amt.</th>
                                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {dashboardData.bookings.map((item, index)=>(
                                <tr key={index}>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>$ {item.totalPrice}</td>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                                        <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                            {item.isPaid ? 'Completed' : 'Pending'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
              </div>

    </div>
  )
}

export default Dashboard