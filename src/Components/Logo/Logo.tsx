import { LogoLink, LogoSlogan, LogoText } from './Logo.styled';

export const Logo = () => {
	return (
		<LogoLink to={'/'}>
			<LogoText>Top movies</LogoText>
			<LogoSlogan>Ваш домашній кінотеатр</LogoSlogan>
		</LogoLink>
	);
};
