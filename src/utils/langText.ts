// import { useLanguage } from '../contexts/LanguageContext';

const lang = '';
// useLanguage();

export const langAsKey = (obj: object) => {
	return obj[lang as keyof typeof obj];
};
