const API_URL = "https://tu-backend-en-render.onrender.com";

async function getReviews(producto = "producto1") {
  const res = await fetch(`${API_URL}/reviews/${producto}`);
  const data = await res.json();
  document.getElementById("reviews").innerHTML = data
    .map(r => `<p><b>${r.producto}</b>: ${r.texto_reseña} (${r.sentimiento})</p>`)
    .join("");
}

getReviews();
