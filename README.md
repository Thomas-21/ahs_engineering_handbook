# AHS Engineering & Operations Handbook

This repository hosts the public site for the Autonomous Haulage Systems Handbook. The first release includes the first two chapters of each of the 23 volumes. Readers can browse 46 chapters, search the full chapter index, try the haul-cycle calculator, and watch the simulator walkthrough.

## Site files

- `index.html` is the landing page and simulator walkthrough.
- `handbook.html` is the chapter index. The suggested routes open volumes within the index.
- `vol-01/` through `vol-23/` contain the published chapters.
- `appendix/` contains the glossary and reference mine.
- `assets/` contains the shared stylesheet, handbook search, simulator image, and MP4 recording.

## Preview locally

Run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository root and open `http://127.0.0.1:8000/`. Check that a route opens its volume, that search works by chapter ID and topic, and that the video plays.

## GitHub Pages

The site is prepared for branch deployment from `main` and `/(root)`. In the repository, open **Settings → Pages** to verify the publishing source and find the site URL. Keep internal links relative so they work under the repository path. The root `.nojekyll` file lets GitHub Pages serve the static files directly.

[GitHub Pages publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Simulator recording

Replace `assets/videos/simulator-preview.mp4` to update the video. If the filename changes, update both the video source and the MP4 link on the landing page. Encode the recording as an H.264 MP4 with fast-start metadata for browser playback.

## Sponsorship

The landing page links to GitHub Sponsors. The repository's Sponsor button is configured in `.github/FUNDING.yml`.
