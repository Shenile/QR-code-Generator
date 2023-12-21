document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const urlInput = document.getElementById("urlInput");
    const qrCodeContainer = document.getElementById("qrCodeContainer");

    generateButton.addEventListener("click", function() {
        const url = urlInput.value;

        // Add logic to make a request to the server and handle the response
        // (You can use fetch or other AJAX libraries)

        // Example: Assume there's an endpoint /generateQR on the server
        fetch(`/generateQR?url=${url}`)
            .then(response => response.json())
            .then(data => {
                const qrCodeImage = new Image();
                qrCodeImage.src = data.imageUrl;
                qrCodeContainer.innerHTML = "";
                qrCodeContainer.appendChild(qrCodeImage);
            })
            .catch(error => console.error(error));
    });
});
