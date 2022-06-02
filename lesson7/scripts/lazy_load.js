// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// check if intersection is supported
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

// check image status and load if needed
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}

// load all images
else { 
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
