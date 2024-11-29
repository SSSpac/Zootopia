mainContent = document.querySelector(".main-content");

let teamContentCon = document.createElement("div");
teamContentCon.classList.add("team-content-con");
mainContent.append(teamContentCon);


let mainTextTeam = document.createElement("h2");
mainTextTeam.textContent = "Our Team";
teamContentCon.append(mainTextTeam);


let teamContent = document.createElement("div");
teamContent.classList.add("team-content");
teamContentCon.append(teamContent);


const teamData = [
  { name: "yevhenii", title: "Yevhenii", description: "Group Member", imgSrc: "../images/about-us/yevhenii.jpg" },
  { name: "mikael", title: "Mikael", description: "Group Member", imgSrc: "../images/about-us/mikael.jpg" },
  { name: "saifelislam", title: "Saifelislam", description: "Group Member", imgSrc: "../images/about-us/saif.jpg" },
  { name: "andrew", title: "Andrew", description: "Group Member", imgSrc: "../images/about-us/andrew.jpg" },
  { name: "saba", title: "Saba", description: "Group Member", imgSrc: "../images/about-us/saba.jpg" },
];


teamData.forEach((member) => {
  let section = document.createElement("section");
  section.classList.add(member.name, "team");


  let imgContainer = document.createElement("div");
  imgContainer.classList.add(`${member.name}-picture`, "picture");
  imgContainer.setAttribute("data-name", member.name);

  let img = document.createElement("img");
  img.src = member.imgSrc;
  img.alt = `${member.title} picture`;
  imgContainer.append(img);


  let title = document.createElement("h2");
  title.classList.add("team-name");
  title.setAttribute("data-name", member.name);
  title.textContent = member.title;


  let textContainer = document.createElement("div");
  textContainer.classList.add("teamsDescription");
  textContainer.setAttribute("data-name", member.name);
  textContainer.innerHTML = `<p>${member.description}</p>`;

  section.append(imgContainer, title, textContainer);
  teamContent.append(section);
});


const updateInfo = (name) => {
  const currentActive = document.querySelector(".featured-description");
  const newDescription = document.querySelector(`.teamsDescription[data-name="${name}"]`);


  if (currentActive) {
    currentActive.classList.remove("featured-description");
  }


  if (currentActive && currentActive.getAttribute("data-name") === name) {
    return;
  }



  if (newDescription) {
    newDescription.classList.add("featured-description");
  }
};


document.querySelectorAll(".picture, .team-name").forEach((element) => {
  element.addEventListener("click", () => {
    const name = element.getAttribute("data-name");
    updateInfo(name);
  });
});
