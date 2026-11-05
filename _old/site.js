const image = document.querySelector('#workspace-image');
const caption = document.querySelector('#workspace-caption');
const views = {
  read: ['read.png', 'Mighty Markdown in Read mode, with a rendered document, a heading outline, and a minimap.', 'A comfortable reading view, with your outline and minimap close at hand.'],
  split: ['split.png', 'Mighty Markdown in Split mode, with Markdown source beside its rendered preview, a heading outline on the left, and a minimap on the right.', 'Source and preview, side by side. Both panes follow the same part of your document.']
};
for (const button of document.querySelectorAll('[data-view]')) {
  button.addEventListener('click', () => {
    const [src, alt, text] = views[button.dataset.view];
    image.src = src;
    image.alt = alt;
    caption.textContent = text;
    for (const other of document.querySelectorAll('[data-view]')) other.setAttribute('aria-pressed', String(other === button));
  });
}
