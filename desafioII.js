(async () => {
    let api = "https://randomuser.me/api/?results=10";
    let div = document.getElementById("user-data");

    try {
        let res = await fetch(api);
        let data = await res.json();
        console.log(data.results);
        data.results.forEach(e => {
            div.innerHTML += `<p style="text-align:center"><img src="${e.picture.large}"><br>${e.name.first} ${e.name.last}<br>${e.email}<br>${e.cell}</p>`
            div.style.border = "2px solid black";
            div.style.display = "inline-block"
        })
    } catch (error) {
        console.log(error)
    }
})();
