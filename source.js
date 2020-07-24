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

//search 

const searchButtons = document.getElementsByClassName("button");

const searchEngine = [
    "https://www.google.com/search?q=",
    "https://duckduckgo.com/?q=",
    "https://www.youtube.com/results?search_query=",
    "https://reddit.com/r/",
    "https://en.wikipedia.org/wiki/"


]

for (let i = 0; i < 5; i++) {
    searchButtons[i].addEventListener("click", () => {
        if (search[0].value) {
            window.location.href = `${searchEngine[i]}${search[0].value}`
        }

    })
}

search[0].addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        console.log('going')
        if (search[0].value) {
            window.location.href = `https://duckduckgo.com/?q=${search[0].value}`
        }
    }
})