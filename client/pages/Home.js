import React from 'react';
import Message from '../components/Message';
import { InsertEmoticon } from '@material-ui/icons';

const Home = () => {
	return (
		<div>
			{/*<Message icon={InsertEmoticon} text='Please begin your search journey~' />*/}
			<p>Please begin your search journey~</p>
		</div>
	);
};

export default {
	component: Home
};
