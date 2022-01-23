import apiBenchmark from "api-benchmark"
import fs from "fs"

const services = {
  server1: "http://localhost:4000/",
};

const options = {
  minSamples: 100,
};

const routeWithoutCache = { route1: "user?email=Nathan@yesenia.net" };
const routeWithCache = { route1: "user/cached_user?email=Nathan@yesenia.net" };

apiBenchmark.measure(
  services,
  routeWithoutCache,
  options,
  function (err: any, results: any) {
    apiBenchmark.getHtml(results, function (error: any, html: any) {
      fs.writeFile("no-cache-results.html", html, function (err) {
        if (err) return console.log(err);
      });
    });
  }
);

apiBenchmark.measure(
  services,
  routeWithCache,
  options,
  function (err: any, results: any) {
    apiBenchmark.getHtml(results, function (error: any, html: any) {
      fs.writeFile("cache-results.html", html, function (err) {
        if (err) return console.log(err);
      });
    });
  }
);