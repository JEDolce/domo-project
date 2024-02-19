// MOBILE ENVELOPE
const envelopeMobile = document.querySelector(".envelope");
const mobileLineUp = document.getElementById("line-up");
const mobileLineDown = document.getElementById("line-down");

// Variable de ancho
let envelopeMobileWidth = envelopeMobile.offsetWidth;

// Envelope height equal to width for mobile
envelopeMobile.style.height = `${envelopeMobileWidth}px`;

// Variable de altura
let envelopeMobileHeight = envelopeMobile.offsetHeight;

// Angulo y diagonal
let envelopeAngle = Math.atan(envelopeMobileHeight / envelopeMobileWidth) * (180 / Math.PI);
let envelopeDiag = envelopeMobileWidth / Math.cos(envelopeAngle * Math.PI / 180);

// Sumo 20px para que lo exceda un poco
mobileLineUp.style.width = `${envelopeDiag + 20}px`;
mobileLineUp.style.transform = `rotate(-${envelopeAngle}deg)`;

mobileLineDown.style.width = `${envelopeDiag}px`;
mobileLineDown.style.transform = `rotate(${envelopeAngle}deg)`;



// DESKTOP ENVELOPE
const envelopeLg = document.querySelector(".right--envelope");
const lgLineUp = document.querySelector(".right--envelope--line-up");
const lgLineDown = document.querySelector(".right--envelope--line-down");

let envelopeLgWidth = envelopeLg.offsetWidth;

envelopeLg.style.height = `${envelopeLgWidth / 1.5}px`;

let envelopeLgHeight = envelopeLg.offsetHeight;

let envelopeAngleLg = Math.atan(envelopeLgHeight / envelopeLgWidth) * (180 / Math.PI);
let envelopeDiagLg = envelopeLgWidth / Math.cos(envelopeAngleLg * Math.PI / 180);

lgLineUp.style.width = `${envelopeDiagLg + 20}px`;
lgLineUp.style.transform = `rotate(-${envelopeAngleLg}deg)`;

lgLineDown.style.width = `${envelopeDiagLg + 20}px`;
lgLineDown.style.transform = `rotate(${envelopeAngleLg}deg)`;


// MAIN SCREEN CROSS
const mainSection = document.getElementById("hero");
const crossUp = document.querySelector(".hero--cross--up");
const crossDown = document.querySelector(".hero--cross--down");

let sectionHeight = mainSection.offsetHeight;
let sectionWidth = mainSection.offsetWidth;

let sectionAngle = Math.atan(sectionHeight / sectionWidth) * (180 / Math.PI);
let sectionDiag = sectionWidth / Math.cos(sectionAngle * Math.PI / 180);

crossUp.style.width = `${sectionDiag + 20}px`;
crossUp.style.transform = `rotate(-${sectionAngle}deg)`;

crossDown.style.width = `${sectionDiag + 20}px`;
crossDown.style.transform = `rotate(${sectionAngle}deg)`;
