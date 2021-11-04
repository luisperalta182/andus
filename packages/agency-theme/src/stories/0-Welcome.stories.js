import Rect from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome, welcome } from '@storybook/react/demo';


export default{
    title: 'Welcome',
    component: Welcome,
}


export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
    name: 'to Storybook',
};