let button = document.querySelector("button");
button.addEventListener("click",()=>{
    let p = document.createElement("p");
    p.style.margin = "0 50px";
    p.style.color = "white";
    p.style.backgroundColor = "black";
    p.style.padding = "50px";
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res=>res.json())
    .then(data=> p.innerText = data.value);
   document.body.appendChild(p)
    setTimeout(()=>{p.remove()},10000)
});
