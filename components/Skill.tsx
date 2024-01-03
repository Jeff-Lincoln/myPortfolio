import React from 'react';
import { motion } from 'framer-motion';
import { Skill as SkillType } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        alt={skill.title}
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-10'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm md:text-base font-bold text-black opacity-100 '>{skill.progress}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { Skill as SkillType } from '@/typings';
// import { urlFor } from '@/sanity';

// type Props = {
//   skill: SkillType;
//   directionLeft?: boolean;
// };

// const Skill = ({ skill, directionLeft }: Props) => {
//   return (
//     <div className='group relative flex cursor-pointer'>
//       <motion.img
//         initial={{
//           x: directionLeft ? -50 : 50,
//           opacity: 0,
//         }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         src={urlFor(skill?.image).url()}
//         className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
//         alt={skill.title}
//       />
//       <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0'>
//         <div className='flex items-center justify-center h-full'>
//           <p className='text-sm md:text-base font-bold text-black opacity-100 '>{skill.progress}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skill;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { Skill as SkillType } from '@/typings';
// import { urlFor } from '@/sanity';

// type Props = {
//   skill: SkillType;
//   directionLeft?: boolean;
// };

// const Skill = ({ skill, directionLeft }: Props) => {
//   return (
//     <div className='group relative flex cursor-pointer'>
//       <motion.img
//         initial={{
//           x: directionLeft ? -100 : 100,
//           opacity: 0,
//         }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         src={urlFor(skill?.image).url()}
//         className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
//       />
//       <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0'>
//         <div className='flex items-center justify-center h-full'>
//           <p className='text-xl font-bold text-black opacity-100 '>{skill.progress}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skill;



// import React from 'react'
// import { motion } from "framer-motion"
// import { Skill as SkillType } from "@/typings";
// import { urlFor } from '@/sanity';

// type Props = {
//   skill: SkillType;
//   directionLeft?: boolean;

// }

// const Skill = ({ skill, directionLeft }: Props) => {
//   return (
//     <div className='group relative flex cursor-pointer'>
//         <motion.img 
//         initial={{
//           x: directionLeft ? -200 : 200,
//           opacity: 0
//         }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         src={urlFor(skill?.image).url()}
//         className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32
//         xl:h-32 filter group-hover:grayscale transtion duration-300 ease-in-out"
//         />
//         <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
//           <div className='flex items-center justify-center h-full'>
//             <p className='text-3xl font-bold text-black opacity-100 '>{skill.progress}</p>
//           </div>
//         </div>
//         </div>
//   )
// }

// export default Skill