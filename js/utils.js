function getProportionalHeight(width, originalWidth, originalHeight) {
    return (width * originalHeight) / originalWidth;
}

function getScale(targetHeight, originalHeight) {
    return targetHeight / originalHeight;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
