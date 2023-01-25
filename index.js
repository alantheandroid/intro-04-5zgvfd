import { flights } from './data';
import './style.css';

import pageHeader from './sections/pageHeader';
import pageBody from './sections/pageBody';

const appDiv = document.getElementById('app');

const container = document.createElement('div');
container.className = 'container';
appDiv.appendChild(container);

// add pageHeader
container.appendChild(pageHeader());

// add pageHeader
container.appendChild(pageBody());
