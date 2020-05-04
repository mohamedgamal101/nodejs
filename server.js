//core module
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/lists":
      res.statusCode = 200;
      const list = fs.readFileSync(
        "./lists.json",
        { encoding: "utf8" } || "[]"
      );
      const myNote = JSON.parse(list);
      const mylistpage = `
      <!DOCTYPE html>
      <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    ${myNote.map(lists => `<h3>${lists.title}<h3/>`)}
    <img src="/images/logo.png" alt="ninga ph">
   
     <a href="/Nature">go to nature gallery</a> 
     <a href="/Quotes">go to Quotes gallery</a>
    </body>
    </html>
      `;
      res.setHeader("Content-Type", "text/html");
      res.end(mylistpage);

      break;
    case "/Nature":
      res.statusCode = 200;

      const natureHtmlPage = `
        <!DOCTYPE html>
        <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      </head>
      <body>

      <img src="/images/Nature/2-nature.jpg" alt="nature1 ph">
      <img src="/images/Nature/foresttb-l.jpg" alt="nature2 ph">
     
       
      </body>
      </html>
        `;
      res.setHeader("Content-Type", "text/html");
      res.end(natureHtmlPage);

      break;
    case "/Quotes":
      res.statusCode = 200;

      const quotesHtmlPage = `
          <!DOCTYPE html>
          <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
     
        <img src="/images/Quotes/Linus.jpg" alt="Quotes1 ph">
        <img src="/images/Quotes/Thinktwice.jpg" alt="Quotes1 ph">
        <img src="/images/Quotes/gemy.jpg" alt="my photo">
        
         
        </body>
        </html>
          `;
      res.setHeader("Content-Type", "text/html");
      res.end(quotesHtmlPage);

      break;
    case "/images/logo.png":
      res.statusCode = 200;
      const gallery = fs.readFileSync("./images/logo.png");
      res.setHeader("Content-Type", "image/png");
      res.end(gallery);

      break;
    //////////////////nature gallery/////////////////////////
    case "/images/Nature/2-nature.jpg":
      res.statusCode = 200;
      const Nature1 = fs.readFileSync("./images/Nature/2-nature.jpg");
      res.setHeader("Content-Type", "image/jpeg");
      res.end(Nature1);

      break;
    case "/images/Nature/foresttb-l.jpg":
      res.statusCode = 200;
      const Nature2 = fs.readFileSync("./images/Nature/foresttb-l.jpg");
      res.setHeader("Content-Type", "image/jpeg");
      res.end(Nature2);

      break;
    /////////////////quotes gallery/////////////////////////
    case "/images/Quotes/Linus.jpg":
      res.statusCode = 200;
      const Quote1 = fs.readFileSync("./images/Quotes/Linus.jpg");
      res.setHeader("Content-Type", "image/jpeg");
      res.end(Quote1);

      break;
    case "/images/Quotes/Thinktwice.jpg":
      res.statusCode = 200;
      const Quote2 = fs.readFileSync("./images/Quotes/Thinktwice.jpg");
      res.setHeader("Content-Type", "image/jpeg");
      res.end(Quote2);

      break;
    case "/images/Quotes/gemy.jpg":
      res.statusCode = 200;
      const gemy = fs.readFileSync("./images/Quotes/gemy.jpg");
      res.setHeader("Content-Type", "image/jpeg");
      res.end(gemy);

      break;

    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1> 404: page not found</h1>");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
