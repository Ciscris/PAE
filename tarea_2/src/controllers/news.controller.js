const axios = require("axios");

module.exports = {
    search: async(req,res)=>{
         const url = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${process.env.KEY}`;
         axios.get(url).then(res)
    }
}
