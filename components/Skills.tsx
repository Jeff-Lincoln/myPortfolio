import React from 'react';
import { motion } from 'framer-motion';
import Skill from '../components/Skill';
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col h-screen justify-center items-center'
    >
      <div className='text-center mb-8'>
        <h3 className='uppercase text-gray-500 text-3xl'>Skills</h3>
        <h4 className='uppercase tracking-[3px] text-gray-500 text-sm'>
          Hover over a skill for current proficiency
        </h4>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {skills?.map((skill, index) => (
          <Skill key={skill._id} skill={skill} directionLeft={index % 2 !== 0} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;



// import React from 'react';
// import { motion } from 'framer-motion';
// import Skill from '../components/Skill';
// import { Skill as SkillType } from '@/typings';

// type Props = {
//   skills: SkillType[];
// };

// const Skills = ({ skills }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-4 mx-auto items-center'
//     >
//       <div>
//         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//           Skills
//         </h3>
//         <h4 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
//           Hover over a skill for current proficiency
//         </h4>
//       </div>
//       <div className='grid grid-cols-4 gap-4 mt-10'>
//         {skills?.map((skill, index) => (
//           <Skill key={skill._id} skill={skill} directionLeft={index % 2 !== 0} />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Skills;



// import React from 'react';
// import { motion } from 'framer-motion';
// import Skill from '../components/Skill';
// import { Skill as SkillType } from "@/typings";

// type Props = {
//   skills: SkillType[];
// }

// const Skills = ({ skills }: Props) => {
//   return (
//     <motion.div
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     transition={{ duration: 1.5}} 
//     className=' flex relative flex-col text-center md:text-left xl:flex-row
//     max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-o mx-auto items-center'
//     >
//       <div>
//       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
//         text-2xl'>
//              Skills
//         </h3>
//         <h4 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
//             Hover over a skill for current proficiency
//         </h4>
//       </div>
//         <div className='grid grid-cols-4 gap-5'>
//             {skills?.slice(0, skills.length/2).map(skill => (
//               <Skill key={skill._id} skill={skill}/> 
//             ))}
//             {skills?.slice(skills.length/2, skills.length).map(skill => (
//               <Skill key={skill._id} skill={skill} directionLeft/> 
//             ))}
//         </div>
//     </motion.div>
//   )
// }

// export default Skills;