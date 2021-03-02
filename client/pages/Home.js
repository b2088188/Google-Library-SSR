import React from 'react';
import Message from '../components/Message';
import { InsertEmoticon } from '@material-ui/icons';

const Home = () => {
	return <Message icon={InsertEmoticon} text='Please begin your search journey~' />;
};

export default {
	component: Home
};
