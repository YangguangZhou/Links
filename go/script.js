let names = [];
let urls = [];
let index = null;
function url() {
  index = Math.floor(Math.random() * urls.length);
  document.getElementById("WebsiteName").innerHTML = names[index];
  document.getElementById("WebsiteUrl").innerHTML = urls[index];
  document.getElementById("visitors").src = "https://visitor-badge.laobi.icu/badge?page_id=links-" + urls[index];
  console(index + ":" + urls[index]);
}

function links() {
  urls = urls
    .filter((url) => url)
    .map((url) => url + "?utm_source=links");
  if (document.referrer) {
    const origin = new URL(document.referrer).origin;
    if (urls.includes(origin)) {
      urls.splice(urls.indexOf(origin), 1);
    }
  }
  window.open(urls[index], '_blank');
}
fetch('../member.md')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    for (let i = 4; i < lines.length; i++) {
      if (lines[i] === '') break;
      const cells = lines[i].split('|');
      names.push(cells[2].trim());
      urls.push(cells[3].trim());
    }
    window.setTimeout(url, 0);
    window.setTimeout(links, 3000);
  });