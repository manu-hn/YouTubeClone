import React from 'react'

const Comments = ({ info }) => {
    // console.log(info?.snippet?.topLevelComment?.snippet)
    return (
        <div className='flex items-center my-3 w-full 2xl:w-[100rem] lg:w-[35rem] md:w-[25rem] 2xl:my-1 scroll-auto' >
            <div className='mr-6'>
                <img className='rounded-full'
                    src={info?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt={'comment user'} />
            </div>
            <div className=''>
                <h6 className=''>{info?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h6>
                <p className=''>{info?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>
        </div>
    )
}

export default Comments