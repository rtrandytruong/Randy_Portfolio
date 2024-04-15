import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} // Corrected function name to fadeIn
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "spring", 0.1, 1)} // Corrected parameters for fadeIn function
        className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'>
        I am a full-stack Software Engineer, holding a Computing and Security degree from Drexel University. My background blends programming expertise with a focus on cybersecurity, providing a robust foundation for crafting secure and efficient software solutions. With extensive experience in software development and analytics, I excel in creating intuitive user interfaces and leveraging data effectively. Through meticulous attention to detail and a problem-solving mindset, I strive to deliver high-quality software that seamlessly integrates functionality.      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} icon={service.icon} /> // Ensure icon prop is correctly passed
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
