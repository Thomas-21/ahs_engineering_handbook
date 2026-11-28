const search = document.getElementById("chapter-search");
const query = document.getElementById("q");
const status = document.getElementById("search-status");
const volumes = Array.from(document.querySelectorAll(".vol"), volume => ({
  element: volume,
  title: volume.querySelector("summary").textContent.toLowerCase(),
  rows: Array.from(volume.querySelectorAll(".ch"), row => ({
    element: row,
    text: Array.from(row.cells, cell => cell.textContent).join(" ").toLowerCase(),
  })),
}));

const parts = Array.from(document.querySelectorAll(".part"), heading => {
  const members = [];
  for (let next = heading.nextElementSibling; next?.matches(".vol"); next = next.nextElementSibling) {
    members.push(next);
  }
  return { heading, members };
});

let openBeforeSearch;

function filterChapters() {
  const term = query.value.trim().toLowerCase();
  if (term && !openBeforeSearch) {
    openBeforeSearch = volumes.map(({ element }) => element.open);
  }

  let total = 0;
  volumes.forEach(({ element, title, rows }, index) => {
    let matches = 0;
    for (const row of rows) {
      const visible = title.includes(term) || row.text.includes(term);
      row.element.hidden = !visible;
      if (visible) matches += 1;
    }
    element.hidden = matches === 0;
    if (term && matches) element.open = true;
    if (!term && openBeforeSearch) element.open = openBeforeSearch[index];
    total += matches;
  });

  for (const { heading, members } of parts) {
    heading.hidden = members.every(volume => volume.hidden);
  }

  if (!term) openBeforeSearch = undefined;
  status.textContent = total
    ? `${total} ${total === 1 ? "chapter" : "chapters"}`
    : "No matching chapters.";
}

function openLinkedVolume() {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.matches(".vol")) {
    if (query.value) {
      query.value = "";
      filterChapters();
    }
    target.open = true;
    target.scrollIntoView();
  }
}

search.hidden = false;
query.addEventListener("input", filterChapters);
window.addEventListener("hashchange", openLinkedVolume);
filterChapters();
openLinkedVolume();
