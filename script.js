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
        console.log(clickedPost.getAttribute("id"));
        if (clickedPost.getAttribute("id") === "1") {
          window.open("page2.html", "_blank");
        } else if (clickedPost.getAttribute("id") === "2") {
          window.open("page3.html", "_blank");
        } else if (clickedPost.getAttribute("id") === "3") {
          window.open("page4.html", "_blank");
        } else if (clickedPost.getAttribute("id") === "4") {
          window.open("page5.html", "_blank");
        } else if (clickedPost.getAttribute("id") === "5") {
          window.open("page6.html", "_blank");
        } else if (clickedPost.getAttribute("id") === "6") {
          window.open("page7.html", "_blank");
        } else if (clickedPost.getAttribute("id") === "7") {
          window.open("page8.html", "_blank");
        } else if (clickedPost.getAttribute("id") === "8") {
          window.open("page9.html", "_blank");
        }
      });
    });
};

getCardData();
