let button = document.querySelector("button");
button.addEventListener("click", () => {
    let p = document.createElement("p");
    p.style.color = "white";
    p.style.background = "linear-gradient(0deg, #000, #272727)";
    p.style.padding = "50px";
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => p.innerText = data.value);
    document.body.appendChild(p)
});
