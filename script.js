"use strict";

const cardsContainer = document.querySelector(".cards");

const renderCards = function (data) {
  const html = `
  <article class="card ">
  <div class="card__data" id="${data.id}">
  <h2 class="card__name"  id="${data.id}">${data.title}</h3>
  <p class="card__body"  id="${data.id}">${data.body}</p>
  </div>
  </article>
  `;
  cardsContainer.insertAdjacentHTML("beforeend", html);
  cardsContainer.style.opacity = 1;
};

const getCardData = function () {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 8; i++) {
        renderCards(data[i]);
      }

      cardsContainer.addEventListener("click", function (e) {
        e.preventDefault();
        const clickedPost = e.target;
        const checkId =clickedPost.getAttribute("id") 
        window.open(`https://jsonplaceholder.typicode.com/posts/${checkId}`, "_blank");
      });
    });
};

getCardData();
