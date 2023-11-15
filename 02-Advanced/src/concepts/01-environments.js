/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */


export const environmentsComponent = (elementHtml) => {

  //! para consultar las variables de entorno en vite especificamente
  console.log(import.meta.env)


  const html = `
    Modo desarrolllo (DEV): ${import.meta.env.DEV} <br/>
    Modo produccion (PROD): ${import.meta.env.PROD} <br/> 
    <br/>
    Key : ${import.meta.env.VITE_API_KEY} <br/>
    URL: ${import.meta.env.VITE_BASE_URL}
  `;

  elementHtml.innerHTML = html;

}
