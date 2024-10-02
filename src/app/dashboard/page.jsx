'use client'
import { FaLanguage } from 'react-icons/fa';
import withAuth from '../utils/withAuth';
import Logout from '../login/logout';
import Arabic from '../translation/en-ar/global.json';
import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

const Dashboard = () => {
  const { language, toggleLanguage } = useLanguage();
  const translations = language === 'en' ? {} : Arabic;

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className='py-[50px] flex items-center flex-col gap-4'>
      <h1>{translations["Welcome to the dashboard"] || "Welcome to the Dashboard!"}</h1>
      <button className='flex gap-1 items-center bg-sky-500 text-white rounded p-2 text-xl' onClick={toggleLanguage}>
        <FaLanguage /> {translations["Change Language"] || "Change Language"}
      </button>
      <Logout translations={translations} />
    </div>
  );
};

export default withAuth(Dashboard);
