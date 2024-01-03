import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Experience, Project, PageInfo, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchProjects } from '@/utils/fetchProjects';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];  
};

export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Jeff Lincoln Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://i.pinimg.com/564x/96/29/79/962979dc0a3e31104bc056e2bfe0c3da.jpg'
              alt='home'
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo = await fetchPageInfo();
//   const experiences = await fetchExperiences();
//   const skills = await fetchSkills();
//   const projects = await fetchProjects();
//   const socials = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//     },
//   };
// };


// import Head from 'next/head';
// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import WorkExperience from '@/components/WorkExperience';
// import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
// import ContactMe from '@/components/ContactMe';
// import Link from 'next/link';
// import { GetStaticProps } from 'next';
// import { Experience, Project, PageInfo, Skill, Social } from '@/typings';
// import { fetchPageInfo } from '@/utils/fetchPageInfo';
// import { fetchSkills } from '@/utils/fetchSkills';
// import { fetchSocials } from '@/utils/fetchSocials';
// import { fetchExperiences } from '@/utils/fetchExperiences';
// import { fetchProjects } from '@/utils/fetchProjects';

// type Props = {
//   pageInfo: PageInfo;
//   experiences: Experience[];
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];  
// };


// export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
//   return (
//     <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
//      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
//       <Head>
//         <title>
//           Jeff Lincoln Portfolio
//         </title>
//       </Head>

//       <Header socials={socials}/>

//         <section id='hero' className='snap-start'>
//           <Hero pageInfo={pageInfo}/>
//         </section>

//         <section id='about' className='snap-center'>
//          <About pageInfo={pageInfo} />
//         </section>

//         <section id='experience' className='snap-center'>
//          <WorkExperience experiences={experiences}/>
//         </section>

//         <section id='skills' className='snap-start'>
//          <Skills skills={skills}/>
//         </section>

//         <section id='projects' className='snap-start'>
//         <Projects projects={projects}/>
//         </section>

//         <section id='contact' className='snap-start'>
//           <ContactMe />
//         </section>

//         <Link href="#hero">
//           <footer className='sticky bottom-5 w-full cursor-pointer'>
//             <div className='flex items-center justify-center'>
//               <img 
//               className='h-10 w-10 rounded-full filer grayscale hover:grayscale-0
//                cursor-pointer'
//                src='https://i.pinimg.com/564x/96/29/79/962979dc0a3e31104bc056e2bfe0c3da.jpg'
//                alt='home'/>
//             </div>
//           </footer>
//         </Link>
//     </div>
//   )
// };

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//      props: { 
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials
//      },

//      revalidate: 10,
//   };
// }

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = (await fetchExperiences()) || [];
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        pageInfo: {} as PageInfo,
        experiences: [],
        skills: [],
        projects: [],
        socials: [],
      },
      revalidate: 10,
    };
  }
};
