import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 3rem;

	float: left;
	text-decoration: none;
	color: inherit;
	background-color: rgba(233, 56, 16, 100);

	&::before {
		position: absolute;
		display: block;
		content: '';
		width: 1000%;
		height: 100%;
		top: 0;
		right: 100%;
		background-color: rgba(233, 56, 16, 100);
	}

	&::after {
		position: absolute;
		display: block;
		content: '';
		width: 3rem;
		height: 200%;
		top: -25%;
		right: -1rem;
		background-color: rgba(233, 56, 16, 100);
		transform: rotate(25deg);
	}
`;

export const LogoText = styled.span`
	display: block;

	min-width: max-content;
	font-family: 'Audiowide', sans-serif;
	font-size: 2.6rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	color: #ffffff;
`;

export const LogoSlogan = styled.span`
	display: block;
	font-family: 'Ubuntu', sans-serif;
	font-size: 1.2rem;
	font-weight: 500;
	text-transform: lowercase;
	letter-spacing: 0.17rem;
	text-align: center;
	line-height: 1.8rem;

	color: #ffffff;
	border: 1px solid;
`;
