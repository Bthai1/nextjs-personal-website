import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Book from '../components/book';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

  const [imgHover, setImgHover] = useState(false)
  function takoHover(){
    setImgHover(!imgHover);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.loadingScreen}>
        <div className={utilStyles.commandLineImg}>
          <div className={utilStyles.commandLineHeader}>
            <div className={utilStyles.cmdIcon}>
              <Image
                src= "/images/cmd.png"
                height="15px"
                width="20px"
              />
            </div>
            <p>Command Prompt</p>
            <div className={utilStyles.commandLineHeaderIcons}>
            <div className={utilStyles.minimizeIcon}>
            <span></span>
            </div>
            <div className={utilStyles.expandIcon}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={utilStyles.exitIcon}>
              <span></span>
              <span></span>
            </div>
            </div>
          </div>
          <div className={utilStyles.commandLineBody}>
            <p className={utilStyles.commandLineContent}> Microsoft Windows [Version 10.0.0.22000.613] 
            <br/>(c) Microsoft Corporation. All rights reserved. </p>
            <p className={utilStyles.commandLineContent}>C:\Users\Bryan\Website\nextjs-web{'>'}<span id={utilStyles.typeText}>npm run dev</span> </p>

            <div className={utilStyles.commandLineGrouping}>
            <p className={utilStyles.commandLineContent}>{'>'}dev</p>
            <p className={utilStyles.commandLineContent}>{'>'}next dev</p>
            </div>

            <div className={utilStyles.commandLineGrouping}>
            <p className={utilStyles.commandLineContent}><span>ready</span> - started server on 0.0.0.0:3000, url: https:/bryanthai.com</p>
            <p className={utilStyles.commandLineContent}><span>event</span>- compiled client and server successfully in 326 ms (176 modules)</p>
            <p className={utilStyles.commandLineContent}><span>wait</span> - compiling / (client and server)...</p>
            <p className={utilStyles.commandLineContent}><span>event</span> - compiled client and server successfully in 243 ms (244 modules)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={utilStyles.mainBackground}>
      <section className={utilStyles.headingMd}>
       
        <h1 className={`${utilStyles.heading2Xl} ${utilStyles.centerText} ${utilStyles.libreFont} ${utilStyles.textBorder}`}>Bryan Thai</h1>
        <p className={`${utilStyles.headingLg} ${utilStyles.centerText} ${utilStyles.libreFont} ${utilStyles.textBorder}`}>
          Computer Engineer? 
        </p>
        <ul className={`${utilStyles.limages} ${utilStyles.liRight}`}>
          <li><Link href="https://github.com/Bthai1">
          <a className={utilStyles.imageLink}>
              <Image
              src="/images/github.png"
              alt="Picture of the author"
              width={40}
              height={40}
            />
          </a>
          </Link>
          </li>
          <li><Link href="https://www.linkedin.com/in/bthaiuiuc/">
          <a className={utilStyles.imageLink}>
              <Image
              src="/images/linkedin.png"
              alt="Picture of the author"
              width={40}
              height={40}
            />
          </a>
          </Link>
          </li>
        </ul>
      </section>
      </div>
      <section className={utilStyles.aboutContainer} id="aboutSection"> 
      <div className={utilStyles.aboutLeft}>
        <h2 className={`${utilStyles.libreFont} ${utilStyles.aboutHeader}`}> <span>About</span> <span className={utilStyles.inaOrange}>Me</span></h2>
        <p className={`${utilStyles.libreFont} ${utilStyles.aboutP}`}>
          I'm Bryan Thai, a 20 year-old Vietnamese senior at the University of Illinois at Urbana-Champaign currently going for my bachelors in Computer Engineering. <br/>
          I love learning new technologies and how it can be implemented in creating an efficient world.
          Automation and Artificial Intelligence are two of my favorite topics to study. <br/>
          On my free time, I like to study Japanese, read novels/lightnovels, bouldering, and of course program.
        </p>
      </div>
      <div className={utilStyles.aboutRight}>
      <div className={utilStyles.rightImg} onMouseOver={takoHover} onMouseOut={takoHover}>
      <Image
              src= {imgHover? "/images/takodachi-ina.gif":"/images/takodachi-ina.png"}
              alt="Picture of the author"
              layout="fill"
              objectPosition="50% 50%"
              sizes="50vw"
            />
      </div>
      </div>
      </section>
      <section className={`${utilStyles.timeLineContainer}`} id="workSection">
        <h1 className={utilStyles.heading2Xl} style={{paddingBottom:"10px", textAlign:"center"}}> Work Experience and Education Time Line</h1>
        <div className={utilStyles.timeline}>
          <ul>
            <li>
              <div className={utilStyles.timelineContent}>
                <div className={utilStyles.timelineImg}>
              <Image
              src= {"/images/sentinel technologies logo.png"}
              alt="Sentinel Technologoies logo"
              width="150px"
              height="50px"
              layout="fixed"
              />
                </div>
                <h2 className={utilStyles.date}>May 2022 to August 2022</h2>
                <h1> Sentinel <br/> Technologies</h1>
                <p> SOC Analyst Intern</p>
              </div>
            </li>
            <li>
              <div className={utilStyles.timelineContent}>
              <div className={utilStyles.timelineImg}>
              <Image
              src= {"/images/Illinois_Fighting_Illini_logo.png"}
              alt="University of Illinois at Urbana-Champaign Logo"
              width="30px"
              height="60px"
              layout="fixed"
              />
                </div>
                <h2 className={utilStyles.date}>August 2021 to Present</h2>
                <h1> University of Illinois at Urbana-Champaign</h1>
                <p> Bachelors in Computer Engineering</p>
              </div>
            </li>
            <li>
              <div className={utilStyles.timelineContent}>
              <div className={utilStyles.timelineImg}>
              <Image
              src= {"/images/sarranowIcon.png"}
              alt="Sarranow Law Group LLC Logo"
              width="120px"
              height="80px"
              layout="fixed"
              />
                </div>
                <h2 className={utilStyles.date}>May 2021 to August 2021</h2>
                <h1> Sarranow<br/>Law Group</h1>
                <p> Software Developer</p>
              </div>
            </li>
            <li>
              <div className={utilStyles.timelineContent}>
              <div className={utilStyles.timelineImg}>
              <Image
              src= {"/images/Oakton Logo horizontal.png"}
              alt="Oakton Community College Logo"
              width="100px"
              height="50px"
              layout="fixed"
              />
                </div>
                <h2 className={utilStyles.date}>August 2020 to July 2021</h2>
                <h1> Oakton <br/>Community College</h1>
                <p> STEM Scholar</p>
              </div>
            </li>
            <li>
              <div className={utilStyles.timelineContent}>
              <div className={utilStyles.timelineImg}>
              <Image
              src= {"/images/maineSouthIcon.png"}
              alt="Maine South Logo"
              width="60px"
              height="60px"
              layout="fixed"
              />
                </div>
                <h2 className={utilStyles.date}>August 2016 to May 2020</h2>
                <h1> Maine South <br/> Highschool</h1>
                <p>Math Olympiad</p>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={utilStyles.bookContainer} id="projectSection">
        <h1 className={utilStyles.headingXl} style={{color:"black",paddingBottom:"10px", textAlign:"center"}}> Projects</h1>
        <div className={utilStyles.bookWrapper}>
          <Book 
          frontContentOne={<div>
            <h1> Hackathon Wake Up Eye Mask</h1>
            <div className={utilStyles.bookImg}>
              </div>
          </div>
          }
          backContentOne={<div>
            <h1> Description</h1>
            <p> Hackathon first place project. This project was a face mask that used a phone application to turn on blue leds inside the face mask
              to wake someone up. The application would be used to set the time they would like the leds to turn on.
            </p>
            </div>
          }
          frontContentTwo={<div>
            <h1>Technologies</h1>
            <ul>
              <li>BLExAR</li>
              <li>Arduino</li>
            </ul>
          </div>
          }
          backContentTwo={<div>
            <h1>Links</h1>
            <p>None</p>
          </div>
          }
          frontContentThree={<div>
            <h1>Contributors</h1>
            <ul>
            <li>Bryan Thai</li>
            <li>Yanni Speron</li>
            <li>Evan Yang</li>
            <li>Jordan Fannapour</li>
            </ul>
          </div>
          }
          backContentThree={<div>
            <Image
             src= {"/images/hack_ridge_logo_io_white.svg"}
             alt="Hackridge Logo"
             layout="fill"
             >
            </Image>
          </div>
          }
          >
            
          </Book>
        </div>
        <div className={utilStyles.bookWrapper}>
        <Book 
        frontContentOne={<div>
          <h1>Melty Blood Game</h1>
          <div className={utilStyles.bookImg}>
          <Image
              src= {"/images/project-img.png"}
              alt="Melty Blood Level"
              layout="fill"
              objectFit='contain'
              />
          </div>
        </div>
        }
        backContentOne={<div>
          <h1>Description</h1>
          <p>Web browser game implemetation of the fighting game, <Link href="https://store.steampowered.com/app/411370/Melty_Blood_Actress_Again_Current_Code/"><a>Melty Blood Actress Again Current Code</a></Link>, by FRENCH-BREAD.</p>
          </div>
        }
        frontContentTwo={<div>
          <h1>Technologies</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        }
        backContentTwo={<div>
          <h1>Links</h1>
          <p>Check out the game <Link href="https://github.com/Bthai1/Melty-Blood-Project"><a>here</a></Link></p>

        </div>
        }
        frontContentThree={<div>
          <h1>Contributors</h1>
            <p> Only Me</p>
          </div>
        }

        backContentThree={<div>
          <Image
            src= {"/images/arcueid-brunestud.png"}
            alt="Picture of arcueid-brunestud"
            layout="fill"
            />

        </div>
        }

        />
        </div>
      </section>
    </Layout>
  );
}