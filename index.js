const API_KEY = "8b89d8e3ab724b148431775971f53720";
const url = "https://newsapi.org/v2/everything?q=";
const query = 'example'; 


const apiUrl = `${url}?query=${query}&apiKey=${API_KEY}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  });

window.addEventListener('load', () => fetchNews("Egypt"));

function reload() {
    window.location.reload();
}


async function fetchNews(query) {
    try {
      const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      bindData(data.articles);
    } catch (error) {
      console.error(error);
      
    }
  }

function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = "";

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

    let imgUrl = article.urlToImage;
    let alt =
      "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg";
    newsImg.src = imgUrl;
    newsImg.onerror = function () {
      newsImg.src = alt;
    };
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Africa/Cairo",
    });
    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

if (searchButton && searchText) {
  searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
  });
}


const sortSelect = document.getElementById('sort-select');
if (sortSelect) {
  sortSelect.addEventListener('change', () => {
    const selectedOption = sortSelect.value;
    if (selectedOption === 'default') {
      reload();
    } else if (selectedOption === 'date') {
      fetchNews(query, 'publishedAt');
    } else if (selectedOption === 'trending') {
      fetchNews(query, 'trending');
    }
  });
}

async function fetchNews(query, sortBy) {
  try {
    let apiUrl = `${url}${query}&apiKey=${API_KEY}`;
    if (sortBy === 'trending') {
      apiUrl += '&sortBy=popularity';
    } else if (sortBy) {
      apiUrl += `&sortBy=${sortBy}`;
    }

    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    const articles = data.articles;

    if (sortBy === 'trending') {
      articles.sort((a, b) => {
        const sharesA = a.social_shares_count || 0;
        const sharesB = b.social_shares_count || 0;
        return sharesB - sharesA;
      });
    }

    bindData(articles);
  } catch (error) {
    console.error(error);
  }
}