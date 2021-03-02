import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const SearchResults = () => {
	return (
		<div
			css={`
				background-color: var(--color-white);
				height: auto;
				position: relative;
			`}
		>
			<ul className='results'>
				<li
					css={`
						border: solid 0.1rem rgba(30, 30, 30, 0.3);
						border-radius: 0.3rem;
						margin: 0 auto;
						width: 80%;
						height: 16rem;
						position: relative;
					`}
					key={123}
				>
					<Link
						css={`
							text-decoration: none;
							display: flex;
							height: 100%;
							background-image: linear-gradient(
								120deg,
								transparent 0%,
								transparent 50%,
								var(--color-sky-blue) 50%
							);
							background-size: 250%;
							transition: all 0.7s;
							&:hover,
							&:active {
								background-position: 100%;
							}
							&--active {
								background-color: var(--color-sky-blue);
							}
						`}
						to={`/result/123`}
					>
						<figure
							css={`
								height: 100%;
								width: 20%;
								background-color: var(--color-grey-light-2);
								transform: translateY(-1.5rem);
								-webkit-clip-path: circle(45% at 50% 50%);
								clip-path: circle(45% at 50% 50%);
								position: relative;
							`}
						>
							<img
								css={`
									width: 50%;
									height: 80%;
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
								`}
								src='http://books.google.com/books/content?id=DwACAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
								alt='Image Test'
							/>
						</figure>
						<div
							css={`
								width: 70%;
								height: 100%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
							`}
						>
							<h4
								css={`
									margin-top: 2rem;
									color: var(--color-tiffany-default);
									font-size: 1.7rem;
								`}
							>
								Harry Blount
							</h4>
							<p
								css={`
									color: var(--color-grey-dark);
									font-size: 1.5rem;
									letter-spacing: 0.1rem;
								`}
							>
								Philip Gilbert Hamerton
							</p>
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default { component: SearchResults };
