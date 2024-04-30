import { Box } from '@mui/material';
import { FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { NavigateLink } from './Navigation.styled';

interface LinkData {
	url: string;
	text: { en: string; uk: string };
}

interface Props {
	data: LinkData[];
}

export const Navigation: FC<Props> = ({ data }) => {
	const lang = useLanguage();

	return (
		<Box component={'nav'} sx={{ alignContent: 'center', flexGrow: 1 }}>
			<Box
				component={'ul'}
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
					gap: '0.8rem 3.6rem',
				}}
			>
				{data.map(({ url, text }) => (
					<li key={url}>
						<NavigateLink to={url}>
							{text[lang as keyof typeof text]}
						</NavigateLink>
					</li>
				))}
			</Box>
		</Box>
	);
};
