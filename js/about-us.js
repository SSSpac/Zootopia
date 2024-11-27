let mainContent = document.querySelector(".main-content");
let teamContent = document.createElement("div");

teamContent.classList.add("team-content");
mainContent.append(teamContent);

// Yevhenii
let yevhenii = document.createElement("section");
yevhenii.classList.add("yevhenii");
yevhenii.classList.add("team");
teamContent.append(yevhenii);

let yevheniiImg = document.createElement("div");
yevheniiImg.classList.add("yevhenii-picture");
yevheniiImg.classList.add("picture");

yevheniiImg.setAttribute("data-name", "yevhenii");
yevhenii.append(yevheniiImg);

const img1 = document.createElement("img");
img1.src = "./images/about-us/yevhenii.jpg";
yevheniiImg.append(img1);

let yevheniiText = document.createElement("div");
yevheniiText.classList.add("yevhenii-text");
yevheniiText.classList.add("teamsDescription");

yevheniiText.setAttribute("data-name", "yevhenii");
yevhenii.append(yevheniiText);

let yevheniiTitle = document.createElement("h2");
yevheniiTitle.textContent = "Yevhenii";
let yevheniiDescription = document.createElement("p");
yevheniiDescription.textContent = "Group Member";
yevheniiText.append(yevheniiTitle, yevheniiDescription);

// Mikael
let mikael = document.createElement("section");
mikael.classList.add("mikael");
mikael.classList.add("team");
teamContent.append(mikael);

let mikaelImg = document.createElement("div");
mikaelImg.classList.add("mikael-picture");
mikaelImg.classList.add("picture");

mikaelImg.setAttribute("data-name", "mikael");
mikael.append(mikaelImg);

const img2 = document.createElement("img");
img2.src = "./images/about-us/yevhenii.jpg";
mikaelImg.append(img2);

let mikaelText = document.createElement("div");
mikaelText.classList.add("mikael-text");
mikaelText.classList.add("teamsDescription");

mikaelText.setAttribute("data-name", "mikael");
mikael.append(mikaelText);

let mikaelTitle = document.createElement("h2");
mikaelTitle.textContent = "Mikael";
let mikaelDescription = document.createElement("p");
mikaelDescription.textContent = "Group Member";
mikaelText.append(mikaelTitle, mikaelDescription);


// Saifelislam
let saifelislam = document.createElement("section");
saifelislam.classList.add("saifelislam");
saifelislam.classList.add("team");
teamContent.append(saifelislam);

let saifelislamImg = document.createElement("div");
saifelislamImg.classList.add("saifelislam-picture");
saifelislamImg.classList.add("picture");

saifelislamImg.setAttribute("data-name", "saifelislam");
saifelislam.append(saifelislamImg);

const img3 = document.createElement("img");
img3.src = "./images/about-us/yevhenii.jpg";
saifelislamImg.append(img3);

let saifelislamText = document.createElement("div");
saifelislamText.classList.add("saifelislam-text");
saifelislamText.classList.add("teamsDescription");

saifelislamText.setAttribute("data-name", "saifelislam");
saifelislam.append(saifelislamText);

let saifelislamTitle = document.createElement("h2");
saifelislamTitle.textContent = "Saifelislam";
let saifelislamDescription = document.createElement("p");
saifelislamDescription.textContent = "Group Member";
saifelislamText.append(saifelislamTitle, saifelislamDescription);



// Andrew
let andrew = document.createElement("section");
andrew.classList.add("andrew");
andrew.classList.add("team");
teamContent.append(andrew);

let andrewImg = document.createElement("div");
andrewImg.classList.add("andrew-picture");
andrewImg.classList.add("picture");

andrewImg.setAttribute("data-name", "andrew");
andrew.append(andrewImg);

const img4 = document.createElement("img");
img4.src = "./images/about-us/yevhenii.jpg";
andrewImg.append(img4);

let andrewText = document.createElement("div");
andrewText.classList.add("andrew-text");
andrewText.classList.add("teamsDescription");

andrewText.setAttribute("data-name", "andrew");
andrew.append(andrewText);

let andrewTitle = document.createElement("h2");
andrewTitle.textContent = "Andrew";
let andrewDescription = document.createElement("p");
andrewDescription.textContent = "Group Member";
andrewText.append(andrewTitle, andrewDescription);




// Saba
let saba = document.createElement("section");
saba.classList.add("saba");
saba.classList.add("team");
teamContent.append(saba);

let sabaImg = document.createElement("div");
sabaImg.classList.add("saba-picture");
sabaImg.classList.add("picture");

sabaImg.setAttribute("data-name", "saba");
saba.append(sabaImg);

const img5 = document.createElement("img");
img5.src = "./images/about-us/yevhenii.jpg";
sabaImg.append(img5);

let sabaText = document.createElement("div");
sabaText.classList.add("saba-text");
sabaText.classList.add("teamsDescription");

sabaText.setAttribute("data-name", "saba");
saba.append(sabaText);

let sabaTitle = document.createElement("h2");
sabaTitle.textContent = "Saba";
let sabaDescription = document.createElement("p");
sabaDescription.textContent = "Group Member";
sabaText.append(sabaTitle, sabaDescription);





let teamTabs = Array.from(document.querySelectorAll(".picture"));
let teamPerson = Array.from(document.querySelectorAll(".teamsDescription"));

const findContent = dataName => {

    teamPerson.forEach(descriptionDiv => {
        descriptionDiv.classList.remove("featured-description");
    });


    const selectedDescription = teamPerson.find(
        descriptionDiv => descriptionDiv.getAttribute("data-name") === dataName
    );

    if (selectedDescription) {
        selectedDescription.classList.add("featured-description");
    }
};


teamTabs.forEach(picture =>
    picture.addEventListener("click", () => {
        const dataName = picture.getAttribute("data-name");
        const associatedDescription = teamPerson.find(
            descriptionDiv => descriptionDiv.getAttribute("data-name") === dataName
        );


        if (associatedDescription.classList.contains("featured-description")) {
            associatedDescription.classList.remove("featured-description");
        } else {
            findContent(dataName);
        }
    })
);






