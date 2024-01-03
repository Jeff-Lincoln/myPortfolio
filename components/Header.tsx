import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const router = useRouter();

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      {/* Social icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center space-x-4'
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        onClick={() => router.push('#contact')}
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;




// import React from 'react'
// import { SocialIcon } from 'react-social-icons';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Social } from '@/typings';
// import social from '@/mynextjsportfolio/schemas/social';
// // import { Social } from '../typings';

// type Props = {
//   socials: Social[]
// };


// const Header = ({socials}: Props) => {
//   return (
//     <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto 
//     z-20 xl:items-center'>
//       <motion.div
//       initial={{
//         x: -500,
//         opacity: 0,
//         scale: 0.5,
//       }}
//       animate={{
//         x: 0,
//         opacity: 1,
//         scale: 1
//       }}
//       transition={{
//         duration:1.5
//       }}
//       className='flex flex-row items-center'
//       >
//         {/** Social icons */}
//         {socials.map((social) => (
//           <SocialIcon
//           key={social._id}
//           url={social.url}
//           fgColor='gray'
//           bgColor='transparent'/>
//         ))}

//         {/* <SocialIcon
//         url='https://twitter.com/JeffLin64626348' 
//         fgColor='gray'
//         bgColor='transparent'/> */}

//       </motion.div>

//         <motion.div 
//         initial={{
//           x: 500,
//           opacity: 0,
//           scale: 0.5,
//         }}
//         animate={{
//           x: 0,
//           opacity: 1,
//           scale: 1,
//         }}
//         transition={{
//           duration: 1.5,
//         }}
//         className='flex flex-row items-center text-gray-300 cursor-pointer'>
//           <SocialIcon 
//           className="cursor-pointer"
//           network="email"
//           fgColor="gray"
//           bgColor="transparent"
//           />

//           <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
//             Get in Touch
//           </p>
//         </motion.div>
//     </header>
//   )
// }

// export default Header;