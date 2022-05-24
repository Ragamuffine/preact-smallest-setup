
import { h, render } from 'preact';

const app = h('h1', null, 'Hello, World!');

window.onload = function() {
    render(app, document.getElementById('root'));
};
