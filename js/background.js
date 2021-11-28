const imageFrom = document.getElementById("image-form");
const imageInput = document.querySelector("#image-form input");

function getRandomImage(keyword) {
    let imageUrl = 'https://source.unsplash.com/random/1600x900';

    if (keyword != "" && keyword != null) {
        imageUrl = `https://source.unsplash.com/featured/?${keyword.toLowerCase()}`;
    }

    fetch(imageUrl)
        .then((response) => {
            document.body.style.backgroundImage = `url(${response.url})`;
        });
}

function handleImageSubmit(event) {
    event.preventDefault();
    const keyword = imageInput.value;

    imageInput.value = "";
    getRandomImage(keyword);
}

getRandomImage(null);
imageFrom.addEventListener("submit", handleImageSubmit);