//code by Jerry Zhou(jerryz.com.cn)
let i = null;
const https = "https://";
const reg = new RegExp("^" + https);
const suffix = "/?utm_source=links";
const fs = require('fs');
const markdownTable = require('markdown-table');
const data = fs.readFileSync('../member.md', 'utf8');
const table = markdownTable(data);
const names = table.map(row => row[1]);
const urls = table.map(row => row[2]);

function url() {
  i = Math.floor(Math.random() * urls.length);
  document.getElementById("WebsiteName").innerHTML = names[i];
  document.getElementById("WebsiteUrl").innerHTML = urls[i];
  document.getElementById("visitors").src = "https://visitor-badge.laobi.icu/badge?page_id=links-" + urls[i];
}

function links() {
  urls = urls
    .filter((url) => url)
    .map((url) => {
      if (regHttps.test(url) || regHttp.test(url)) {
        return url;
      } else {
        return https + url + suffix;
      }
    });
  if (document.referrer) {
    const origin = new URL(document.referrer).origin;
    if (urls.includes(origin)) {
      urls.splice(urls.indexOf(origin), 1);
    }
  }
  window.location = urls[i];
}
