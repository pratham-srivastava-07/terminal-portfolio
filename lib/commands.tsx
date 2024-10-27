"use client";
import { Github } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import React from "react";

import Link from 'next/link';

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const Output = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case "help":
      return (
        <div className="pt-2">
          <p className=''>Available commands:</p> <br />
          {/* <br /> */}
          <span className="text-blue-400 ml-3 pt-5"> about</span> - A little about me! <br />
          
          <span className="text-blue-400 ml-3 pt-3"> socials</span> - Find me on the internet! <br />
          
          <span className="text-blue-400 ml-3 pt-3"> skills</span> - My expertise and tech stack <br />
          
          <span className="text-blue-400 ml-3 pt-3"> projects</span> - Check out my work! <br />
         
          <span className="text-blue-400 ml-3 pt-3"> resume</span> - View my resume <br />
          
          <span className="text-blue-400 ml-3 pt-3"> clear</span> - Clear the terminal <br />
          
          <span className="text-blue-400 ml-3 pt-3"> experience</span> - My work history <br />
          
          <span className="text-blue-400 ml-3 pt-3"> goals</span> - My future aspirations <br />
          
        </div>
      );
    case "about":
      return (
        <div>
          Hi there! I&apos;m <span className="text-blue-400">Pratham Srivastava</span>, a passionate developer working primarily with <span className="text-teal-400">React</span>, <span className="text-teal-400">Node.js</span>, and <span className="text-teal-400">TypeScript</span>. I love creating full-stack applications and exploring new technologies. When I&apos;m not coding, you can find me diving into tech books or enjoying some music.
          <br />
          Currently, exploring<span className="text-blue-400"> blockchain technology</span> and building some projects around it!
        </div>
      );
    case "socials":
      return (
        <div>
          Thanks for your interest! Here are my online profiles: <br />
          <span className="text-blue-500 ml-3 underline">
            <a href="https://github.com/pratham-srivastava-07" className='text-blue-400 underline'>Github</a>
          </span>
          <br />
          <span className="text-blue-400 ml-3 underline">
            <a href="https://x.com/pratham_dev07" className='underline'>Twitter </a> 
          </span>
          <br />
          <span className="text-blue-400 ml-3 underline">
            <a href="https://www.linkedin.com/in/pratham-srivastava-047813258/" className='underline'>LinkedIn </a> 
          </span>
          <br />
          <span className="ml-3">
            <a href="mailto:prathamrajsri2003@gmail.com">Mail </a> - prathamrajsri2003@gmail.com
          </span>
          <br />
        </div>
      );
    case "skills":
      return (
        <div>
          <span className="text-blue-400 ml-3">Languages- </span>
          <br />
          <span className="ml-7">JavaScript, TypeScript, Python, Currently trying Golang</span>
          <br />
          <span className="text-blue-400 ml-3">Frameworks/Libraries - </span>
          <br />
          <span className="ml-7">React (Next.js), Node.js, Express</span>
          <br />
          <span className="text-blue-400 ml-3">Databases/Infrastructures - </span>
          <br />
          <span className="ml-7">PostgreSQL, Docker</span>
        </div>
      );
      case 'projects':
  const projects = [
    {
      title: 'Insightify',
      description: 'A full stack SAAS application using Next.js, Tailwind, Shadcn, NextAuth and much more.',
      url: 'https://github.com/pratham-srivastava-07/Insightify',
    },
    {
      title: 'Zapier',
      description: 'A Full stack project to showcase how webhook URLs work.',
      url: 'https://github.com/pratham-srivastava-07/zapier',
    },
    {
      title: 'Nova',
      description: 'A web based HD wallet that can store multiple wallets be it of ETH or SOL.',
      url: 'https://github.com/pratham-srivastava-07/Nova',
    },
    {
      title: 'swapXnova',
      description: 'A DEX application built to swap tokens on SOLANA blockchain.',
      url: 'https://github.com/pratham-srivastava-07/swapXnova',
    },
    {
      title: 'Minthub',
      description: 'A Nextjs application where you can easily launch your own NFTs.',
      url: 'https://github.com/pratham-srivastava-07/MintHub',
    },
  ];

  return (
    <div className="">
      {projects.map((project, index) => (
        <div key={index} className="pt-16">
            <Card key={index} className="border bg-black text-white">
          <CardHeader className='text-xl'>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 text-center bg-blue-500 flex justify-center"
            >
              {/* <FaGithub className="text-xl text-gray-500 hover:text-gray-700 text-center " /> */}
              <Github strokeWidth={1.25} className='' />
            </a>
            <CardTitle className="text-lg font-semibold  cursor-pointer text-blue-500">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Learn more about {project.title} by clicking the GitHub icon.
            </p>
          </CardContent>
        </Card>
        <div className="mt-16">
          <br />
        </div>
        </div>
        
      ))}
    </div>
  );
      
    case "clear":
      setCommand([]);
      return "";
      
    case "resume":
      window.open("https://drive.google.com/file/d/1h-5Fd9IbxADD1ZtcB9ViVlppa8UOMDk2/view?usp=sharing");
      return "Opening resume...";
    case "experience":
      return (
        <div>
          <br />
          <span className="text-blue-400 ml-3">1. </span>
          <span className="text-purple-400">SDE Intern at a <Link href={'https://www.linkedin.com/feed/update/urn:li:activity:7247244444192718848/'}> Finland based startup (Oct&apos;24 - Present)</Link></span>
          <br />
          <br />
          <span className="text-blue-400 ml-3">2. </span>
          <span className="text-purple-400">Freelanced a bit</span> - Worked on various projects, primarily in full stack development.
          <br />
          <br />
          <span className="text-blue-400 ml-3">2. </span>
          <span className="text-purple-400">SDE Intern at Ten:Marketing (Aug&apos;23 - Mar&apos;24)</span> - Worked on React + Node
          <br />
        </div>
      );
    case "goals":
      return (
        <div>
          My goals are to continue honing my skills in full stack development and to contribute to real and meaningful projects while gaining knowledge in various tech. I aspire to work with innovative technologies and make a meaningful impact through my work. My dream is to be part of a team that creates cutting-edge solutions that positively affect people&apos;s lives.
        </div>
      );
    default:
      return (
        <div>
          <span className="text-red-500"> Command not found. </span> <br />
          Type <span className="text-blue-400">help</span> to get a list of available commands.
        </div>
      );
  }
};
