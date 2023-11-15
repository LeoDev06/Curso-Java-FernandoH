import { BreackingBadApp } from './src/breackingBad/breackingBad-app';
import './style.css'
document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="app-title"></h1>
    <div class="card">

    </div>
  </div>
`;

const elementHTML = document.querySelector('.card');
BreackingBadApp(elementHTML);