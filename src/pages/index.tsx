import Head from 'next/head';
import { useContext, useState } from 'react';
import styles from '../styles/pages/LandingPage.module.css';

export default function LandingPage(){
  const [inputValue,setInputValue] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem('name', inputValue);
    localStorage.setItem('picture', `https://github.com/${inputValue}.png`);
    if(inputValue !== "") redirectToDashboard();
  }

  function redirectToDashboard(){
    window.location.href = "/dashboard";
  }

  const user = typeof window !== 'undefined' ? localStorage.getItem('name') : null;
  return (
    <div>
      <Head>
        <title>Move.it</title>
      </Head>
      <div className={styles.landingPageContainer}>
        <img src="./background-image.svg" alt="Logo" className={ styles.backgroundImage }/>
      <div className={ styles.loginArea }>
        <img src="./logo-full.svg" alt="Logo" className={ styles.logoFull }/>

        <strong>Bem-vindo</strong>

        <img src="./git-message.svg" alt="Mensagem do git" className={ styles.gitMessage }/>

        <div className={styles.inputButton}>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Digite seu username"
              onChange={e => setInputValue(e.target.value)}
            />
            <button 
              type="submit"
              className={styles.logIn}
              >
              <img src="./icons/arrow.svg" alt="Entrar" />
            </button>
          </form>
        </div>
        <div>
          { user && (
            <button 
              type="submit"
              className={styles.alreadyLoggedIn}
              onClick={redirectToDashboard}
            >
              logar como {user}
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}