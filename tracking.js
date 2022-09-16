const body = document.body;

const toggler = document.getElementById("toggler-icon");

const navBar = document.getElementById("navbar-sm");

const close = document.getElementById("toggler-close");

toggler.addEventListener("click", (e)=> {
    e.preventDefault() // prevent default behaviour if any
        navBar.style.display = "block";

        toggler.style.display = "none";
        close.style.display = "block";
}, false);


close.addEventListener("click", ()=> {
    navBar.style.display = "none";
    toggler.style.display = "block";
    close.style.display = "none";
})


const logo = document.querySelector("#proj-logo img");
logo.onclick = () => {
    window.location.reload(true);
}
