// Mighty Markdown website. Progressive enhancement only: every page works without JavaScript.
(function () {
  "use strict";
  var modes = {
    read: {
      alt: "Mighty Markdown in Read mode: a rendered document in one calm column, with the heading outline on the left and the minimap on the right",
      caption: "Read: one comfortable column, with your outline and minimap close at hand."
    },
    edit: {
      alt: "Mighty Markdown in Edit mode: the Markdown source with syntax highlighting, the heading outline and the minimap",
      caption: "Edit: work directly in Markdown, with undo, redo and find."
    },
    split: {
      alt: "Mighty Markdown in Split mode: Markdown source beside the rendered preview, the heading outline on the left and the minimap on the right",
      caption: "Split: source and preview side by side. Both panes follow the same part of your document."
    }
  };
  var buttons = document.querySelectorAll("[data-mode]");
  var img = document.getElementById("shot");
  var webp = document.getElementById("shot-webp");
  var caption = document.getElementById("shot-caption");
  var frame = document.getElementById("frame");
  if (!img || !buttons.length) return;

  // Warm the cache so switching is instant.
  Object.keys(modes).forEach(function (mode) { new Image().src = "assets/shots/" + mode + ".webp"; });

  function show(mode) {
    var data = modes[mode];
    if (!data) return;
    frame.classList.add("swap");
    window.setTimeout(function () {
      webp.srcset = "assets/shots/" + mode + ".webp";
      img.src = "assets/shots/" + mode + ".jpg";
      img.alt = data.alt;
      caption.textContent = data.caption;
      frame.classList.remove("swap");
    }, 120);
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-mode") === mode)); });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () { show(button.getAttribute("data-mode")); });
  });
})();
