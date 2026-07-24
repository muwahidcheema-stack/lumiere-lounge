import React from 'react'
import Skeleton  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
function SkeletonCard(){
    return(
        // <div className='bg-gray-800/60 rounded-xl overflow-hidden flex flex-col '>
        //     <div className='aspect-2/3 w-full bg-gray-700/60'/>
        //     <div className='flex flex-col grow gap-3 justify-between p-4'>
        //         <div className='h-4 bg-gray-700/80 rounded-md w-3/4'/>
        //         <div className='flex items-center justify-between mt-2'>
        //             <div className='h-3 bg-gray-700/60 rounded-md w-1/4'/>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between border border-gray-800">
      
            {/* 1. Poster Image Placeholder */}
            <div className="relative aspect-2/3 w-full bg-gray-800 animate-pulse overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-gray-700/30 to-transparent" />
                
                {/* Rating Badge Placeholder (Top Left) */}
                <div className="absolute top-3 left-3 w-12 h-6 bg-gray-700/60 rounded-full" />
                
                {/* Favorite Icon Placeholder (Top Right) */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-gray-700/60 rounded-full" />
            </div>

            {/* 2. Text Content Placeholder */}
            <div className="p-4 flex flex-col justify-between grow gap-3 bg-gray-900">
                {/* Title Line */}
                <div className="h-4 bg-gray-800 rounded-md w-3/4 animate-pulse" />
                
                {/* Year & Language Badge */}
                <div className="flex items-center justify-between mt-2 pt-1">
                <div className="h-3 bg-gray-800 rounded-md w-10 animate-pulse" />
                {/* <div className="h-4 bg-gray-800 rounded-md w-8 animate-pulse" /> */}
                </div>
            </div>
        </div>
    )
}
function Loader({count = 10}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6'>
        {Array.from({length: count}).map((_,index) => 
            <SkeletonCard key={index}/>
        )}
    </div>
  )
}

export default Loader