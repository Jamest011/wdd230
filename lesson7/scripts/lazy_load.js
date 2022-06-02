// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// check if intersection is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
            }
        });
    });

// check image status and load if needed
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}

// load all images
else { 
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
