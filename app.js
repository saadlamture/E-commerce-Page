// Image gallery functionality
document.querySelectorAll('.product-thumbnails img').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const mainImage = document.querySelector('.product-image img');
        mainImage.src = this.src;
    });
});
