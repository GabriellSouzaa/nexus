const Conversion = require('../models/conversionModel');
const axios = require('axios');

const convertCurrency = (req, res) => {
  const { crypto, amount } = req.body; 

  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=brl,usd`)
    .then(response => {
      const brl = response.data[crypto].brl;
      const usd = response.data[crypto].usd;

      const convertedBRL = brl * amount;
      const convertedUSD = usd * amount;

      Conversion.addConversion(req.userId, crypto, amount, convertedBRL, convertedUSD, (err) => {
        if (err) return res.status(500).json({ error: 'Erro ao salvar conversão' });
        res.status(200).json({ crypto,amount, convertedBRL, convertedUSD });
      });
    })
    .catch(() => res.status(500).json({ error: 'Erro ao buscar taxa de conversão' }));
};

const getUserConversions = (req, res) => {
  Conversion.getConversionsByUserId(req.userId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar conversões' });
    res.status(200).json(results);
  });
};

module.exports = { convertCurrency, getUserConversions };
