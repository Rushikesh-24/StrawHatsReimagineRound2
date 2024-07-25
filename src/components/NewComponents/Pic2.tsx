import Image from "next/image"
import Back from "../../../public/back.png"
import EOS from "../../../public/cameras/eos.png"

function Pic2({text}:{text:string}){

    return(
            <div className='bg-pic hidden md:block z-10 /shrink select-none duration-300 cursor-move group w-[73.05vw] h-[63.675vw] group-hover:opacity-100 opacity-0 ml-20 flex-shrink-0 xl:w-[28.7vw] xl:h-[22.45vw] font-bebas text-black py-3 px-5' >
                <p className='text-3xl mt-'>{text}</p>
                <div style={{height:Back.height-120}} className='relative flex items-center justify-center pointer-events-none'>
                    <div className="flex items-center justify-center">
                        <Image 
                            src={Back.src}
                            height={Back.height-100}
                            width={Back.width-100}
                            alt=''
                            className='mt-2 group-hover:brightness-50 duration-500 w-full absolute left-0 top-0'
                        />
                    </div>
                    <Image 
                        src={EOS.src}
                        height={EOS.height-100}
                        width={EOS.width-100}
                        alt=''
                        className='mt-2 fader absolute duration-500 group-hover:scale-50 group-hover:-translate-y-[30%]'
                    />
                  
                </div>
            </div>
    )
}

export default Pic2