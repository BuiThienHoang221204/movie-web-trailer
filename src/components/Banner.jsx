import IconRating from '../assets/rating.png'
import IconRatingHalf from '../assets/rating-half.png'
import IconPlay from '../assets/play-button.png'
import ImgMovie from '../assets/temp-1.jpeg'
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
        <div className=" absolute w-full h-full top-0 left-0 bg-black opacity-30"/>
        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
            <div className='flex flex-col space-x-5 items-baseline w-[50%]'>
                <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3 text-md">TV Show</p>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-white text-3xl">Nghe nói em thích tôi</h2>
                    <div className="flex items-center space-x-3">
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRatingHalf} alt="rating-half" className='w-8 h-8' />
                    </div>
                    <p className='text-white text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita nihil, 
                        ullam quos alias quo dolor non quia atque, porro qui ipsa ad dolore nemo, at sunt error 
                        itaque ut!
                    </p>
                    <div className='flex items-center space-x-4'>
                        <button className='bg-black text-white p-3 font-bold text-sm'>Chi Tiết</button>
                        <button className='bg-red-600 text-white p-3 font-bold text-sm'>Xem Ngay</button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] w-full flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center 
            backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Banner