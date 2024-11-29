mainContent = document.querySelector(".main-content");

let teamContentCon = document.createElement("div")
teamContentCon.classList.add("team-content-con")
mainContent.append(teamContentCon)

let mainTextTeam = document.createElement("h2")
mainTextTeam.textContent = "Our Team"
teamContentCon.append(mainTextTeam)

let teamContent = document.createElement("div");
teamContent.classList.add("team-content");
teamContentCon.append(teamContent);


const teamData = [
    { name: "yevhenii", title: "Yevhenii", description: "Group Member", imgSrc: "./images/about-us/yevhenii.jpg" },
    { name: "mikael", title: "Mikael", description: "Group Member", imgSrc: "./images/about-us/mikael.jpg" },
    { name: "saifelislam", title: "Saifelislam", description: "Group Member", imgSrc: "./images/about-us/saif.jpg" },
    { name: "andrew", title: "Andrew", description: "Group Member", imgSrc: "./images/about-us/andrew.jpg" },
    { name: "saba", title: "Saba", description: "Group Member", imgSrc: "./images/about-us/saba.jpg" },
];


teamData.forEach(member => {
    let section = document.createElement("section");
    section.classList.add(member.name, "team");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add(`${member.name}-picture`, "picture");
    imgContainer.setAttribute("data-name", member.name);

    let img = document.createElement("img");
    img.src = member.imgSrc;
    imgContainer.append(img);

    let textContainer = document.createElement("div");
    textContainer.classList.add(`${member.name}-text`, "teamsDescription");
    textContainer.setAttribute("data-name", member.name);

    let title = document.createElement("h2");
    title.textContent = member.title;

    let description = document.createElement("p");
    description.textContent = member.description;

    textContainer.append(title, description);
    section.append(imgContainer, textContainer);

    teamContent.append(section);
});





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
            descriptionDiv => descriptionDiv.getAttribute("data-name") === dataName);


        if (associatedDescription.classList.contains("featured-description")) {
            associatedDescription.classList.remove("featured-description");
        } else {
            findContent(dataName);
        }
    })
);
