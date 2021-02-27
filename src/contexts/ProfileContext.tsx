import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface ProfileContextData {
  profileName: string;
  profilePicture: string;
  setProfileData: () => void;
  isOpeningApp: boolean;
}

interface ProfileProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children } : ProfileProps) {
  const [isOpeningApp, setIsOpeningApp] = useState(true);
  const [profileName, setProfileName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  function setProfileData() {
    setProfileName(localStorage.getItem('name'));
    setProfilePicture(localStorage.getItem('picture'));
  }

  useEffect(() => {
    setProfileData();
  },[]);

  return(
    <ProfileContext.Provider
      value={{
        profileName, 
        profilePicture,
        setProfileData,
        isOpeningApp
      }}
    >

      {children}

    </ProfileContext.Provider>
  );
}