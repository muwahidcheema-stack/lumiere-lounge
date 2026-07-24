import React from 'react'
function TrailerPlayer({video}) {
    const trailer = video?.find((vid) => (
        (vid.type === 'Teaser' || vid.type === 'Teaser') && (vid.site === 'YouTube')
    ));
    if(!trailer){
        return(
            <div className='text-2xl bg-gray-700 border border-gray-900 text-white text-center'>
                No Teaser Available for this Movie.
            </div>
        )
    }
  return (
    <div className='aspect-video w-full rounded-full overflow-hidden shadow-2xl border border-gray-900'>
        <iframe 
        className='w-full h-full'
        src={`https://www.youtube.com/embed/${trailer.key}?rel=0`} 
        title={`${trailer.name}` || 'Movie Teaser'}
        allowFullScreen
        >
        </iframe>
    </div>
  )
}
export default TrailerPlayer