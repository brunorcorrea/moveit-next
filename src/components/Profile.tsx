import { useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContext } from '../contexts/ProfileContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
  const { level } = useContext(ChallengesContext);
  const { profileName, profilePicture } = useContext(ProfileContext);

  return(
      <div className={styles.profileContainer}>
        <img src={profilePicture} alt={profileName} />
        <div>
          <strong>{profileName}</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level {level}
          </p>
        </div>
      </div>
  );
}