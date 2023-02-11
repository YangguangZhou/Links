//code by Jerry Zhou(jerryz.com.cn)
let urls = [];
let names = [];
let i = null;
const https = "https://";
const reg = new RegExp("^" + https);
const empty = null;
const suffix = "/?utm_source=links";

function url() {
  names[0] = "Links-GitHub";
  urls[0] = "github.com/YangguangZhou/Links"
  names[1] = "Jerry Zhou的个人博客";
  urls[1] = "blog.jerryz.com.cn";
  names[2] = "Jerry Zhou的个人主页";
  urls[2] = "jerryz.com.cn";

  i = Math.floor(Math.random() * urls.length);

  document.getElementById("WebsiteName").innerHTML = names[i];
  document.getElementById("WebsiteUrl").innerHTML = urls[i];
  document.getElementById("visitors").src = "https://visitor-badge.laobi.icu/badge?page_id=links-" + urls[i];
}

function links() {
  // 去除 null ，以及拼接 https://
  urls = urls
    .filter((url) => url)
    .map((url) => (reg.test(url) ? url : https + url + suffix));

  if (document.referrer) {
    const origin = new URL(document.referrer).origin;
    if (urls.includes(origin)) {
      urls.splice(urls.indexOf(origin), 1);
    }
  }
  window.location = urls[i];
}
