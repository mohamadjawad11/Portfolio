import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-screen-[80vh] pt-16 ml-0 sm:ml-39 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-12 xl:gap-24">
          
          {/* Text Section */}
          <div className="text-center xl:text-left order-1 xl:order-none">
            <span className="text-lg tracking-wide text-accent-default font-medium">
              Software Engineer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hello, I&apos;m <br />
              <span className="text-[#00ff99]">Mohammad Jawad</span>
            </h1>
            <p className="max-w-xl mx-auto xl:mx-0 mb-9 text-white/70 leading-relaxed">
              I&apos;m a software engineer with a passion for building
              scalable and efficient software solutions using modern
              technologies.
            </p>

            {/* Buttons & Social */}
            <div className="flex items-center xl:justify-start gap-10 ml-20 xl:ml-0">
              <Button
                variant="default"
                size="lg"
                className="uppercase flex items-center gap-2 bg-[#1c1c22] text-[#00ff99] hover:bg-black transition-all duration-300 rounded-full px-6 py-3 border border-[#00ff99] hover:bg-[#138B5BFF] hover:text-white cursor-pointer"
              >
                <span>DOWNLOAD CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Social
                containerStyles="flex flex-row gap-4"
                iconStyles="w-10 h-10 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-lg hover:bg-[#00ff99] hover:text-white transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-xl hover:shadow-[#00ff99]/30"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="order-2 xl:order-none ">
            <Photo />
          </div>
        </div>
        <div className='pt-13'> <Stats /></div>
        
      </div>
    </section>
  )
}

export default Home
