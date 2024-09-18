import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Home from './components/Home';
import './i18n'; // Ensure you import the i18n configuration

// Contains the value and text for the options
const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "am", text: "Amharic" },
];

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("");

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <Header />
      <select value={language} onChange={handleChangeLanguage}>
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.text}
          </option>
        ))}
      </select>
      <Home />
    </div>
  );
}

export default App;