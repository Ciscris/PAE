const axios = require("axios");

module.exports = {
    search: async(req,res)=>{
        const searchInput=  req.query.query;
        if(!searchInput)
            return res.render('news')
        const url = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${process.env.KEY}`;
        const response = await axios.get(url)
        const news = response.data.articles;
        return res.render('news', {searchInput,news})
    }
}
