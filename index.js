function copyToClipboard() {
  const textToCopy = document.querySelector("#text").innerText;

  navigator.permissions.query({
    name: "clipboard-write",
    allowWithoutGesture: false,
  });

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Success
        alert("Text copied to clipboard: " + textToCopy);
      })
      .catch((err) => {
        console.error("Unable to copy text: ", err);
      });
  }
}

document
  .querySelector("#copy-text-btn")
  .addEventListener("click", copyToClipboard);
