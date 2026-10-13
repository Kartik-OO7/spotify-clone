# 🎧 Spotify Clone

A Spotify-style music landing page with a working demo player, built using plain **HTML, CSS and JavaScript** (no frameworks, no libraries).

🔗 **Live Demo:**
📦 **Repository:** https://github.com/Kartik-OO7/spotify-clone

> This is a learning project and is not affiliated with Spotify. There is no real audio and no backend.

<!-- Add a screenshot: upload screenshot.png to the repo and uncomment the line below -->
<!-- ![Spotify Clone Screenshot](screenshot.png) -->

## Features

- Responsive landing page with sticky navbar and hero section
- Popular playlists and trending songs shown as cards with gradient covers
- Hover effect with a green play button on every card
- Bottom player bar with play/pause, next/previous and a 30-second progress timer
- Pricing section (Free, Premium Individual, Premium Student)
- Footer with link columns
- Works on desktop and mobile (the player bar adjusts on small screens)

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, CSS variables)
- Vanilla JavaScript (ES6)
- Hosted on Vercel

## Project Structure

```
spotify-clone/
├── index.html   # Page structure
├── style.css    # All styling
├── script.js    # Cards rendering and player logic
└── README.md
```

## Getting Started

**Run locally**

```bash
git clone https://github.com/Kartik-OO7/spotify-clone.git
cd spotify-clone
```

Then either double-click `index.html`, or open the folder in VS Code and use **Open with Live Server** (Live Server extension).

## How It Works

- Playlists and songs are stored as arrays in `script.js` and rendered into cards with JavaScript.
- Clicking a card sets it as the current track and starts a 30-second demo progress bar.
- Play/pause, next and previous buttons control the same timer.

## Customize

- **Add songs:** edit the `songs` array in `script.js`, for example `["Song Name", "Artist"]`.
- **Add playlists:** edit the `playlists` array (name and emoji).
- **Change theme color:** update `--g` (Spotify green) in the CSS variables at the top of `style.css`.
- **Real audio:** add an `<audio>` element and set its `src` inside the `tryPlay()` function.

## Future Improvements

- Real audio playback using the `<audio>` tag or a music API
- Search bar and song filtering
- Volume control and clickable seek bar
- Liked songs saved in `localStorage`
- Login and user accounts with a backend (Firebase or Node.js)

## Author

**Kartik** — [GitHub](https://github.com/Kartik-OO7)

Made as a practice project while learning web development.
