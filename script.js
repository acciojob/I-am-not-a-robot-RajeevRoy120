//your code here
document.addEventListener("DOMContentLoaded", () => {
    const images = ["img1", "img2", "img3", "img4", "img5"];
    let duplicate = images[Math.floor(Math.random() * images.length)];
    let allImages = [...images, duplicate];
    allImages.sort(() => Math.random() - 0.5);

    const container = document.getElementById("image-container");
    const verifyBtn = document.getElementById("verify");
    const resetBtn = document.getElementById("reset");
    const message = document.getElementById("para");
    let selectedImages = [];

    allImages.forEach((imgClass, index) => {
        let img = document.createElement("img");
        img.classList.add(imgClass, "tile");
        img.dataset.index = index;
        img.addEventListener("click", () => handleSelection(img, imgClass));
        container.appendChild(img);
    });

    function handleSelection(img, imgClass) {
        if (selectedImages.length < 2 && !img.classList.contains("selected")) {
            img.classList.add("selected");
            selectedImages.push({ img, imgClass });
        }
        if (selectedImages.length === 2) {
            verifyBtn.style.display = "inline";
        }
        resetBtn.style.display = "inline";
    }

    verifyBtn.addEventListener("click", () => {
        verifyBtn.style.display = "none";
        if (selectedImages[0].imgClass === selectedImages[1].imgClass) {
            message.textContent = "You are a human. Congratulations!";
        } else {
            message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
        }
    });

    resetBtn.addEventListener("click", () => {
        selectedImages.forEach(item => item.img.classList.remove("selected"));
        selectedImages = [];
        verifyBtn.style.display = "none";
        resetBtn.style.display = "none";
        message.textContent = "";
    });
});
