import React from 'react';
import styled from 'styled-components/macro';

const Message = ({ text, icon }) => {
	return (
		<div
			css={`
				max-width: 50rem;
				margin: 0 auto;
				padding: 5rem 4rem;
				display: flex;
			`}
		>
			{icon}
			<p
				css={`
					margin-left: 1.5rem;
					font-size: 1.8rem;
					line-height: 1.5;
					font-weight: 600;
				`}
			>
				{text}
			</p>
		</div>
	);
};

export default Message;
