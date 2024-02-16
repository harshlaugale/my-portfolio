import React from "react";
import records from "../../data/skills.json";
import styles from "./skills.module.css";

export const Skills = () => {
  return(

    <div className={styles.container} id="skills">

      <div className={styles.wrapper}>
      <h2 className={styles.heading}>Skills</h2>
      <h3 className={styles.desc}>Here are some of my skills on which I have been working on.</h3>
      <div className={styles.skillsContainer} id="skills">
      {
        records.map(record =>{
          return(
          <div className={styles.box} key={record.id}>
          <div className={styles.title} key={record.id}>
              {record.title}
          </div>
          <div className={styles.skillList}>
              {record.technologies.map(data => {
                return(
                  <div className={styles.skillItem} key={record.id}>
                    <img className={styles.img} src={data.image}></img>
                    {data.name}
                  </div>

                )
              })}</div>
              </div>
          )
        })
      }</div>

    </div>
    </div>)
};