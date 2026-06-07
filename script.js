// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Botones de "Copiar" en la sección de contacto
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const value = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {
      // Fallback para navegadores antiguos o file:// sin permisos
      const tmp = document.createElement("textarea");
      tmp.value = value;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
    }
    const original = btn.textContent;
    btn.textContent = "¡Copiado!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1500);
  });
});

// Si la foto de perfil no existe, muestra un marcador en su lugar
const photo = document.querySelector(".about-photo img");
if (photo) {
  photo.addEventListener("error", () => {
    const ph = document.createElement("div");
    ph.textContent = "Agrega tu foto en assets/profile.jpg";
    ph.style.cssText =
      "aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;" +
      "text-align:center;padding:24px;color:#6f6d68;font-family:Inter,sans-serif;" +
      "font-size:.85rem;border:1px dashed #3a3a3a;border-radius:12px;background:#121212;";
    photo.replaceWith(ph);
  });
}
