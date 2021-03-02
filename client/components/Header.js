import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
	return (
		<header
			css={`
				height: 10rem;
				display: flex;
				position: relative;
			`}
		>
			<form
				css={`
					margin-left: 30rem;
					margin-top: 2.5rem;
					width: 50%;
					display: flex;
				`}
				onSubmit={() => console.log('submit')}
			>
				<input
					type='text'
					placeholder='Please Search a Book Name'
					css={`
						padding: 0 2rem;
						height: 5rem;
						width: 30rem;
						display: inline-block;
						border: none;
						border-radius: 3rem 0 0 3rem;
						font-size: 1.7rem;
						font-weight: 600;
						font-family: inherit;
						line-height: 1.7;
						color: inherit;

						&:focus {
							outline: none;
						}

						&::-moz-placeholder {
							color: $color-grey-dark-2;
						}

						&:-ms-input-placeholder {
							color: $color-grey-dark-2;
						}

						&::placeholder {
							color: $color-grey-dark-2;
						}
					`}
					name='searchfield'
				/>
				<button
					css={`
						background-image: linear-gradient(
							to right,
							var(--color-tiffany-default),
							var(--color-sky-blue)
						);
						color: var(--color-white);
						padding: 1rem;
						transform: translateX(-7rem);
						display: inline-block;
						width: 20rem;
						height: 5rem;
						border: none;
						border-radius: 3rem;
						transition: all 0.3s;

						&:hover {
							box-shadow: 0 1rem 1.5rem rgba(var(--color-black), 0.2);
						}

						span {
							font-size: 2rem;
							font-weight: 200;
						}
					`}
				>
					<span>Search</span>
				</button>
			</form>
			<nav
				css={`
					-ms-grid-row-align: stretch;
					align-self: stretch;
				`}
			>
				<ul
					css={`
						list-style: none;
						display: flex;
						height: 100%;
					`}
				></ul>
			</nav>
		</header>
	);
};

export default Header;
