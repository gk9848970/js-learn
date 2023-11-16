import Footer from 'components/Footer'
import React from 'react'
import styles from '@styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.div}>About</div>
  )
}

About.getLayout = function PageLayout(page) {
    return <>
    {page}
    <Footer/>
    </>
}