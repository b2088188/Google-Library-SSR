import React from 'react';
import styled from 'styled-components/macro';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const BookInfo = () => {
	const { bookId } = useParams();
	const result = useQuery({
		queryKey: ['bookinfo', { bookId }],
		queryFn: () =>
			axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then(({ data }) => data)
	});
	const { data } = result;
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
							src={`https://books.google.com/books/content/images/frontcover/${data?.id}?fife=w600-h500`}
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
						{data?.volumeInfo?.title || ''}
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
					{data?.volumeInfo?.authors || 'Unknown'}
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
					{data?.volumeInfo?.averageRating || 'Unknown'}
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
					{data?.volumeInfo?.publisher || 'Unknown'}
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
					{data?.volumeInfo?.publisherDate || 'Unknown'}
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
				<div>{data?.volumeInfo?.description || ''}</div>
			</div>
		</div>
	);
};

async function loadData(req, queryClient, match) {
	const {
		params: { bookId }
	} = match;

	if (bookId !== 'bundle.js')
		await queryClient.prefetchQuery(['bookinfo', { bookId }], () =>
			axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then(({ data }) => data)
		);
}

export default {
	component: BookInfo,
	loadData
};
