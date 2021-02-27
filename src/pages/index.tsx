import Head from 'next/head';
import React, { useContext, useState } from 'react';
import Link,{ GetServerSideProps } from 'next';
import { Redirect } from 'react-router';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { CountdownProvider } from '../contexts/CountdownContext';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesProvider, ChallengesContext } from '../contexts/ChallengesContext';
import  LandingPage  from './LandingPage';
import { ProfileProvider } from '../contexts/ProfileContext';

interface HomeProps {
  level: number; 
  currentExperience: number;
  challengesCompleted:number;
}

export default function Home(props: HomeProps) {
  const user = typeof window !== 'undefined' ? localStorage.getItem('name') : null;

  if(!user){
    if(typeof window !== 'undefined'){
      window.location.href = "/LandingPage"
    }
  }

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar/>

      <CountdownProvider>
        <section>
          <div>
          <ProfileProvider>
              <Profile />
          </ProfileProvider>
            
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}