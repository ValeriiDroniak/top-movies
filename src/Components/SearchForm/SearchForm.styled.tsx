import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Form = styled.form`
	position: relative;
`;

export const Input = styled(motion.input)`
	box-sizing: border-box;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	z-index: 2;

	background-color: #40444e;
	border: none;
	outline: none;
	border-radius: 0.3rem;
	color: #ffffff;
	padding: 0.8rem 0.8rem 0.8rem 4.4rem;
`;
