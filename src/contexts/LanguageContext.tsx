import { FC, createContext, useContext, useEffect, useState } from 'react';

// interface ILanguageContext {
// 	lang: string;
// }

interface Props {
	children: React.ReactNode;
}

const LanguageContext = createContext('en');

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: FC<Props> = ({ children }) => {
	const [lang, setLang] = useState('');

	useEffect(() => {
		const langHtml =
			document.documentElement.lang.slice(0, 2).toLowerCase() || 'en';
		setLang(langHtml);
	}, []);

	return (
		<LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
	);
};
