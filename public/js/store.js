const stores = [
    { name: "GreenGrocer", logo: "logo1.png", color: "#bff542" },
    { name: "FreshBasket", logo: "logo2.png", color: "#88e044" },
    { name: "UrbanMart",   logo: "logo3.png", color: "#a3f57a" },
    { name: "NatureHub",   logo: "logo4.png", color: "#d8ff6f" }
];

const grid = document.getElementById("store-grid");

stores.forEach(store => {
    const card = document.createElement("div");
    card.className = "store-card";

    // top color bar
    const top = document.createElement("div");
    top.className = "store-top";
    top.style.background = store.color;
    card.appendChild(top);

    // logo circle
    const logo = document.createElement("div");
    logo.className = "store-logo";

    if (store.logo) {
        const img = document.createElement("img");
        img.src = store.logo;
        img.alt = store.name + " logo";
        logo.appendChild(img);
    } else {
        logo.textContent = store.name.charAt(0);
    }

    card.appendChild(logo);

    // name area
    const body = document.createElement("div");
    body.className = "store-body";

    const name = document.createElement("h3");
    name.className = "store-name";
    name.textContent = store.name;

    body.appendChild(name);
    card.appendChild(body);

    grid.appendChild(card);
});
