import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences?: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-4xl font-bold'>
        Work Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {experiences?.map((experience) => (
          <div key={experience._id} className='flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-12'>
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;


// import React from 'react';
// import { motion } from 'framer-motion';
// import ExperienceCard from './ExperienceCard';
// import { Experience } from '@/typings';

// type Props = {
//   experiences?: Experience[];
// };

// const WorkExperience = ({ experiences }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center bg-gradient-to-r from-[#F7AB0A]/40 via-transparent to-transparent'
//     >
//       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-4xl font-bold'>
//         Work Experience
//       </h3>

//       <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
//         {experiences?.map((experience) => (
//           <div key={experience._id} className='flex-shrink-0 flex flex-col items-center justify-center p-12'>
//             <ExperienceCard experience={experience} />
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default WorkExperience;



// import React from 'react';
// import { motion } from 'framer-motion';
// import ExperienceCard from './ExperienceCard';
// import { Experience } from '@/typings';

// type Props = {
//   experiences?: Experience[];
// };

// const WorkExperience = ({ experiences }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
//     >
//       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//         Experience
//       </h3>

//       <div className='flex-1 w-full h-full flex md:overflow-x-scroll md:flex-row overflow-y-hidden p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
//         {experiences?.map((experience) => (
//           <ExperienceCard key={experience._id} experience={experience} />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default WorkExperience;




// import React from 'react';
// import { motion } from 'framer-motion';
// import ExperienceCard from './ExperienceCard';
// import { Experience } from '@/typings';

// type Props = {
//   experiences?: Experience[];
// };

// const WorkExperience = ({ experiences }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className='h-screen flex flex-col overflow-hidden text-left mx-auto items-center'
//     >
//       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//         Experience
//       </h3>

//       <div className='flex-1 w-full flex md:overflow-x-scroll md:flex-row overflow-y-hidden p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
//         {experiences?.map((experience) => (
//           <ExperienceCard key={experience._id} experience={experience} />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default WorkExperience;



// import React from 'react'
// import { motion } from 'framer-motion';
// import ExperienceCard from './ExperienceCard'
// import { Experience } from '@/typings';
// import experience from '@/mynextjsportfolio/schemas/experience';

// type Props = {
//   experiences?: Experience[];
// }

// const WorkExperience = ({ experiences }: Props) => {
//   return (
//     <motion.div 
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     transition={{ duration: 1.5 }}
//     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
//     max-w-full px-10 justify-evenly mx-auto items-center'>
//         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
//       >
//         Experience
//         </h3>

//         <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
//          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
//           {experiences?.map(experience => (
//             <ExperienceCard key={experience._id} experience={experience} />
//           ))}
//         </div>
//     </motion.div>
//   )
// }

// export default WorkExperience;