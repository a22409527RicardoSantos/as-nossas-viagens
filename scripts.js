



const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

const images = Array.from(document.querySelectorAll(".gallery img"));

function openModal(src, alt){
  modalImg.src = src;
  modalImg.alt = alt || "";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  document.body.style.overflow = "";
}

images.forEach(img => {
  img.addEventListener("click", () => openModal(img.src, img.alt));
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// contador de fotos no topo
const count = document.getElementById("count");
if (count) count.textContent = `${images.length} fotos`
