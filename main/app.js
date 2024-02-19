const envelopeMobile = document.querySelector(".envelope");
const mobileLineUp = document.getElementById("line-up");
const mobileLineDown = document.getElementById("line-down");

let envelopeMobileWidth = envelopeMobile.offsetWidth;
let envelopeMobileHeight = envelopeMobile.offsetHeight;

let envelopeAngle = Math.atan(envelopeMobileHeight / envelopeMobileWidth) * (180 / Math.PI);
let envelopeDiag = envelopeMobileWidth / Math.cos(envelopeAngle * Math.PI / 180);

mobileLineUp.style.width = `${envelopeDiag + 20}px`;
// Sumo 20px para que lo exceda un poco
mobileLineUp.style.transform = `rotate(-${envelopeAngle}deg)`;

mobileLineDown.style.width = `${envelopeDiag}px`;
mobileLineDown.style.transform = `rotate(${envelopeAngle}deg)`;





