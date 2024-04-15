import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import GOAT from '../assets/nightroom.png'; // Import the GOAT image
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation component

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${GOAT})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className='relative w-full h-screen mx-auto' style={backgroundStyle}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-black relative'>
            <div className='w-1 sm:h-80 h-40 bg-black absolute top-full left-2/4 transform -translate-x-1/2' />
          </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hello, I'm <span className='text-[#f2d2f3]'> Randy </span> </h1>
          <div className="flex items-center mt-2">
            <p className={`${styles.heroSubText} mr-2 text-white-100`}>
              I am a 
            </p>
            <TypeAnimation
              sequence={[
                "Developer. ", 1000,
                "Problem-Solver.", 1000,
                "Learner!", 1000,
              ]}
              wrapper='p'
              speed={50}
              repeat={Infinity}
              className={styles.heroSubText} // Apply the same font size class as the paragraph
            />
          </div>
          <p className={`${styles.heroSubText} mr-2 text-white-100`} style={{ fontSize: '0.6rem' }}> {/* Applied inline style for smaller font size */}
              Rotate the computer with your mouse!</p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[50px] rounded-3x1 border-4 border-secondary flex justify-center items-start p2'>
            <motion.div // Corrected the typo from 'motion.dev' to 'motion.div'
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop' // Corrected the typo from 'repeastType' to 'repeatType'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;









