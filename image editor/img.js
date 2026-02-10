const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const upload = document.getElementById("upload");
const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const saturation = document.getElementById("saturation");
const blur = document.getElementById("blur");

let img = new Image();
let rotation = 0;

upload.addEventListener("change", () => {
    img.src = URL.createObjectURL(upload.files[0]);
    img.onload = () => {
        canvas.width = img.width / 2;
        canvas.height = img.height / 2;
        drawImage();
    };
});

function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.filter = `
        brightness(${100 + Number(brightness.value)}%)
        contrast(${100 + Number(contrast.value)}%)
        saturate(${100 + Number(saturation.value)}%)
        blur(${blur.value}px)
    `;

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.restore();
}

[brightness, contrast, saturation, blur].forEach(control => {
    control.addEventListener("input", drawImage);
});

function rotateImage() {
    rotation += 90;
    drawImage();
}

function resetImage() {
    brightness.value = 0;
    contrast.value = 0;
    saturation.value = 0;
    blur.value = 0;
    rotation = 0;
    drawImage();
}

function applyPreset(type) {
    if (type === "bw") {
        saturation.value = -100;
        contrast.value = 20;
    }
    if (type === "vintage") {
        brightness.value = 10;
        contrast.value = 10;
        saturation.value = -20;
    }
    if (type === "warm") {
        brightness.value = 10;
        saturation.value = 30;
    }
    drawImage();
}

function downloadImage() {
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL();
    link.click();
}



