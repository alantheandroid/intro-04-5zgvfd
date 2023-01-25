import { flights } from './data';
import './style.css';

import pageHeader from "./sections/pageHeader"

const appDiv = document.getElementById('app');

const container = document.createElement("div");
container.className = "container";
appDiv.appendChild(container);

// add pageHeader
container.appendChild(pageHeader());