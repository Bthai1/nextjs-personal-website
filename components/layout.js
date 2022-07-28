import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';

const name = 'Bryan Thai';
export const siteTitle = 'BThai Website';

export default function Layout({ children, home }) {

  async function handleOnSubmit(e){
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field =>{
      if(!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData)
  }

  const [showMe, setShowMe] = useState(false);
  function contactClick(){
    setShowMe(!showMe);
  }

  const [showDropDown, setDropDown] = useState(false);
  function navBarClick(){
    setDropDown(!showDropDown)
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bryan Thai Web Page"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <ul className={styles.ulHeader}>
        <li className={`${utilStyles.liLeft} ${styles.li}`}><Link href="/"><a className={styles.a}>Home</a></Link></li>
        <li className={`${utilStyles.liRight} ${styles.li}`}><a onClick={contactClick} className={styles.a}>Contact</a></li>
        <li className={`${utilStyles.liRight} ${styles.li}`}><Link href="#projectSection"><a className={styles.a}>Projects</a></Link></li>
        <li className={`${utilStyles.liRight} ${styles.li}`}><Link href="#workSection"><a className={styles.a}>Work</a></Link></li>
        <li className={`${utilStyles.liRight} ${styles.li}`}><Link href="#aboutSection"><a className={styles.a}>About</a></Link></li>
        </ul>
        <div className={styles.navContainer}>
          <a onClick={navBarClick} className={styles.navBar}>
        <div className={styles.dropdown}>
          <span className={styles.navIcon} id={styles.spanOne}></span>
          <span className={styles.navIcon} id={styles.spanTwo}></span>
          <span className={styles.navIcon} id={styles.spanThree}></span>
        </div>
        </a>
        </div>
        <div className={styles.dropdownContent} style={{
          transform: showDropDown?"translateY(0%)":"translateY(-100%)"
        }}>
          <ul>
          <li style={{borderBottom:"none"}}><Link href="#aboutSection"><a>About</a></Link></li>
          <li><Link href="#workSection"><a>Work</a></Link></li>
          <li><Link href="#projectSection"><a>Projects</a></Link></li>
          <li><a onClick={() => {contactClick(); navBarClick();}}>Contact</a></li>
          </ul>
        </div>
      </header>
      <div className={styles.contactSquare}style={{
        display: showMe?"block":"none",
        zIndex: showMe?"1000":"-1"
      }}>
        <div onClick={contactClick} className={styles.contactExit}>
          <span id={styles.spanFour}></span>
          <span id={styles.spanFive}></span>
        </div>
        <div className={styles.contactInfo}>
        <h1 className={styles.contactText}>Contact Me</h1>
        <div className={styles.innerContainer}>
        <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
          <div className={styles.innerDiv}>
            <label className={styles.innerLabel} form="name">Name *</label>
            <input className={styles.innerInput} type="text" name="name" />
          </div>
          <div className={styles.innerDiv}>
            <label className={styles.innerLabel} form="email">Email *</label>
            <input className={styles.innerInput} type="email" name="email" />
          </div>
          <div className={styles.innerDiv}>
            <label className={styles.innerLabel} form="message">Message *</label>
            <textarea className={styles.innerInput} type="text" name="message"/>
          </div>
          <div className={styles.innerDiv}>
            <button className={styles.inputButton}>Submit</button>
          </div>
        </form>
        </div>
        </div>
      </div>
      <main>{children}</main>
      <div className={styles.footer}>
            <div className={styles.content}>
                <ul className={styles.footerLinksBlock}>
                <li className={styles.footerLinks}><Link href="https://www.linkedin.com/in/bthaiuiuc/"><a className={styles.a}>Linkedin</a></Link></li>
                <li className={styles.footerLinks}><Link href="https://github.com/Bthai1"><a className={styles.a}>Github</a></Link></li>
                <li className={styles.footerLinks}><Link href="/"><a className={styles.a}>Contact</a></Link></li>
                </ul>
            </div>
      </div>
    </div>
  );
}
