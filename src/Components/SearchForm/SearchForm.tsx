import { IconButton } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useLanguage } from '../../contexts/LanguageContext';
import { ariaLabels } from '../../data/ariaLabels';
import { Form, Input } from './SearchForm.styled';

const { search, inputPlaceholder } = ariaLabels;

export const SearchForm: FC = () => {
	const [isInputOpen, setInputIsOpen] = useState<boolean>(false);
	const [query, setQuery] = useState<string>('');
	const lang = useLanguage();

	const pVariant = {
		hidden: { width: 0, opacity: 0 },
		visible: { width: '60rem', opacity: 1 },
	};

	const handleButtonClick = () => {
		if (!isInputOpen || query.trim() === '') {
			setInputIsOpen(prevState => !prevState);
		} else {
			onSearch(query);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (query.trim() !== '') {
			onSearch(query);
		}
	};

	const onSearch = (query: string) => {
		console.log('query', query.trim());
		setQuery('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<IconButton
				aria-label={search[lang as keyof typeof search]}
				sx={{
					color: 'rgb(143, 149, 162)',
					zIndex: 3,
					':hover': {
						color: 'rgb(180, 187, 203)',
						backgroundColor: 'transparent',
					},
				}}
				onClick={handleButtonClick}
			>
				<ImSearch size={'2rem'} fill="currentcolor" />
			</IconButton>

			<AnimatePresence>
				{isInputOpen && (
					<Input
						variants={pVariant}
						initial={'hidden'}
						animate={'visible'}
						exit={'hidden'}
						transition={{ duration: 0.3 }}
						value={query}
						type="text"
						placeholder={
							inputPlaceholder[lang as keyof typeof inputPlaceholder]
						}
						autoFocus
						onChange={handleChange}
					/>
				)}
			</AnimatePresence>
		</Form>
	);
};
