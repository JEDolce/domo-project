// MOBILE ENVELOPE
const envelopeMobile = document.querySelector(".envelope");
const envelopeC = document.querySelector(".envelope-c");
const envelopeD = document.querySelector(".envelope-d");
const mobileLineUp = document.querySelectorAll("#line-up");
const mobileLineDown = document.querySelectorAll("#line-down");

// Variable de ancho
let envelopeMobileWidth = envelopeMobile.offsetWidth;

// Envelope height equal to width for mobile
envelopeMobile.style.height = `${envelopeMobileWidth}px`;
envelopeC.style.height = `${envelopeMobileWidth}px`;
envelopeD.style.height = `${envelopeMobileWidth}px`;

// Variable de altura
let envelopeMobileHeight = envelopeMobile.offsetHeight;

// Angulo y diagonal
let envelopeAngle = Math.atan(envelopeMobileHeight / envelopeMobileWidth) * (180 / Math.PI);
let envelopeDiag = envelopeMobileWidth / Math.cos(envelopeAngle * Math.PI / 180);

// Sumo 20px para que lo exceda un poco
mobileLineUp.forEach(i => {
    i.style.width = `${envelopeDiag + 20}px`;
    i.style.transform = `rotate(-${envelopeAngle}deg)`;
});

mobileLineDown.forEach(j => {
    j.style.width = `${envelopeDiag}px`;
    j.style.transform = `rotate(${envelopeAngle}deg)`;
});


// DESKTOP ENVELOPE
const envelopeLg = document.querySelector(".right--envelope");
const envelopeLgC = document.querySelector(".right-c");
const envelopeLgD = document.querySelector(".right-d");
const lgLineUp = document.querySelectorAll(".right--envelope--line-up");
const lgLineDown = document.querySelectorAll(".right--envelope--line-down");

let envelopeLgWidth = envelopeLg.offsetWidth;

envelopeLg.style.height = `${envelopeLgWidth / 1.5}px`;
envelopeLgC.style.height = `${envelopeLgWidth / 1.5}px`;
envelopeLgD.style.height = `${envelopeLgWidth / 1.5}px`;

let envelopeLgHeight = envelopeLg.offsetHeight;

let envelopeAngleLg = Math.atan(envelopeLgHeight / envelopeLgWidth) * (180 / Math.PI);
let envelopeDiagLg = envelopeLgWidth / Math.cos(envelopeAngleLg * Math.PI / 180);

lgLineUp.forEach(k => {
    k.style.width = `${envelopeDiagLg + 20}px`;
    k.style.transform = `rotate(-${envelopeAngleLg}deg)`;
});

lgLineDown.forEach(l => {
    l.style.width = `${envelopeDiagLg + 20}px`;
    l.style.transform = `rotate(${envelopeAngleLg}deg)`;
});


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
