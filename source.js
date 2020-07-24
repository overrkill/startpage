const search = document.getElementsByClassName("search-txt");
console.log(search[0]);
search[0].focus();
search[0].select()

const clock = document.getElementById("clock")

setInterval(() => {
    const dt = new Date();
    clock.innerHTML = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
}, 100)



//set the name
const nm = document.getElementById("name");

localStorage.getItem("name") ? nm.innerHTML = `${localStorage.getItem("name")} ! ` : nm.innerHTML = 'tap me !';

nm.addEventListener('click', () => {
    let tmp = prompt("Tell me your identity", "STRNGE");
    tmp ? localStorage.setItem("name", tmp) : tmp = "tap me";
    nm.innerHTML = `${tmp} ! `
})




//change theme

const setTheme = (thm) => {
    if (thm == "dark") {
        document.getElementById('container').classList.remove("theme-light");
        document.getElementById('container').classList.add("theme-dark");
        localStorage.setItem('theme', "dark");
    }
    else {
        document.getElementById('container').classList.add("theme-light");
        document.getElementById('container').classList.remove("theme-dark");
        localStorage.setItem('theme', "light");
    }
}

const thmButtom = document.getElementById('themer');
//set the theme

if (localStorage.getItem('theme')) {

    setTheme(localStorage.getItem("theme"));
    if (localStorage.getItem('theme') == "dark") {
        thmButtom.innerHTML = "☀️"
    }
    else {
        thmButtom.innerHTML = "🌙"
    }
}
else {
    localStorage.setItem("theme", "dark");
    setTheme(localStorage.getItem("theme"));
    thmButtom.innerHTML = "☀️";
}


thmButtom.addEventListener('click', () => {
    if (localStorage.getItem('theme') == "dark") {
        setTheme("light");
        thmButtom.innerHTML = "🌙"
    }
    else {
        setTheme("dark");
        thmButtom.innerHTML = "☀️"
    }
})
