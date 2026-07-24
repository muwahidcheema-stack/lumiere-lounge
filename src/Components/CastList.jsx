import React from 'react'
function CastList({cast = []}) {
    const cleanCast = cast.filter((act) => act.profile_path).slice(0,10);
    if(cleanCast.length === 0) return null;
  return (
    <>
        <div className='flex gap-4 scrollbar-thin overflow-x-auto pb-4 scrollbar-thumb-orange-600 '>
            {cleanCast.map((person) => {
                const profileUrl = person.profile_path ? `https://image.tmdb.org/t/p/w185${person.profile_path}` : 'https://via.placeholder.com/185x278?text=No+Profile+Available';

                return(
                    <div className='min-w-30 max-w-30 rounded-lg bg-gray-900 border border-gray-400 overflow-hidden shrink-0'>
                        <img 
                        className='w-full object-cover h-36'
                        src={profileUrl} 
                        alt={person.name} />

                        <div className='p-2'>
                            <p className='text-sm font-semibold line-clamp-1'>{person.name}</p>
                            <p className='text-xs font-semibold line-clamp-1'>{person.character}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default CastList