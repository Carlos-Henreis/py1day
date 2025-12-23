async function loadRecentCarousel() {
  try {
    if (window.location.pathname !== '/') {
      return;
    }
    const res = await fetch("search/search_index.json");
    const data = await res.json();
    const pages = getLatestQuestionLinks(data.docs)
    const recent = pages.slice(-5).reverse();

    const container = document.querySelector(".swiper-wrapper");
    if (!container) return;

    recent.forEach(doc => {
      const card = document.createElement("div");
      let title = doc.title.split("—")
      card.className = "swiper-slide";
      card.innerHTML = `
        <h4>${title[0].trim() || ""}</h4>
        <p>${(title[1].trim() || "")}</p>
        <a href="${doc.location}"><span class="twemoji">➡️</span> Ver questão</a>
      `;
      container.appendChild(card);
    });
  } catch (e) { }
}

function getLatestQuestionLinks(docs) {
  return docs.filter(doc =>
    doc.location.includes('questoes/') &&
    !doc.location.includes('#')
  );
}


document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    try {
      await loadRecentCarousel();

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 }
        }
      });

    } catch (error) {
      console.error("Erro ao carregar o carrossel de recentes:", error);
    }
  })();
});

