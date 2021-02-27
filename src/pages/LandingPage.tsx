import { useContext, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/pages/LandingPage.module.css';

export default function LandingPage(){
  const [inputValue,setInputValue] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem('name', inputValue);
    localStorage.setItem('picture', `https://github.com/${inputValue}.png`);
    
    window.location.href = "/";
  }

  return (
    <div className={styles.landingPageContainer}>
        <img src="./background-image.svg" alt="Logo" className={ styles.backgroundImage }/>
      <div className={ styles.loginArea }>
        <img src="./logo-full.svg" alt="Logo" className={ styles.logoFull }/>

        <strong>Bem-vindo</strong>

        <img src="./git-message.svg" alt="Mensagem do git" className={ styles.gitMessage }/>

        <div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Digite seu username"
              onChange={e => setInputValue(e.target.value)}
            />
             
              <button type="submit">
                <img src="./icons/arrow.svg" alt="Entrar" />
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}