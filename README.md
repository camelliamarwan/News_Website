# Newsround The World
Building News Website Using HTML, CSS and JavaScript
## Descripstion
- This is a dynamic and comprehensive news website that displays the latest breaking news and headlines, top trending topics and most relevant stories and articles of different categories including health, finance, technology, sports and entertainment.
- Our goal is to provide accurate, timely and engaging news to our diverse audience in order for them to stay informed and keeping up with the latest and most recent news.
- Quick and easy search for your desired topics and navigation through multiple choices of different and various headlines and articles.
- Sorting feature to check out the most popular and talked about events, news and stories, also viewing the very recent and up-to-date news.
- Newsround the world is your go-to destination and trusted source for staying ahead and aware of the news curve.
## Built With
[![JavaScript](https://img.shields.io/badge/JavaScript-%20-yellow)](https://developer.mozilla.org/docs/Web/JavaScript)

[![HTML](https://img.shields.io/badge/HTML-%20-red)](https://developer.mozilla.org/docs/Web/HTML)

[![CSS](https://img.shields.io/badge/CSS-%20-blue)](https://developer.mozilla.org/docs/Web/CSS)

## Installation
1. Get a free API Key at https://newsapi.org/
2. Clone the repository
 ```sh
   git clone https://github.com/camelliamarwan/News_Website.git
 ```
3.  Enter your API in `index.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
## Usage
#### 1. Configuration
Open the `index.js` file in the project root directory and update the following:
 ```js
const API_KEY = "YOUR_API_KEY";
const url = "https://newsapi.org/v2/everything?q=";
const query = "example"; 
 ```
- Replace 'YOUR_API_KEY' with your actual API key obtained from the news service provider.
- Modify the 'example' value in query to specify the desired news.
#### 2. Features and Functions
- Browse News: Explore the latest news articles from various categories such as politics, technology, entertainment, sports, and more. Use the navigation menu or search functionality to find specific news items.
- Read Full Article: Click on a news article to read the full content. The website provides an optimized reading experience with a clean and user-friendly interface.
- Sort By: Find out about the lates news by clicking on "Date Published" and the most popular topics by clicking on "Trending".
#### 3. Code Snippets
Retrieve and display news articles.
 ```js
   // fetch the news of your country
   window.addEventListener('load', () => fetchNews("YOUR_COUNTRY"));


   // Get and Display the latest news articles
   articles.forEach(article => {
      if(!article.urlToImage) return;
      const cardClone = newsCardTemplate.content.cloneNode(true);
      fillDataInCard(cardClone, article);
      cardsContainer.appendChild(cardClone);
    })
}

   function fillDataInCard(cardClone, article) {
     const newsImg = cardClone.querySelector("#news-img");
     const newsTitle = cardClone.querySelector("#news-title");
     const newsSource = cardClone.querySelector("#news-source");
     const newsDesc = cardClone.querySelector("#news-desc");
 ```
## Acknowledgments
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [apinews.org](https://www.apinews.org)
* [Using only HTML, CSS and Javascript | News Website Project](https://youtu.be/-FldHnejaA4)
## Contact
Camellia Marwan - https://github.com/camelliamarwan

Project Link - https://github.com/camelliamarwan/News_Website.git
