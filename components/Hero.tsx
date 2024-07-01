import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import pageInfo from '@/mynextjsportfolio/schemas/pageInfo';
import Image from 'next/image';


type Props = {
  pageInfo?: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hey there👋,",
      "Welcome!🌟",
      `I'm ${pageInfo?.name || 'Jeff Lincoln'}`,
      "A Software Engineer passionate about crafting digital experiences.",
      "Full-Stack Developer adept at building scalable web applications.",
      "<JavaScript Enthusiast />",
      "Guy-who-loves-Coffee.tsx",
      "........",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden z-0'>
      <BackgroundCircles />
      <Image
        src="https://shorturl.at/aoUOA"
        alt='profile pic'
        width={128}
        height={128}
        className='h-32 w-32 relative rounded-full mx-auto object-cover'
      />
      <div className='z-10'>
        <h2 className='text-sm uppercase  text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Exprience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;