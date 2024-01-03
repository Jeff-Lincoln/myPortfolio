import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';
import { Project } from '@/typings';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className='relative flex flex-col text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center h-screen overflow-x-auto overflow-y-hidden'>
      <h3 className='absolute top-8 uppercase tracking-[20px] text-gray-500 text-3xl'>
        Projects
      </h3>

      <div className='relative flex-shrink-0 flex space-x-5 overflow-x-scroll p-10 md:p-24'>
        {projects?.map((project, i) => (
          <motion.div
            key={project?._id}
            className='flex-shrink-0 flex flex-col space-y-5 items-center justify-center relative'
          >
            <motion.img
              initial={{
                y: -50,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image)?.url()}
              alt={project?.title}
              className='rounded-md shadow-md max-h-[300px] w-auto'
            />

            <div className='space-y-8 px-4 md:px-10 max-w-2xl'>
              <h4 className='text-3xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of {projects?.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies?.map((technology) => (
                  <img
                    key={technology._id}
                    className='h-8 w-8 md:h-10 md:w-10'
                    src={urlFor(technology?.image)?.url()}
                    alt={technology?.title}
                  />
                ))}
              </div>

              <p className='text-sm text-center md:text-left'>
                {project?.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='w-full h-full absolute top-0 left-0 transform skew-y-12 origin-top-left'>
        <div className='h-full w-full bg-gradient-to-r from-[#F7AB0A]/40 via-transparent to-transparent'></div>
      </div>
    </div>
  );
};

export default Projects;






// import React from 'react';
// import { motion } from 'framer-motion';
// import { urlFor } from '@/sanity';
// import { Project } from '@/typings';

// type Props = {
//   projects: Project[];
// };

// const Projects = ({ projects }: Props) => {
//   return (
//     <div className='relative flex flex-col text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center h-screen'>
//       <h3 className='absolute top-8 uppercase tracking-[20px] text-gray-500 text-3xl'>
//         Projects
//       </h3>

//       <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
//         {projects?.map((project, i) => (
//           <div
//             key={project?._id}
//             className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-24'
//           >
//             <motion.img
//               initial={{
//                 y: -50,
//                 opacity: 0,
//               }}
//               transition={{ duration: 1.2 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               src={urlFor(project?.image)?.url()}
//               alt={project?.title}
//               className='rounded-md shadow-md max-h-[300px] w-auto'
//             />

//             <div className='space-y-8 px-4 md:px-10 max-w-2xl'>
//               <h4 className='text-3xl font-semibold text-center'>
//                 <span className='underline decoration-[#F7AB0A]/50'>
//                   Case Study {i + 1} of {projects?.length}:
//                 </span>{' '}
//                 {project?.title}
//               </h4>

//               <div className='flex items-center space-x-2 justify-center'>
//                 {project?.technologies?.map((technology) => (
//                   <img
//                     key={technology._id}
//                     className='h-8 w-8 md:h-10 md:w-10'
//                     src={urlFor(technology?.image)?.url()}
//                     alt={technology?.title}
//                   />
//                 ))}
//               </div>

//               <p className='text-sm text-center md:text-left'>
//                 {project?.summary}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='w-full absolute top-1/3 bg-[#F7AB0A]/10 left-0 h-[500px]-skew-y-12' />
//     </div>
//   );
// };

// export default Projects;




// import React from 'react'
// import { motion } from 'framer-motion';
// import { urlFor } from '@/sanity';
// import { Project } from '@/typings';
// import project from '@/mynextjsportfolio/schemas/project';

// type Props = {
//     projects: Project[];
// }

// const Projects = ({ projects }: Props) => {
//   return (
//     <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
//      max-w-full; justify-evenly mx-auto items-center z-0'>
//         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//             Projects
//         </h3>

//         <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
//             {projects?.map((project, i) => (
//                 <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
//                 items-center justify-center p-20 md:p-44 h-screen'>

//                     <motion.img 
//                     initial={{
//                         y: -300,
//                         opacity: 0,
//                     }}
//                     transition={{ duration: 1.2 }}
//                     whileInView={{ opacity: 1, y: 0}}
//                     viewport={{ once: true}}
//                     src={urlFor(project?.image)?.url()}
//                     alt="" />

//                     <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
//                         <h4 className='text-4xl font-semibold text-center '>
//                             <span className='underline decoration-[#F7AB0A]/50'>
//                             Case Study {i+1} of {projects?.length}:
//                             </span>{" "}
//                             {project?.title}
//                         </h4>

//                         <div className='flex items-center space-x-2 justify-center' >
//                             {project?.technologies?.map((technology) => (
//                                 <img 
//                                 key={technology._id}
//                                 className='h-10 w-10'
//                                 src={urlFor(technology?.image)?.url()} 
//                                 alt="" />
//                             ))}
//                         </div> 

//                         <p className='text-sm text-center md:text-left'>
//                             {project?.summary}
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <div  className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]-skew-y-12'/>
//     </div>
//   )
// }

// export default Projects