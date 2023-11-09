/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Función para generar una carta aleatoria
// Función para generar una carta aleatoria
document
  .getElementById("generarCarta")
  .addEventListener("click", generarCartaAleatoria);

function generarCartaAleatoria() {
  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const palos = ["♣", "♦", "♥", "♠"];

  const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  const carta = document.getElementById("carta");
  carta.querySelector(".numero").textContent = numeroAleatorio;

  // Cambia el color de texto a rojo para corazón (♥) y diamante (♦)
  const palosCarta = carta.querySelectorAll(".palo");
  palosCarta.forEach(palo => {
    palo.textContent = paloAleatorio;
    if (paloAleatorio === "♥" || paloAleatorio === "♦") {
      palo.style.color = "red";
    } else {
      palo.style.color = "black";
    }
  });
}
