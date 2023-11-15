import { asyncFunctionGeneratorComponent } from "./src/concepts/14-asyncfunctionGenerator";

document.querySelector('#app').innerHTML = `

  <div>
    <h1>VARIABLES DE ENTORNO</h1>
    <div class="card">
    
    </div>
  </div>
  
`;

const elementHTML = document.querySelector('.card');

asyncFunctionGeneratorComponent(elementHTML);