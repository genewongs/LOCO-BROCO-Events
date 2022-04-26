const axios = require('axios');
const cheerio = require('cheerio');


function scrapeReverb(query){
  axios.get(`https://reverb.com/marketplace?query=${query}`)
    .then(res => {
      const $ = cheerio.load(res.data);

      $('.sortable-title').each((i, el) => {
        const listItem = $(el)
          .find('grid-card__price')
          .text()


        console.log(listItem);
      })
    })
    .catch(err => console.log(err));
}

scrapeReverb('dragonfly guitar');
