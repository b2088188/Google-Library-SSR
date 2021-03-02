import React from 'react';
import styled from 'styled-components/macro';

const Pagination = ({ page, onPageChange, resLength }) => {
	const pages = Math.ceil(resLength / 10);

	if (pages < 2) return null;
	return (
		<div
			css={`
				margin: 2rem 0;
				width: 100%;
			`}
		>
			{[...Array(pages).keys()]
				.map((el) => el + 1)
				.map(function generateBtn(page) {
					return (
						<button
							key={page}
							css={`
								color: var(--color-tiffany-default);
								padding: 1rem;
								height: 4rem;
								width: 13rem;
								font-size: 1.4rem;
								font-weight: 700;
								text-transform: uppercase;
								border-radius: 3rem;
								border: none;
								transition: all 0.2s;

								&:hover {
									cursor: pointer;
									background-color: var(--color-grey-dark-2);
								}

								&:focus {
									outline: none;
								}
							`}
							onClick={() => onPageChange(page)}
						>
							<span>{page}</span>
						</button>
					);
				})}
		</div>
	);
};

export default Pagination;
