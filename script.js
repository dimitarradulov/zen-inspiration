'use strict';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');

const getQuote = async () => {
  try {
    const quotable = await fetch('https://api.quotable.io/random');

    if (!quotable.ok) throw new Error('Problem with loading the quote.. 😢');

    const quoteRes = await quotable.json();

    quote.textContent = `"${quoteRes.content}"`;
    author.textContent = quoteRes.author;
  } catch (err) {
    console.error(err.message);
    quote.textContent = err.message;
  }
};

getQuote();

btn.addEventListener('click', getQuote);
