import React from "react";
import styles from "./education.module.css";
import records from "../../data/education.json"

export const Educations =()=>{
  return (
    <div className={styles.container} id="education">
        <div className={styles.wrapper}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.desc}>My education has been a journey of self-discovery and growth. My educational details are as follows.</div>

    <div className={styles.timelineSection}>
      <div className={styles.timeline} >
        {
          records.map(record =>{
            return(

              <div className={styles.box} key={record.id}>
                  
                  <div className={styles.heading} key={record.id}>
                  <img className={styles.img} src={record.image} alt="Image of {record.name} logo."/>

                <div className={styles.name}>
                  {record.name}
                </div>
                </div>
                <div className={styles.degree}>
                  {record.degree}
                </div>
                <div className={styles.date}>
                  {record.date}
                </div>
                <div className={styles.grade}>
                  {record.grade}
                </div>
                <div className={styles.description}>
                  {record.description}
                </div>
                

              </div>

            )

          } )
        }
      </div>

    </div>

      </div>
    </div>
  )
}
