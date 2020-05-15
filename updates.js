const containermain = document.getElementById('container-main')

const fetchNews = async ()=>{
    const fetchNews = await fetch('https://newsapi.org/v2/top-headlines?country=in&from=2020-05-14&sortBy=popularity&apiKey=6f1082065f47444fb604f6801b3b7ffa&category=technology')
    const res = await fetchNews.json();
    createSingleNews(res.articles)
} 

fetchNews();

function createSingleNews(articles){
    console.log(articles)

    articles.forEach((article) => {
        if(article.description != null){
            const singlenews = document.createElement('div')
            const authortext = article.author ? article.author : "Not available" 
            singlenews.classList.add("single-news")
            singlenews.innerHTML = `<h3><a target="_blank" href='${article.url}'>${article.title}</a></h3><div class='news-details'><p>Source: ${article.source.name}</p><p>Author: ${authortext}</p></div><p>${article.description}</p>`
            containermain.appendChild(singlenews)
        }       
    });
     
}


