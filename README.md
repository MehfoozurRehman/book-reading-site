# Boook

A small React site that lists books, searches them by title or author, and plays an audio excerpt for each one.

**Status:** In progress. The list, search and detail pages work on local data, but the book text and audio are placeholders, the About, Contact and Donate links are not built, and nothing in the repo shows the Firebase Hosting setup is live.

## The problem

A catalogue for reading books. The home page shows a searchable list of books, and each book has a detail view with a description and an audio player. The data is local and hand-written.

## What it does

- Lists books from `src/data/books.js` with cover image, author, publish date and intro (`src/screens/HomeScreen.js`).
- Searches by title or author using the `s` query parameter, both from the search box and from the URL.
- Opens a book detail page at `/book?show=<value>`, which shows the description text and a playable audio excerpt.
- Plays each excerpt with `react-h5-audio-player`.
- Shows a header with the site logo and navigation.

## How it's built

- Create React App (react-scripts 4.0.3) with React 17 and react-router-dom 5 (`Switch` and `Route`).
- Book data is kept as plain JavaScript modules (`src/data/book.js` and `src/data/books.js`). There is no backend.
- Search and detail state are read from `window.location` on render, so each view can be linked directly by URL.
- Firebase Hosting is configured in `firebase.json`: it serves `build/` and rewrites every route to `index.html` so client-side routes work.
- Font Awesome font files are bundled in `public/fonts/`.

## Running it locally

The repo includes a `pnpm-lock.yaml`, so use pnpm:

```bash
pnpm install
pnpm start
```

For a production build, run `pnpm build`. Tests run with `pnpm test`, but the repo has no test files yet.

## What's left

- The About and Contact header links point to routes that do not exist.
- The Donate button has no link or handler.
- Book content is placeholder: lorem ipsum text, a `url` value of `"ss"` in `books.js`, and a date of `"20/19/2009"`, which is not a valid date.
- The detail page matches the `show` query against the book title, so a book's detail view depends on the title text and the placeholder `url` values.
- No tests, and no backend.
