import Image from 'next/image'
import EOS from "../../public/cameras/eos.png"
import Pic2 from './NewComponents/Pic2'

function CameraCategories() {
  return (
    <div data-scroll-section className='h-screen w-screen relative grid grid-cols-5 border-t border-b border-white overflow-hidden'>
        <div className='relative col-span-5 md:col-span-2'>
            <Image 
                data-scroll
                data-scroll-speed={-5}
                src={EOS.src}
                height={EOS.height-100}
                width={EOS.width-100}
                alt=''
                className='absolute bottom-[8%]'
            />
        </div>
        <div className='col-span-5 md:col-span-3 flex flex-col md:flex-row md:border-l-[20px] border-white h-screen'>
          <div className='bg-[#8d2a25] h-screen flex-1 duration-500 first-drawer relative flex items-start pt-10 overflow-hidden group'>
            <p className='md:absolute right-10 text-4xl md:text-[6.5rem] md:[writing-mode:vertical-rl]'>
              Interchangeable <br />
              <span className='text-xl md:text-4xl md:absolute bottom-5 md:mr-10'>lens camera</span>
            </p>
            <div className='flex flex-col gap-y-5'>
              <Pic2 text={"POWER LENS"}/>
              <Pic2 text={"WIDE VIEW LENS"}/>
            </div>
          </div>
          <div className='bg-[#71221e] h-screen flex-1 duration-500 second-drawer relative flex items-start pt-10 overflow-hidden'>
            <p className='md:absolute right-10 text-4xl md:text-[6.5rem] md:[writing-mode:vertical-rl]'>
              Digital <br />
              <span className='text-xl md:text-4xl md:absolute bottom-5 uppercase md:mr-10'>lens camera</span>
            </p>
            <div className='flex flex-col gap-y-5'>
              <Pic2 text={"POWER LENS"}/>
              <Pic2 text={"WIDE VIEW LENS"}/>
            </div>
          </div>
          <div className='bg-[#611a16] h-screen flex-1 duration-500 third-drawer relative flex items-start pt-10 overflow-hidden'>
            <p className='md:absolute right-10 text-4xl md:text-[6.5rem] md:[writing-mode:vertical-rl] uppercase'>
              LENSES <br />
              <span className='text-xl md:text-4xl md:absolute bottom-5 md:mr-10'>AND ACCESSORIES</span>
            </p>
            <div className='flex flex-col gap-y-5'>
              <Pic2 text={"POWER LENS"}/>
              <Pic2 text={"WIDE VIEW LENS"}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CameraCategories