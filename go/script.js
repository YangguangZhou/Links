let names = localStorage.getItem('names');
let urls = localStorage.getItem('urls');
let lastUpdate = localStorage.getItem('lastUpdate');
let index = null;

window.onload = function () {
  window.setTimeout(url, 0);
};

function url() {
  if (names && urls && lastUpdate && Date.now() - lastUpdate < 24 * 60 * 60 * 1000) {
    names = JSON.parse(names);
    urls = JSON.parse(urls);
    console.log("Loaded from cache");
  } else {
    fetch('../member.md')
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n');
        names = [];
        urls = [];
        for (let i = 4; i < lines.length; i++) {
          if (lines[i] === '') break;
          const cells = lines[i].split('|');
          names.push(cells[2].trim());
          urls.push(cells[3].trim());
        }
        localStorage.setItem('names', JSON.stringify(names));
        localStorage.setItem('urls', JSON.stringify(urls));
        localStorage.setItem('lastUpdate', Date.now());
      });
  }
  index = Math.floor(Math.random() * urls.length);
  if (document.referrer) {
    const origin = new URL(document.referrer).origin;
    console.log("Origin:" + origin);
    if (urls[index] == origin) {
      while (urls[index] == origin) {
        index = Math.floor(Math.random() * urls.length);
      }
    }
  }
  console.log(index + ":" + urls[index]);
  document.getElementById("WebsiteName").innerHTML = names[index];
  document.getElementById("WebsiteUrl").innerHTML = urls[index];
  document.getElementById("visitors").src = "https://visitor-badge.laobi.icu/badge?page_id=links-" + urls[index];
  window.setTimeout(links, 3000);
}

function links() {
  urls = urls
    .filter((url) => url)
    .map((url) => url);
  window.location = urls[index];
}