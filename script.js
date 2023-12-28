let items = [
    {
        img: "https://cdn.suzukimotorcycle.co.in/public-live/uploads/color-images/original/Hayabusa_grey_color_650x428px-12.jpg",
        itemName: "Hayabusa"
    },
    {
        img: "https://i.insider.com/537614c2ecad04ea41b9d104?width=1000&format=jpeg&auto=webp",
        itemName: "BMW Ev"
    },
    {
        img: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-rebel-blue-1668160495860.jpg?q=80",
        itemName: "Royal Enfield"
    },
    {
        img: "https://cdn.suzukimotorcycle.co.in/public-live/uploads/color-images/original/Hayabusa_grey_color_650x428px-12.jpg",
        itemName: "Hayabusa"
    },
    {
        img: "https://i.insider.com/537614c2ecad04ea41b9d104?width=1000&format=jpeg&auto=webp",
        itemName: "BMW Ev"
    },
    {
        img: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-rebel-blue-1668160495860.jpg?q=80",
        itemName: "Royal Enfield"
    },
    {
        img: "https://cdn.suzukimotorcycle.co.in/public-live/uploads/color-images/original/Hayabusa_grey_color_650x428px-12.jpg",
        itemName: "Hayabusa"
    },
    {
        img: "https://i.insider.com/537614c2ecad04ea41b9d104?width=1000&format=jpeg&auto=webp",
        itemName: "BMW Ev"
    },
    {
        img: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-rebel-blue-1668160495860.jpg?q=80",
        itemName: "Royal Enfield"
    },
    {
        img: "https://cdn.suzukimotorcycle.co.in/public-live/uploads/color-images/original/Hayabusa_grey_color_650x428px-12.jpg",
        itemName: "Hayabusa"
    },
    {
        img: "https://i.insider.com/537614c2ecad04ea41b9d104?width=1000&format=jpeg&auto=webp",
        itemName: "BMW Ev"
    },
    {
        img: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-rebel-blue-1668160495860.jpg?q=80",
        itemName: "Royal Enfield"
    },
]

const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const section1Item = document.getElementById("section1Item");

searchButton.addEventListener("click", (() => {
    searchBox.classList.add("searchbar_active")
    searchInput.classList.remove("hide");
    searchClose.classList.remove("hide");
}))
const searchClose = document.getElementById("searchClose");
searchClose.addEventListener("click", (() => {
    searchBox.classList.remove("searchbar_active")
    searchInput.classList.add("hide");
    searchClose.classList.add("hide");
}))





function callList(imgLoc , nameLoc) {
    const node = document.createElement("div");
    const img = document.createElement("img");
    const heading = document.createElement("h2");
    node.className = "card";
    const imgName = document.createTextNode(`${nameLoc}`);
    img.src = `${imgLoc}`
    heading.appendChild(imgName)
    // heading.id = "pName"
    node.appendChild(img);
    node.appendChild(heading);
    section1Item.appendChild(node)
}
for (let i = 0; i < items.length; i++) {
    callList(items[i].img, items[i].itemName)
}

const search = () => {
    const searchInputh = document.getElementById("searchInputh").value.toUpperCase();
    const card = document.querySelectorAll(".card")
    const pName = document.getElementsByTagName("h2");
    console.log(pName.length);
    for (let i = 0; i < pName.length; i++) {
        let match = card[i].getElementsByTagName("h2")[0]
        console.log(match);
        if (match) {
            let textValue = match.innerHTML || match.textContent
            if (textValue.toUpperCase().indexOf(searchInputh) > -1 ) {
                card[i].style.display = "";
            }
            else{
                card[i].style.display = "none"
            }
        }
        // console.log(match);
        
    }
    
}