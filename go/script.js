fetch('../member.md')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    let names = [];
    let urls = [];
    let index = null;
    for (let i = 4; i < lines.length; i++) {
      if (lines[i] === '') break;
      const cells = lines[i].split('|');
      names.push(cells[2].trim());
      urls.push(cells[3].trim());
    }

    function url() {
      index = Math.floor(Math.random() * urls.length);
      document.getElementById("WebsiteName").innerHTML = names[index];
      document.getElementById("WebsiteUrl").innerHTML = urls[index];
      document.getElementById("visitors").src = "https://visitor-badge.laobi.icu/badge?page_id=links-" + urls[index];
      window.setTimeout(links, 3000);
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
      console(index + ":" + urls[index]);
      window.location = urls[index];
    }
    window.setTimeout(url, 0);
  });