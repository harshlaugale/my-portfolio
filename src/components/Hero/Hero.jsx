import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Harshla</h1>
            <p className={styles.description}> Currently in third-year computer engineering, passionate about technology. Proficient in Python for Machine Learning, MERN Stack development, and JavaScript for crafting seamless web experiences. I thrive on turning innovative ideas into functional and user-friendly digital solutions. <br/><br/>Welcome to my portfolio—explore the intersection of my curiosity and code.
            </p>
            <a className={styles.resumeBtn}  href="https://drive.google.com/file/d/1SYbeAmxgfpvamReTX-HCmZ7LzCLIKiE8/view?usp=drive_link">Resume</a>
        </div>

        <img className={styles.heroImg} src = {getImageUrl('hero/HeroImage.png')} alt="image of me" />

        <div className={styles.topBlur}/>

        <div className={styles.bottomBlur}/>

    </section>
}

