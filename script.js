const url = "https://www.freetogame.com/api/games?platform=pc";
const element1 = document.querySelector(".Game");
const element2 = document.querySelector(".game-description");

element1.innerHTML = '';
element2.innerHTML = '';

async function fetchinfo() {
    const response = await fetch(url);
    const data = await response.json();
  
    for (const item of data) {
      const image = item.thumbnail;
      const title = item.title;
      const genre = item.genre;
      const description = item.short_description;
      
      element1.innerHTML += '<img src= + ${image} + ></img>'
      element2.innerHTML += "<h1>" + title + "</h1>"
      element2.innerHTML += "<h3>Genre: "  + genre + "</h3>"
      element2.innerHTML += "<p1>Description: <br /> " + description + "</p1>"

    }
}
  fetchinfo()