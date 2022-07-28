import Head from 'next/head';
import styles from './book.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';

const name = 'Bryan Thai';
export const siteTitle = 'BThai Website';

export default function Book({frontContentOne, backContentOne, frontContentTwo, backContentTwo, frontContentThree, backContentThree}) {

    const numOfPapers = 3;
    const maxLocation = numOfPapers+1;

    const [currentLocation, setCurrentLocation] = useState(1);
    const [flippedPaperOne, setPaperOneFlipped] = useState(false)
    const [flippedPaperTwo, setPaperTwoFlipped] = useState(false)
    const [flippedPaperThree, setPaperThreeFlipped] = useState(false)
    const [openBook, setOpenBook] = useState("translateX(0%)")
    const [translateBtn, setTranslateBtn] = useState(false)


    function invokeOpenBook(){
        setOpenBook("translateX(50%)")
        setTranslateBtn(true)
    }

    function invokeCloseBook(isAtBeginning){
        if(isAtBeginning){
            setOpenBook("translateX(0%)")
        }else{
            setOpenBook("translateX(100%)") 
        }
        setTranslateBtn(false)
    }

    const incrementCounter = () => {
        if(currentLocation < maxLocation) setCurrentLocation(currentLocation+1)  
      }

    const decrementCounter = () => {
        if(currentLocation > 1) setCurrentLocation(currentLocation-1)
    }

    const goNextPage = () =>{
        if(currentLocation < maxLocation){
            switch(currentLocation) {
                case 1:
                    invokeOpenBook();
                    setPaperOneFlipped(true)
                    break;
                case 2:
                    setPaperTwoFlipped(true)
                    break;
                case 3:
                    setPaperThreeFlipped(true)
                    invokeCloseBook(false);
                    break;
                default:
                    throw new Error("unknown state")
            }
        }
        console.log(currentLocation)
    }

    function goPrevPage(){
        if(currentLocation > 1){
            switch(currentLocation){
                case 2:
                    invokeCloseBook(true);
                    setPaperOneFlipped(false);
                    break;
                case 3:
                    setPaperTwoFlipped(false);
                    break;
                case 4:
                    invokeOpenBook();
                    setPaperThreeFlipped(false);
                    break;
                default:
                    throw new Error("unknown state");
            }
        }
        console.log(currentLocation)
    }


    return(
        <div className={styles.bookContainer}>
        <button onClick={function(event){goPrevPage(); decrementCounter();}} id={styles.prevBtn} style={{transform: translateBtn?"translateX(-20vmin)":"translateX(0)"}}></button>

        <div className={styles.book} id={styles.book} style={{transform: openBook}}>
            <div id={styles.p1} className={flippedPaperOne? `${styles.paper} ${styles.flipped}`:styles.paper} style={{zIndex: flippedPaperOne?"1":"3"}}>
                <div className={styles.front}>
                    <div id={styles.f1} className={styles.frontContent}>
                        {frontContentOne}
                    </div>
                </div>
                <div className={styles.back}>
                    <div id={styles.b1} className={styles.backContent}>
                    {backContentOne}
                    </div>
                </div>
            </div>

            <div id={styles.p2} className={flippedPaperTwo? `${styles.paper} ${styles.flipped}`:styles.paper} style={{zIndex: flippedPaperTwo?"2":"2"}}>
                <div className={styles.front}>
                    <div id={styles.f2} className={styles.frontContent}>
                    {frontContentTwo}
                    </div>
                </div>
                <div className={styles.back}>
                    <div id={styles.b2} className={styles.backContent}>
                    {backContentTwo}
                    </div>
                </div>
            </div>

            <div id={styles.p3} className={flippedPaperThree? `${styles.paper} ${styles.flipped}`:styles.paper} style={{zIndex: flippedPaperThree?"3":"1"}}>
                <div className={styles.front}>
                    <div id={styles.f3} className={styles.frontContent}>
                    {frontContentThree}
                    </div>
                </div>
                <div className={styles.back}>
                    <div id={styles.b3} className={styles.backContent}>
                    {backContentThree}
                    </div>
                </div>
            </div>
        </div>

        <button onClick={function(event){goNextPage(); incrementCounter();}} id={styles.nextBtn} style={{transform: translateBtn?"translateX(20vmin)":"translateX(0)"}}></button>
        </div>
    )
}