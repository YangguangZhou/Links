//code by Jerry Zhou(jerryz.com.cn)
let i = null;
const https = "https://";
const http = "https://";
const suffix = "/?utm_source=links";
fetch('../member.md')
  .then(response => response.text())
  .then(data => {
    const table = marked(data);
  });
const names = table.map(row => row[1]);
const urls = table.map(row => row[2]);

function url() {
  i = Math.floor(Math.random() * urls.length);
  document.getElementById("WebsiteName").innerHTML = names[i];
  document.getElementById("WebsiteUrl").innerHTML = urls[i];
  document.getElementById("visitors").src = "https://visitor-badge.laobi.icu/badge?page_id=links-" + urls[i];
  window.setTimeout(links, 3000);
}

function links() {
  urls = urls
    .filter((url) => url)
    .map((url) => {
      if (regHttps.test(url)) {
        return https + url + suffix;
      } else if (regHttp.test(url)) {
        return http + url + suffix;
      } else {
        console.log("URL格式错误：" + url);
        return;
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
