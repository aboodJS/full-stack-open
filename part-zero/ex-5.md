```mermaid
sequenceDiagram
  participant browser
  participant server
  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  server -->> browser: the page itself
  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  server -->> browser: the CSS file
  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  server -->> browser: the js file
  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  server -->> browser: the json file
```