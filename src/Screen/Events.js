import React from 'react'
import birthimg from '../Assets/birthday.jpg'
import Wedimage from '../Assets/marrige.webp'
import Corpoimage from '../Assets/corporate.jpg'

function Events() {
  return (
    <div class="bg-gray-900 py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-white mb-8">Types of Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src={birthimg} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">BirthDay Party</h3>
                <p class="text-gray-500 text-sm mt-2">Enjoy your Birthday party with loads of fun. We are the most reputed Birthday Party Management Organizer in the country. We can conduct a memorable party.</p>
                
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src={Wedimage} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Wedding Party</h3>
                <p class="text-gray-500 text-sm mt-2">We plan lavish, elegant and glamorous celebrations for those who demand a world-class event with luxury wedding planning services.</p>
                
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src={Corpoimage} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Corporate Events</h3>
                <p class="text-gray-500 text-sm mt-2">Corporate events are organised in order to communicate the company's strategies, initiate change within the enterprise, launch new products, train employees .</p>
                
            </div>
        </div>

    </div>
</div>
  )
}

export default Events

