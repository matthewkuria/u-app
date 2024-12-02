import React, { createContext, useState, useContext } from "react";

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    notificationsEnabled: true,
    language: "en",
  });

  const toggleNotifications = () => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      notificationsEnabled: !prevPreferences.notificationsEnabled,
    }));
  };

  const setLanguage = (language) => {
    setPreferences((prevPreferences) => ({ ...prevPreferences, language }));
  };

  return (
    <PreferencesContext.Provider
      value={{ preferences, toggleNotifications, setLanguage }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);
