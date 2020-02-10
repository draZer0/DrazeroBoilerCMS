window.onload = () => {

    const openFormButton = document.querySelector("#js--openForm");
    const closeFormButton = document.querySelector("#js--closeForm");

    const form = document.querySelector("#js--form");

    openFormButton.onclick = () => {
        form.style.display = "block";
    }

    closeFormButton.onclick = () => {
        form.style.display = "none";
    }

}