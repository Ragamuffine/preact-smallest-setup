
import { h, render } from 'preact';

const app = <h1>Hello, World!</h1>

window.onload = function() {
    render(app, document.getElementById('root'));
};
