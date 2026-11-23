# AHS Engineering & Operations Handbook

The project overview, simulator demo, and English handbook index are prepared for a static GitHub Pages project site. The handbook index is at `handbook.html`.

## GitHub Pages setup

1. Push this site to the `main` branch of a public GitHub repository.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select **main** and **/(root)**, then click **Save**. The root `.nojekyll` file tells GitHub Pages to serve the static files directly.
4. Once the Pages deployment succeeds, open the project URL shown in **Settings → Pages**. The default project URL format is `https://<owner>.github.io/<repository-name>/`.

Keep local assets and page links relative to the HTML file so they resolve under `/<repository-name>/`. The supplied index includes chapter, appendix, and lab entries whose destination files were unavailable. The handbook page lists the chapter titles.

[GitHub Pages publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Simulator recording

Replace `assets/videos/simulator-preview.mp4` to update the recording. If the filename changes, update the video element's `data-src` in `index.html` with the new relative path. Clear `data-src` to omit the player. The player appears when the browser can read the recording's metadata.

The supplied recording was encoded as 30 fps H.264 with browser-compatible pixel format and fast-start metadata. The optimized MP4 is approximately 13 MiB. If a future replacement is too large, re-encode at a lower bitrate or resolution, or publish a shorter excerpt on the same Pages site.

```sh
ffmpeg -i input.mov -vf fps=30 -c:v libx264 -preset fast -crf 21 \
  -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart \
  assets/videos/simulator-preview.mp4
```

## Sponsorship

Use **Sponsor on GitHub** in the site's Sponsorship section to open the project's
GitHub Sponsors profile. The repository's Sponsor button is configured in
`.github/FUNDING.yml`.

## License

The website implementation uses the [MIT License](LICENSE). The handbook
content, simulator screenshot, and demo recording use
[CC BY 4.0](CONTENT-LICENSE.md).
