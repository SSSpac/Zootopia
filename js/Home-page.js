

const animalLinks = [
  { name: "Echidna", dataAnimal: "Echidna" },
  { name: "Tasmanian Devil", dataAnimal: "TasmanianDevil" },
  { name: "Quokka", dataAnimal: "Quokka" },
  { name: "Frill-necked Lizard", dataAnimal: "FrillNeckedLizard" },
  { name: "Hawksbill Turtle", dataAnimal: "HawksbillTurtle" },
  { name: "Perentie", dataAnimal: "Perentie" },
  { name: "Cassowary", dataAnimal: "Cassowary" },
  { name: "Kookaburra", dataAnimal: "Kookaburra" },
  { name: "Yellow Tailed Black Cockatoo", dataAnimal: "YellowTailedBlackCockatoo" }
];

const side__bar = document.getElementById("side__bar");
const contentContainer = document.getElementById("main-content");

animalLinks.forEach(animal => {
  const link = document.createElement("a");
  link.className = "animal-button";
  link.dataset.animal = animal.dataAnimal;
  link.textContent = animal.name;

  link.addEventListener("click", () => {
    const isActive = link.classList.contains("active");

    document.querySelectorAll(".animal-button").forEach(btn => btn.classList.remove("active"));

    if (isActive) {
      displayWelcomeMessage();
    } else {
      link.classList.add("active");
      updateContent(animal.dataAnimal);
    }
  });

  side__bar.appendChild(link);
});

function displayWelcomeMessage() {
  contentContainer.innerHTML = `
    <p>G'day and welcome to our site showcasing the incredible wildlife of Australia! Prepare to be amazed by the stunning images and information about some of the most unique and diverse creatures on this planet. From odd birds to feisty Tasmanian Devils, we've got it all covered here.</p>
    <img src="./images/kangaroo.jpg" width="60%" height="auto">
  `;
}

 
const animals = {
  Echidna: {
    Name: "Echidna",
    Image: "./images/echidna.jpg",
    Information: "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals but lay eggs. They are often classified as long- or short-beaked but don't have beaks in the traditional sense; they have fleshy noses.",
    Food: "Insects, beetles, and worms",
    Lifespan: "Around 50 years",
    Group: "Mammals"
  },
  TasmanianDevil: {
    Name: "Tasmanian Devil",
    Image: "./images/tasmanian devil.jpg",
    Information: "The Tasmanian devil is a carnivorous marsupial of the family Dasyuridae, known for its loud screeches and strong jaws.",
    Food: "Meat from other animals",
    Lifespan: "Around 5 years",
    Group: "Mammals"
  },
  Quokka: {
    Name: "Quokka",
    Image: "./images/quokka.jpg",
    Information: "The Quokka, described as 'a kind of rat as big as a common cat', is native to islands off the coast of Australia.",
    Food: "Plants, including shrubs and grasses",
    Lifespan: "Around 10 years",
    Group: "Mammals"
  },
  FrillNeckedLizard: {
    Name: "Frill-necked Lizard",
    Image: "./images/frill-necked lizard.jpg",
    Information: "Known for its dramatic frill display when threatened, the frill-necked lizard is an iconic Australian reptile.",
    Food: "Insects and spiders",
    Lifespan: "Around 20 years",
    Group: "Reptiles"
  },
  HawksbillTurtle: {
    Name: "Hawksbill Turtle",
    Image: "./images/hawksbill turtle.jpg",
    Information: "The Hawksbill Sea Turtle is known for its distinctive bird-like beak and overlapping scutes on its shell.",
    Food: "Sponges, jellyfish, and sea plants",
    Lifespan: "Around 50 years",
    Group: "Reptiles"
  },
  Perentie: {
    Name: "Perentie",
    Image: "./images/perentie.jpg",
    Information: "The perentie is the largest monitor lizard in Australia, renowned for its size and speed.",
    Food: "Smaller insects",
    Lifespan: "Around 20 years",
    Group: "Reptiles"
  },
  Cassowary: {
    Name: "Cassowary",
    Image: "./images/cassowary.jpg",
    Information: "Standing up to six feet tall, cassowaries are large, flightless birds with a dinosaur-like appearance.",
    Food: "Fruits and insects",
    Lifespan: "Around 20 years",
    Group: "Birds"
  },
  Kookaburra: {
    Name: "Kookaburra",
    Image: "./images/kookaburra.jpg",
    Information: "The laughing kookaburra is the largest member of the Kingfisher family, native to Australia's eucalyptus forests.",
    Food: "Insects and small animals",
    Lifespan: "Around 20 years",
    Group: "Birds"
  },
  YellowTailedBlackCockatoo: {
    Name: "Yellow Tailed Black Cockatoo",
    Image: "./images/yellowtailedblackcockatoo.jpg",
    Information: "Known for its yellow cheek patches and tail band, this cockatoo is a striking figure in the Australian wilderness.",
    Food: "Fruits, seeds, and plant material",
    Lifespan: "Around 41 years",
    Group: "Birds"
  }
};

const clickCount = {};

function updateContent(animal) {
  const contentContainer = document.getElementById("main-content");

  if (!clickCount[animal]) {
    clickCount[animal] = 0;
  }

  clickCount[animal]++;

  const selectedAnimal = animals[animal];
  let groupLink = ""; 
  
  if (selectedAnimal.Group === "Mammals") {
    groupLink = "./html/mammals.html";
  } else if (selectedAnimal.Group === "Reptiles") {
    groupLink = "./html/reptiles.html";
  } else if (selectedAnimal.Group === "Birds") {
    groupLink = "./html/birds.html";
  }
  
  contentContainer.innerHTML = `
    <h2>${selectedAnimal.Name}</h2>
    <img src="${selectedAnimal.Image}" alt="${selectedAnimal.Name}" style="width:400px;height:auto;">
    <p>${selectedAnimal.Information}</p>
    <p><strong>Food:</strong> ${selectedAnimal.Food}</p>
    <p><strong>Lifespan:</strong> ${selectedAnimal.Lifespan}</p>
    <a href="${groupLink}" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
      Group: ${selectedAnimal.Group}
    </a>
  `; }
  
