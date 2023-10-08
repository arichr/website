"use strict";
const imageWidth = 3632;
const imageHeight = 2048;
const faceAreaSide = 776 + 60;

const imageAreaTopOffset = 90;
const imageAreaLeftOffset = 1356;

const faceIDEl = document.getElementById('faceid');

const resizeFaceIDEl = () => {
    const resolution = Math.min(imageHeight / visualViewport.height, imageWidth / visualViewport.width);

    faceIDEl.style.height = faceIDEl.style.width = `${faceAreaSide / resolution}px`;
    faceIDEl.style.top = `${imageAreaTopOffset / resolution}px`;
    faceIDEl.style.left = `calc(${imageAreaLeftOffset / resolution}px + 5vw)`;
};

resizeFaceIDEl();
addEventListener('resize', resizeFaceIDEl);

faceIDEl.style.display = 'block';
