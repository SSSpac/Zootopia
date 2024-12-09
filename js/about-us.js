
const mainContent = document.querySelector(".main-content");

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
  { 
    name: "yevhenii", 
    title: "Yevhenii", 
    description: "A highly skilled developer.", 
    imgSrc: "./images/about-us/yevhenii.jpg" 
  },
  { 
    name: "mikael", 
    title: "Mikael", 
    description: "An expert in UI/UX design with years of experience.", 
    imgSrc: "./images/about-us/mikael.jpg" 
  },
  { 
    name: "saifelislam", 
    title: "Saifelislam", 
    description: "Backend specialist and database architect.", 
    imgSrc: "./images/about-us/saif.jpg" 
  },
  { 
    name: "andrew", 
    title: "Andrew", 
    description: "A passionate frontend developer and React enthusiast.", 
    imgSrc: "./images/about-us/andrew.jpg" 
  },
  { 
    name: "saba", 
    title: "Saba", 
    description: "DevOps expert ensuring smooth deployment and scaling.", 
    imgSrc: "./images/about-us/saba.jpg" 
  },
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
  textContainer.classList.add("teamsDescription", "hidden");
  textContainer.setAttribute("data-name", member.name);
  textContainer.innerHTML = `<p>${member.description}</p>`;


  imgContainer.addEventListener("click", () => {
    textContainer.classList.toggle("hidden"); 
  });

  section.append(imgContainer, title, textContainer);
  teamContent.append(section);
});

// Sidebar
let sidebar = document.createElement("div");
sidebar.classList.add("about-us__sidebar", "hidden");
let sidebarHeader = document.createElement("h2");
sidebarHeader.textContent = "Team Members";
sidebar.append(sidebarHeader);

teamData.forEach((member) => {
  let memberName = document.createElement("div");
  memberName.classList.add("about-us__sidebar-item");
  memberName.textContent = member.title;

  memberName.addEventListener("click", () => {

    const allSections = document.querySelectorAll(".team");
    allSections.forEach((section) => {
      section.style.display = "none";
    });


    const activeSection = document.querySelector(`.${member.name}`);
    if (activeSection) {
      activeSection.style.display = "block";

      const description = activeSection.querySelector(`.teamsDescription[data-name="${member.name}"]`);
      if (description) {
        description.classList.remove("hidden");
      }
    }


    sidebar.classList.add("hidden");
    toggleButton.classList.remove("active"); 
  });

  sidebar.append(memberName);
});

sidebarHeader.addEventListener("click", () => {
  document.querySelectorAll(".team").forEach((member) => {
    member.style.display = "block";
  });

  document.querySelectorAll(".teamsDescription").forEach((description) => {
    description.classList.add("hidden");
  });

  sidebar.classList.add("hidden");
toggleButton.classList.remove("active");

});

sidebarHeader.addEventListener("click", () => {
  document.querySelectorAll(".team").forEach((member) => {
    member.style.display = "block";
  });

  const currentActiveDescription = document.querySelector(".teamsDescription.featured-description");
  if (currentActiveDescription) {
    currentActiveDescription.classList.remove("featured-description");
  }
});

mainContent.parentNode.insertBefore(sidebar, mainContent);

let toggleButton = document.createElement("button");
toggleButton.textContent = "☰";
toggleButton.classList.add("about-us__toggle-btn");

mainContent.parentNode.insertBefore(toggleButton, mainContent);

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  toggleButton.classList.toggle("active");
});

