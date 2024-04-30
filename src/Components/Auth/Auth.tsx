import { Button, Typography } from '@mui/material';
import { FaLock } from 'react-icons/fa6';
import { useLanguage } from '../../contexts/LanguageContext';
import { ariaLabels } from '../../data/ariaLabels';

const { authBtn } = ariaLabels;

export const Auth = () => {
	const lang = useLanguage();

	return (
		<Button
			aria-label={authBtn[lang as keyof typeof authBtn]}
			sx={{
				gap: '0.8rem',
				textTransform: 'none',
				color: 'rgb(143, 149, 162)',
				':hover': {
					color: 'rgb(180, 187, 203)',
					backgroundColor: 'transparent',
				},
			}}
		>
			<FaLock
				size={'1.2rem'}
				fill="currentcolor"
				style={{
					border: '0.2rem solid',
					padding: '0.4rem',
					borderRadius: '50%',
				}}
			/>
			<Typography sx={{ fontSize: '1.6rem', fontWeight: 600 }}>
				{authBtn[lang as keyof typeof authBtn]}
			</Typography>
		</Button>
	);
};
