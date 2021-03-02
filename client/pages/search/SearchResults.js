import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import axios from 'axios';
import { useQuery } from 'react-query';
import Pagination from '../../components/Pagination';
import sliceData from '../../utils/sliceData';

const SearchResults = () => {
	const result = useQuery({
		queryKey: 'harry',
		queryFn: () =>
			axios
				.get('https://www.googleapis.com/books/v1/volumes?maxResults=40&q=harry')
				.then(({ data }) => data.items)
	});
	const data = result.data ?? [];
	const [page, setPage] = useState(1);
	const paginatedData = sliceData(data, page);

	return (
		<div
			css={`
				background-color: var(--color-white);
				height: auto;
				position: relative;
			`}
		>
			<ul className='results'>
				{paginatedData.map((result) => {
					const imgSrc = result.volumeInfo.imageLinks
						? result.volumeInfo.imageLinks.smallThumbnail
						: 'http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1';
					return (
						<li
							css={`
								border: solid 0.1rem rgba(30, 30, 30, 0.3);
								border-radius: 0.3rem;
								margin: 0 auto;
								width: 80%;
								height: 16rem;
								position: relative;
							`}
							key={result.id}
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
								to={`/book/${result.id}`}
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
										src={imgSrc}
										alt={result.volumeInfo.title}
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
										{result.volumeInfo.title || 'Unknown'}
									</h4>
									<p
										css={`
											color: var(--color-grey-dark);
											font-size: 1.5rem;
											letter-spacing: 0.1rem;
										`}
									>
										{result.volumeInfo.authors || 'Unknown'}
									</p>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
			<Pagination page={page} resLength={data.length} />
		</div>
	);
};

async function loadData(queryClient) {
	await queryClient.prefetchQuery('harry', () =>
		axios
			.get('https://www.googleapis.com/books/v1/volumes?maxResults=40&q=harry')
			.then(({ data }) => data.items)
	);
}

export default { component: SearchResults, loadData };
