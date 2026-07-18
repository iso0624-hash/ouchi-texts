(() => {
  const names = [
    "01-main-window.png", "01-main-window.jpg", "01-main-window.webp",
    "02-operation-screen.png", "02-operation-screen.jpg", "02-operation-screen.webp",
    "02-input-screen.png", "02-input-screen.jpg", "02-input-screen.webp",
    "03-input-screen.png", "03-input-screen.jpg", "03-input-screen.webp",
    "03-preview-screen.png", "03-preview-screen.jpg", "03-preview-screen.webp",
    "04-preview-screen.png", "04-preview-screen.jpg", "04-preview-screen.webp",
    "04-result-screen.png", "04-result-screen.jpg", "04-result-screen.webp",
    "05-result-screen.png", "05-result-screen.jpg", "05-result-screen.webp"
  ];

  const label = (name) => name.replace(/^[0-9]+-/, "").replace(/\.[^.]+$/, "").replace(/-/g, " ");
  const check = async (url) => {
    try {
      const response = await fetch(url, { method: "HEAD", cache: "no-store" });
      return response.ok && (response.headers.get("content-type") || "").startsWith("image/");
    } catch (_) {
      return false;
    }
  };

  document.querySelectorAll("[data-screenshot-slug]").forEach(async (gallery) => {
    const slug = gallery.dataset.screenshotSlug;
    const base = `../../assets/apps/${slug}/screenshots/`;
    const found = [];
    for (const name of names) {
      const url = base + name;
      if (await check(url)) found.push({ name, url });
    }
    gallery.replaceChildren();
    if (!found.length) {
      const note = document.createElement("p");
      note.className = "muted";
      note.textContent = "実スクリーンショットは未配置です。";
      gallery.append(note);
      return;
    }
    const grid = document.createElement("div");
    grid.className = "screenshot-grid";
    found.forEach(({ name, url }) => {
      const figure = document.createElement("figure");
      figure.className = "app-screenshot";
      const link = document.createElement("a");
      link.href = url;
      const image = document.createElement("img");
      image.src = url;
      image.alt = `${slug} ${label(name)}`;
      image.loading = "lazy";
      link.append(image);
      const caption = document.createElement("figcaption");
      caption.textContent = label(name);
      figure.append(link, caption);
      grid.append(figure);
    });
    gallery.append(grid);
  });
})();
