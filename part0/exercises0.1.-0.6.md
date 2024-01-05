## New note in Single page app diagram
```mermaid

sequenceDiagram

participant browser

participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

Note right of browser: The browser sends the new note to the server. This is a SPA so the browser doen't have send a new request for the HTML, CSS, and JS files.

```