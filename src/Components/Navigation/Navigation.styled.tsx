import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled(NavLink)`
	position: relative;
	display: inline-block;
	padding: 0 1rem;
	font-weight: 600;
	line-height: 5.8rem;
	color: #8f95a2;

	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&.active::after {
		position: absolute;
		display: block;
		content: '';
		width: 100%;
		height: 0.3rem;
		bottom: 0;
		left: 0;
		border-radius: 0.3rem;
		background-color: #e93810;
	}

	&:hover,
	&:focus,
	&.active {
		color: #b4bbcb;
	}
`;
