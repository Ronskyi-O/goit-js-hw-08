// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const galerryContainer = document.querySelector('.gallery')
const galerryRef = createGalerryMarkup(galleryItems)

galerryContainer.insertAdjacentHTML('afterbegin', galerryRef)


function createGalerryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
        .join(" ");
}

const options = {
    aptionsData: "alt",
    captionDelay: "250",
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: '250'});
