
// About.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative'
    >
      <h3 className='absolute top-8 uppercase tracking-[20px] text-gray-500 text-3xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={pageInfo?.profilePic && urlFor(pageInfo.profilePic)?.url()}
        // src={urlFor(pageInfo?.profilePic)?.url()}
        className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 md:w-64 md:h-80 xl:w-96 xl:h-120 rounded-full object-cover md:rounded-lg'
        alt='Profile Pic'
      />

      <div className='space-y-6 px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#F7AB0A]/50'>little</span> background
        </h4>

        <div>
          <p className='text-base md:text-lg'>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { PageInfo } from '@/typings';
// import { urlFor } from '@/sanity';

// type Props = {
//   pageInfo: PageInfo;
// };

// const About = ({ pageInfo }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className='flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
//       <h3 className='absolute top-8 uppercase tracking-[20px] text-gray-500 text-3xl'>
//         About
//       </h3>

//       <motion.img
//         initial={{
//           x: -100,
//         }}
//         transition={{
//           duration: 1.2,
//         }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         src={urlFor(pageInfo?.profilePic)?.url()}
//         className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 md:w-64 md:h-80 xl:w-96 xl:h-120 rounded-full object-cover md:rounded-lg'
//         alt='Profile Pic'
//       />

//       <div className='space-y-6 px-0 md:px-10'>
//         <h4 className='text-2xl md:text-3xl font-semibold'>
//           Here is a{' '}
//           <span className='underline decoration-[#F7AB0A]/50'>little</span> background
//         </h4>

//         <div>
//           <p className='text-base md:text-lg'>
//             {pageInfo?.backgroundInformation}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { PageInfo } from '@/typings';
// import pageInfo from '@/mynextjsportfolio/schemas/pageInfo';
// import { urlFor } from '@/sanity';

// type Props = {
//     pageInfo: PageInfo
// }

// const About = ({ pageInfo }: Props) => {
//   return (
//     <motion.div 
//     initial={{ opacity: 0}}
//     whileInView={{ opacity: 1 }}
//     transition={{ duration: 1.5 }}
//     className='flex flex-col relative h-screen text-center md:text-left md:flex-row
//     max-w-7xl px-10 justify-evenly mx-auto items-center'>

//         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//         About
//         </h3>
        
//         <motion.img
//         initial={{
//             x: -200,
//         }}
//         transition={{
//             duration: 1.2,
//         }}
//         whileInView={{ opacity: 1, x: 0}}
//         viewport={{ once: true}}
//         src={urlFor(pageInfo?.profilePic)?.url()}
//         className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
//         md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
//         />

//         <div className='space-y-10 px-0 md:px-10'>
//             <h4 className='text-4xl font-semibold'>
//                 Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
//             </h4>

//             <div>
//                 <p className='text-base'>
//                     {pageInfo?.backgroundInformation}
//                 {/* Hi, I'm Jeff Lincoln – a passionate Web Developer rooted in Nairobi, Kenya. My coding adventure kicked off with the iconic "Hello World!" and has since evolved into a captivating exploration of web and mobile development. Currently advancing my skills,
//                  I am enrolled in the pursuit of a Bachelor's Degree in Computer Science at Umma University. */}
//                 {/* Hello, fellow Earthlings! I'm <span>Jeff Lincoln Gitari 💯 </span>, a passionate software alchemist on a mission to turn lines of
//                 code into meaningful expriences. */}

//                 {/* 🌐My journey started with "Hello World!" and has since led me through the realms of web development, mobile 
//                 development, and beyond. From crafting seamless user experiences to optimizing 
//                 algorithms, I relish the chance to transform concepts into digital realities. */}

//                 {/* 🌅Beyond the glowing screens and lines of code, you'll find another dimension to my world_ I'm not just a developer;
//                  I'm a multifaceted enthusiast. When I'm not immersed in the digital realm, you'll catch me navigating the Basketball court, a space where the 
//                  rhythm of the game syncs with the beat of my heart. All these experiences weave together into the tapestry of my
//                  adventurous life.  */}

//                 {/* 🔧Here in my digital playground, you'll find a collection of my proudest creations and a glimpse into the mind of 
//                  a developer with a penchant for innovation. So, grab a virtual seat, and let's 
//                  embark on this coding journey together! */}
//                 </p>            
//             </div>
//         </div>
//     </motion.div>
//   )
// }

// export default About;