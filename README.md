# Hacker News Reader

## Demo

#### Environment

- nodejs >= v8.11.x
- yarn >= v1.9
- npm >= v5
- Google Chrome with latest version on MacOS
  - I only dev and test on it 😂

#### Setup

`yarn` or `npm install`

#### Play it!

`yarn demo` or `npm run demo` ... wait a moment and checkout it on http://localhost:3886

## Requirements

- ✓ Display a list of the latest Hacker News stories in descending order
- ✓ Each list item should show the title, author name, and posted time
- ✓ Display each Hacker News list item as soon as it has been fetched
- ✓ The resulting list will look like it is populating new items one-by-one
- ✓ Support infinite scrolling
- ✓ Support offline capability
  - Only enable on demo(production) mode due to Service Worker is not compatible with webpack-dev-server