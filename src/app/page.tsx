"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="mb-6">
                <span className="uppercase-label text-accent">Software Engineer</span>
              </div>
              <h1 className="heading-xl mb-6">
                Creating digital experiences that make a difference
              </h1>
              <p className="body-text mb-10 max-w-xl">
                I'm Lauryn Hudson,  a full-stack software engineer specializing in AI, data engineering, and scalable web applications. Currently building innovative fintech + ESG solutions at JP Morgan and <a href='https://smartres.ai/' className="text-blue-500 hover:text-blue-700 font-medium">SmartRes.ai</a>
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href="/#contact" 
                  className="btn-primary"
                >
                  Get in touch
                </Link>
                <Link 
                  href="/#projects" 
                  className="btn-secondary"
                >
                  View work
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="relative">
                <div className="w-full aspect-square mb-4 overflow-hidden">
                  <Image 
                    src="/assets/lh_headshot.png" 
                    alt="Lauryn Hudson"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="font-serif text-xl md:text-2xl font-light">4+</div>
                    <div className="uppercase-label text-white/80 text-3xs md:text-2xs mt-0.5">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <Section 
        id="about" 
        title="About Me" 
        subtitle="Engineer | Travel Lover | Certified Yoga Teacher"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src="/assets/travel.png" 
                  alt="About Lauryn Hudson"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              
              <div className="absolute top-4 left-4 z-10 bg-black/75 px-4 py-2 flex items-center">
                <svg className="w-4 h-4 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white text-sm font-medium">The Great Pyramid of Giza</span>
              </div>
            </div>
            
            <div className="absolute top-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-accent/10 to-accent-secondary/10 z-[-1]"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-accent-secondary/10 to-accent/10 z-[-1]"></div>
          </div>
          
          <div className="md:col-span-7">
            <div className="space-y-6">
              <p className="body-text">
                When I’m not coding, you’ll likely find me hiking, reading by the beach, discovering new restaurants, or traveling to new countries—always chasing adventure in some form.
              </p>
              <p className="body-text">
                I love staying active, and right now, I’m competing in a spring flag football league with friends. Long runs (10+ miles, just for fun) are my reset button—I thrive on the balance of discipline and freedom they bring. Movement is my meditation, and no matter how the day goes, I always find my way back to my yoga mat.
              </p>
              <p className="body-text">
                I have a deeply adventurous spirit. Whether it’s exploring hidden gems in LA or experiencing new cultures abroad, I’m always seeking something new. This summer, I’m especially excited to see the Cowboy Carter Tour in France—because why not mix travel with a little Beyoncé magic?
              </p>
              <p className="body-text">
                At the core of everything I do is a belief in continuous self-growth—physically, mentally, and spiritually. That’s what keeps life fulfilling.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="uppercase-label text-accent mb-2">Location</h3>
                  <p className="body-text">Los Angeles, CA</p>
                </div>
                <div>
                  <h3 className="uppercase-label text-accent mb-2">Email</h3>
                  <a href="mailto:laurynhudson98@gmail.com" className="body-text hover:text-accent transition-all">
                    laurynhudson98@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="uppercase-label text-accent mb-2">Education</h3>
                  <p className="body-text">B.S. in Computer Science</p>
                </div>
                <div>
                  <h3 className="uppercase-label text-accent mb-2">Current Role</h3>
                  <p className="body-text">Software Engineer at JP Morgan</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link href="/#contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Experience Section */}
      <Section 
        id="experience" 
        title="Work Experience" 
        subtitle="My professional journey in software engineering across industry-leading companies"
      >
        <div className="grid grid-cols-1 gap-16">
          {/* JP Morgan */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h3 className="heading-sm mb-2">JP Morgan</h3>
              <div className="uppercase-label text-accent mb-4">July 2020 - Present</div>
            </div>
            
            <div className="md:col-span-8">
              <h4 className="heading-sm mb-4">Software Engineer</h4>
              <p className="body-text mb-6">
              Building fintech and ESG solutions, focusing on scalable, data-driven applications that power sustainable investing.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h5 className="uppercase-label text-accent mb-2">Responsibilities</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="body-text">Design, develop and maintain APIs and backend services that power portfolio management, reporting, and sustainability analytics.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="body-text">Collaborate with cross-functional teams to design and implement new features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="body-text">Improve system reliability and efficiency by optimizing distributed systems and cloud-based architecture</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="uppercase-label text-accent mb-2">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'FastAPI', 'React', 'TypeScript', 'MYSQL', 'GraphQL', 'AWS', 'Docker'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs border border-gray-200 bg-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-200"></div>
          
          {/* Amazon */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h3 className="heading-sm mb-2">Smartres.ai</h3>
              <div className="uppercase-label text-accent mb-4">December 2024 - Present</div>
            </div>
            
            <div className="md:col-span-8">
              <h4 className="heading-sm mb-4">Cofounder + CTO</h4>
              <p className="body-text mb-6">
              Building AI-powered tools to help job seekers optimize their resumes and land their dream roles.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h5 className="uppercase-label text-accent mb-2">Responsibilities</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="body-text">Design and lead full stack development of SmartRes.ai, an AI-driven resume optimization platform that provides users with job specific resume tailoring, application tracking, and an interview simulator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="body-text">Manage continuous deployment and infrastructure using AWS, Docker, and CI/CD pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="body-text">Conducted user research to refine the product experience, iterating based on feedback to maximize effectiveness</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="uppercase-label text-accent mb-2">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Flask', 'OpenAI API', 'React', 'TypeScript', 'MySQL', 'AWS', 'Docker'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs border border-gray-200 bg-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section 
        id="skills" 
        title="My Skills" 
        subtitle="The technical and soft skills I've developed throughout my career"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-6">
            <h3 className="heading-sm mb-8">Technical Expertise</h3>
            
            <div className="space-y-8">
              
              <div>
                <h4 className="uppercase-label text-accent mb-4">Backend Development</h4>
                <div className="space-y-4">
                  {[
                    { name: 'Python', level: 90 },
                    { name: 'Java', level: 85 },
                    { name: 'Node.js', level: 80 },
                    { name: 'SQL', level: 90 },
                    { name: 'REST APIs', level: 90 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="body-text">{skill.name}</span>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-gray-200 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-accent-secondary" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="uppercase-label text-accent mb-4">Frontend Development</h4>
                <div className="space-y-4">
                  {[
                    { name: 'React', level: 90 },
                    { name: 'TypeScript', level: 90 },
                    { name: 'Next.js', level: 80 },
                    { name: 'HTML/CSS', level: 90 },
                    { name: 'Redux', level: 80 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="body-text">{skill.name}</span>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-gray-200 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-accent-secondary" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6">
            <div className="mb-8">
              <h3 className="heading-sm mb-8">Additional Skills</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="uppercase-label text-accent mb-4">Cloud & DevOps</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'AWS', 'Datadog', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary mr-2"></div>
                        <span className="body-text">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="uppercase-label text-accent mb-4">Database</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'SQL', 'MongoDB', 'DynamoDB', 'PostgreSQL', 'Redis', 'ElasticSearch'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary mr-2"></div>
                        <span className="body-text">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="heading-sm mb-6">Soft Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { skill: 'Problem Solving', description: 'Analyzing complex issues and finding creative solutions' },
                  { skill: 'Communication', description: 'Clear and effective collaboration with technical and non-technical stakeholders' },
                  { skill: 'Leadership', description: 'Leading projects and mentoring junior developers' },
                  { skill: 'Adaptability', description: 'Quickly learning new technologies and adapting to changing requirements' }
                ].map((item) => (
                  <div key={item.skill} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-base mb-1">{item.skill}</h4>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Projects Section */}
      <Section 
        id="projects" 
        title="Featured Projects" 
        subtitle="A selection of my recent work showcasing my technical skills and problem-solving approach"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/assets/MAMA AI.png" 
                  alt="E-commerce Platform"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="portfolio-item-overlay">
                <div className="text-center px-6">
                  <h3 className="heading-sm text-white">Predicting Maternal Health Risk</h3>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <span className="uppercase-label text-accent mb-2 inline-block">AI Capstone Project</span>
              <h3 className="heading-sm mb-4">MAMA AI</h3>
              <p className="body-text mb-6">
                MAMA AI aims to predict the maternal health risk level (high risk, mid risk, or low risk) using machine learning models. The goal is to build a predictive model that can help healthcare providers identify high-risk pregnancies early, enabling timely interventions to improve maternal outcomes.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS S3'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs border border-gray-200 bg-white">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a href="https://github.com/laurynhudson/Maternal-Health-Capstone" className="uppercase-label text-accent hover:underline flex items-center">
                  <span>GitHub Repo</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6">
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/assets/smartres.png" 
                  alt="Task Management App"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="portfolio-item-overlay">
                <div className="text-center px-6">
                  <h3 className="heading-sm text-white">AI Powered Platform for Job Seekers</h3>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <span className="uppercase-label text-accent mb-2 inline-block">Web App</span>
              <h3 className="heading-sm mb-4">SmartRes.ai</h3>
              <p className="body-text mb-6">
                An AI-powered resume optimization tool that customizes resumes to match job descriptions using OpenAI’s GPT API. SmartRes.ai helps job seekers tailor their applications with precision by analyzing job postings and restructuring resumes for better alignment. Features include AI-driven resume enhancements, applications management, and an interview simulator.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['TypeScript', 'React', 'Socket.io', 'Express', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs border border-gray-200 bg-white">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a href="https://smartres.ai/" className="uppercase-label text-accent hover:underline flex items-center">
                  <span>View Demo</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 3 */}
          <div className="bg-white group cursor-pointer">
            <div className="relative overflow-hidden">
              <div className="aspect-square relative">
                <Image 
                  src="/assets/mockup.png" 
                  alt="Fitness Tracker"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="portfolio-item-overlay">
                <div className="text-center px-6">
                  <h3 className="heading-sm text-white">The First Social Media Designed to Take You Offline</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <span className="uppercase-label text-accent mb-2 inline-block">Mobile App</span>
              <h3 className="heading-sm mb-2">MOVE Wellness Club</h3>
              <p className="body-text">
                Coming soon: MOVE is a mobile app and community that allows users to connect in a fun, social, wellness focused way. Users can post their “Moves” (events/activities) so that other users are able to join, bringing together large groups for things such as hikes, runs, games, etc. 
              </p>
            </div>
          </div>
        </div>
        
        {/* <div className="mt-16 text-center">
          <a href="#" className="btn-secondary">
            View All Projects
          </a>
        </div> */}
      </Section>
      
      {/* Education Section */}
      <Section 
        id="education" 
        title="Education & Certifications" 
        subtitle="My academic background and professional credentials in software engineering"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* University Education */}
          <div className="md:col-span-7">
            <div className="bg-white p-8 border border-gray-200 relative">
              <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary"></div>
              
              <div className="flex flex-col mb-6">
                <span className="uppercase-label text-accent mb-2">2017 - 2021</span>
                <h3 className="heading-sm mb-2">Bachelor of Science in Computer Science</h3>
                <span className="text-lg text-text-secondary">Xavier University of Louisiana</span>
              </div>
              
              <p className="body-text mb-6">
                Graduated Magna Cum Laude. Focused on software engineering, algorithms, and database systems. Participated in research projects related to machine learning applications for detecting cancer.
              </p>
              
              <div>
                <h4 className="uppercase-label text-accent mb-4">Coursework</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Data Structures & Algorithms',
                    'Operating Systems',
                    'Database Systems',
                    'Web Development',
                    'Android Development',
                    'Computer Networks',
                    'Machine Learning',
                    'Software Engineering'
                  ].map((course) => (
                    <div key={course} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      <span className="body-text">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative">
              <div className="aspect-video relative">
                <Image 
                  src="/assets/xula.jpg" 
                  alt="University Campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                
                <div className="absolute top-4 left-4 z-10 bg-black/75 px-4 py-2 flex items-center">
                  <svg className="w-4 h-4 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white text-sm font-medium">Xavier University of Louisiana</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="md:col-span-5">
            <h3 className="heading-sm mb-8">Professional Certifications</h3>
            
            <div className="space-y-10">
              <div className="flex">
                <div className="w-16 h-16 mr-6 flex-shrink-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm mb-1">AWS Certified Developer - Associate</h4>
                  <span className="uppercase-label text-accent inline-block mb-3">Amazon Web Services</span>
                  <p className="body-text mb-2">
                    Expertise in developing and maintaining AWS-based applications, including core services, security, and deployment.
                  </p>
                  {/* <span className="text-sm text-text-secondary">Issued 2022 • ID: AWS-DEV-12345</span> */}
                </div>
              </div>
              
              <div className="flex">
                <div className="w-16 h-16 mr-6 flex-shrink-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm mb-1">UC Berkeley Machine Learning and Artificial Intelligence</h4>
                  <span className="uppercase-label text-accent inline-block mb-3">UC Berkeley Engineering | UC Berkeley Haas</span>
                  <p className="body-text mb-2">
                    Six-month intensive program focused on advanced knowledge in data analytics, deep neural networks, natural language processing (NLP), and generative AI. Gained hands-on experience in data preprocessing, model training, evaluation, and deployment using Python, TensorFlow, and Jupyter Notebooks. 
                  </p>
                  {/* <span className="text-sm text-text-secondary">Issued 2021 • ID: AZ-204</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section 
        id="contact" 
        title="Get In Touch" 
        subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="bg-white p-8 border border-gray-200 relative">
              <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary"></div>
              
              <h3 className="heading-sm mb-8">Contact Information</h3>
              
              <div className="space-y-10">
                <div className="flex">
                  <div className="w-14 h-14 mr-6 flex-shrink-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="uppercase-label mb-2">Email</h4>
                    <a href="mailto:laurynhudson98@gmail.com" className="body-text hover:text-accent transition-all">
                      laurynhudson98@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-14 h-14 mr-6 flex-shrink-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="uppercase-label mb-2">Location</h4>
                    <p className="body-text">Los Angeles, California</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-14 h-14 mr-6 flex-shrink-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="uppercase-label mb-2">Social Profiles</h4>
                    <div className="flex space-x-5 mt-2">
                      <a 
                        href="https://www.linkedin.com/in/lauryn-hudson/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-accent transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/lauryn-hudson" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-accent transition-all"
                        aria-label="GitHub"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <span className="uppercase-label block mb-4">
                  Available for freelance projects
                </span>
                <a href="mailto:laurynhudson98@gmail.com" className="btn-primary">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="mb-10">
              <p className="body-text max-w-xl">
                Have a project in mind? Looking to collaborate or hire me? Use the form below to get in touch. I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="uppercase-label block mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-accent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="uppercase-label block mb-3">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-accent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="uppercase-label block mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-accent"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="uppercase-label block mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-accent resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}