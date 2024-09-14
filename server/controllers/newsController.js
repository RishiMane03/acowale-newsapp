const axios = require('axios');


const getAllNews = async (req,res)=>{
    const apiKey = process.env.GNEWS_API_KEY;
    const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apiKey;

    try {
        const response = await axios.get(url)
        console.log(response.data);

        res.send({
            status: 'success',
            data: response.data
        })
        
    } catch (error) {
        res.send({
            status: 'error',
            message: error
        })
    }

}

const getNewsCategory = async (req, res) => {
    const apiKey = process.env.GNEWS_API_KEY;
    const { category } = req.body
    const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apiKey;

    try {
        const response = await axios.get(url)
        console.log(response.data);

        res.send({
            status: 'success',
            data: response.data
        })
        
    } catch (error) {
        res.send({
            status: 'error',
            message: error
        })
    }
}

module.exports = {
    getAllNews,
    getNewsCategory
}