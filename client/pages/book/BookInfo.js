import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const BookInfo = () => {
	return (
		<div
			css={`
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				background-color: var(--color-grey-light-1);
			`}
		>
			<Link to='/'>Back</Link>
			{/*Card*/}
			<div
				css={`
					margin: 1.5rem 5rem;
					perspective: 150rem;
					-moz-perspective: 150rem;
					height: 52rem;
					width: 40rem;
					position: relative;
				`}
			>
				<div
					css={`
						position: absolute;
						top: 0;
						left: 0;
						height: 52rem;
						width: 100%;
						-webkit-backface-visibility: hidden;
						backface-visibility: hidden;
						border-radius: 0.3rem;
						box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
						transition: all 0.8s ease;
					`}
				>
					<figure
						css={`
							height: 100%;
							width: 100%;
						`}
					>
						<img
							src='https://books.google.com/books/content/images/frontcover/DKcWE3WXoj8C?fife=w600-h500'
							alt='Image Test'
							css={`
								transform: translate(-4rem, -1.5rem);
								width: 100%;
								height: 100%;
							`}
						/>
					</figure>
				</div>
			</div>
			{/*Info*/}
			<div
				css={`
					width: 50rem;
					position: relative;
					margin-top: 1.5rem;
					margin-left: 5rem;
					text-align: center;
				`}
			>
				<h1
					css={`
						margin: 0 auto;
						width: 37rem;
						text-align: center;
						color: var(--color-white);
						padding: 0 2rem;
						font-size: 3rem;
						background-image: linear-gradient(
							to right,
							var(--color-tiffany-default),
							var(--color-sky-blue)
						);
						transform: skewX(-13deg);
						margin-bottom: 2.5rem;
					`}
				>
					<span
						css={`
							transform: skewX(13deg);
						`}
					>
						Harry Potter and International Relations
					</span>
				</h1>
				<span
					css={`
						font-size: 2.5rem;
					`}
				>
					Author
				</span>
				<h2
					css={`
						font-size: 3rem;
						background-image: linear-gradient(
							to right,
							var(--color-tiffany-default),
							var(--color-sky-blue)
						);
						color: transparent;
						-webkit-background-clip: text;
						background-clip: text;
					`}
				>
					Daniel H. NexonIver B. Neumann
				</h2>
				<span
					css={`
						font-size: 2.5rem;
					`}
				>
					★Rating
				</span>
				<h2
					css={`
						font-size: 3rem;
						background-image: linear-gradient(
							to right,
							var(--color-tiffany-default),
							var(--color-sky-blue)
						);
						color: transparent;
						-webkit-background-clip: text;
						background-clip: text;
					`}
				>
					3.5
				</h2>
				<span
					css={`
						font-size: 2.5rem;
					`}
				>
					Publisher
				</span>
				<h2
					css={`
						font-size: 3rem;
						background-image: linear-gradient(
							to right,
							var(--color-tiffany-default),
							var(--color-sky-blue)
						);
						color: transparent;
						-webkit-background-clip: text;
						background-clip: text;
					`}
				>
					Rowman & Littlefield
				</h2>
				<span
					css={`
						font-size: 2.5rem;
					`}
				>
					Publisher Date
				</span>
				<h2
					css={`
						font-size: 3rem;
						background-image: linear-gradient(
							to right,
							var(--color-tiffany-default),
							var(--color-sky-blue)
						);
						color: transparent;
						-webkit-background-clip: text;
						background-clip: text;
					`}
				>
					Unknown
				</h2>
				{/*<button className='btn-text--2'>Add to Cart &rarr;</button>*/}
				{/*renderBookMarkBtn(authState.SignedState, authState.userId)*/}
			</div>
			{/*Description*/}
			<div
				css={`
					margin: 0 auto;
					transform: translate(1rem, 5rem);
					width: 75rem;
					height: 70rem;
				`}
			>
				<h1
					css={`
						margin: 0 auto;
						width: 37rem;
						text-align: center;
						color: var(--color-white);
						padding: 0 2rem;
						font-size: 3rem;
						background-image: linear-gradient(
							to right,
							var(--color-tiffany-default),
							var(--color-sky-blue)
						);
						transform: skewX(-13deg);
						margin-bottom: 2.5rem;
					`}
				>
					<span
						css={`
							transform: skewX(13deg);
						`}
					>
						Description
					</span>
				</h1>
				<div>
					Why not take seriously the claim that Harry Potter's world intertwines with our own?
				</div>
			</div>
		</div>
	);
};

export default {
	component: BookInfo
};
