const search = document.getElementsByClassName("search-txt");
console.log(search[0]);
search[0].focus();
search[0].select()

const clock = document.getElementById("clock")

setInterval(() => {
    const dt = new Date();
    clock.innerHTML = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
}, 100)