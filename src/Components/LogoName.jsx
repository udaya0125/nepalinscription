import React from 'react'
import imageone from '../../public/images/title_img_one.png'
import imagetwo from '../../public/images/title_img_two.png'
const LogoName = () => {
  return (
    <div className='flex flex-col mb-2 w-56 md:w-84 rounded-lg md:p-4 p-2 justify-center items-center mx-auto gap-1 bg-[#e1efd8]/90 absolute md:top-1/2 md:left-1/8 top-6/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img src={imageone} className='w-20 md:w-44'/>
        <img src={imagetwo} className='w-20 md:w-44 mb-1'/>
        <p className=' md:text-3xl preeti-heavy mt-1.5 font-bold'>नेपालाभिलेखाः</p>
        <p className=' md:text-3xl font-semibold'>Inscriptions of Nepal</p>
    </div>
  )
}

export default LogoName

//md:top-4/5