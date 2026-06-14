const openBtn = document.getElementById("openmodal"); 
const closeBtn = document.getElementById("closemodal");
const modal = document.getElementById("modal");
const body = document.body; // Target the body element

// 1. Open the modal
openBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  modal.classList.add("open");
  body.classList.add("no-scroll"); // LOCK scroll when modal opens
});

// 2. Close the modal using the close button (X)
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  body.classList.remove("no-scroll"); // UNLOCK scroll
});

// 3. Close the modal if the user clicks anywhere on the dark background overlay
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    body.classList.remove("no-scroll"); // UNLOCK scroll
  }
});