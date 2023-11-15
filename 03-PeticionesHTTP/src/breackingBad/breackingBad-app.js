/**
 * api docs: https://programming-quotesapi.vercel.app/docs
 * quote information
 * @returns {Object} 
 */
const fetchQuotes = async() => {

  const url ="https://programming-quotesapi.vercel.app/api/random";
  const resp = await fetch(url);
  const {author, quote} = await resp.json();
  
  return {author, quote};
}

/**
 * Aplicacion principal
 * @param {HTMLDivElement} elementHTML 
 */
export const BreackingBadApp = (elementHTML) => {
  document.querySelector('#app-title').innerHTML = 'Quotes'
  elementHTML.innerHTML = `🥱 Loading...`;

  const quoteLabel = document.createElement('blockquote');
  const authorLabel = document.createElement('h3');
  const nextQuote = document.createElement('button');
  nextQuote.innerText = 'Next Quote';

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;

    elementHTML.replaceChildren( quoteLabel, authorLabel, nextQuote);
  }

  /* 
    !opción facil
    nextQuote.addEventListener('click', () => {
      window.location.reload();
    }) 
  */

  nextQuote.addEventListener('click', async() => {
    elementHTML.innerHTML = `🥱 Loading...`;
    const data = await fetchQuotes()
    renderQuote(data);
  })

  fetchQuotes()
  .then((data) => renderQuote(data));
}