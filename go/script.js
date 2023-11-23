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
      document.getElementById("WebsiteName").innerHTML = names[i];
      document.getElementById("WebsiteUrl").innerHTML = urls[i];
      document.getElementById("visitors").src = "https://visitor-badge.laobi.icu/badge?page_id=links-" + urls[i];
      window.setTimeout(links, 3000);
    }

    function links() {
      if (document.referrer) {
        const origin = new URL(document.referrer).origin;
        if (urls.includes(origin)) {
          urls.splice(urls.indexOf(origin), 1);
        }
      }
      window.location = urls[index];
    }
    window.setTimeout(url, 0);
  });