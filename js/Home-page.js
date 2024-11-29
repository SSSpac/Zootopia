
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close') 
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}



const animals = {
  Echidna: {
    Name: "Echidna",
    Image: "images/echidna.jpg",
    Information: "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals but lay eggs. They are often classified as long- or short-beaked but don't have beaks in the traditional sense; they have fleshy noses.",
    Food: "Insects, beetles, and worms",
    Lifespan: "Around 50 years",
    Group: "Mammals"
  },
  TasmanianDevil: {
    Name: "Tasmanian Devil",
    Image: "images/tasmanian devil.jpg",
    Information: "The Tasmanian devil is a carnivorous marsupial of the family Dasyuridae, known for its loud screeches and strong jaws.",
    Food: "Meat from other animals",
    Lifespan: "Around 5 years",
    Group: "Mammals"
  },
  Quokka: {
    Name: "Quokka",
    Image: "images/quokka.jpg",
    Information: "The Quokka, described as 'a kind of rat as big as a common cat', is native to islands off the coast of Australia.",
    Food: "Plants, including shrubs and grasses",
    Lifespan: "Around 10 years",
    Group: "Mammals"
  },
  FrillNeckedLizard: {
    Name: "Frill-necked Lizard",
    Image: "images/frill-necked lizard.jpg",
    Information: "Known for its dramatic frill display when threatened, the frill-necked lizard is an iconic Australian reptile.",
    Food: "Insects and spiders",
    Lifespan: "Around 20 years",
    Group: "Reptiles"
  },
  HawksbillTurtle: {
    Name: "Hawksbill Turtle",
    Image: "images/hawksbill turtle.jpg",
    Information: "The Hawksbill Sea Turtle is known for its distinctive bird-like beak and overlapping scutes on its shell.",
    Food: "Sponges, jellyfish, and sea plants",
    Lifespan: "Around 50 years",
    Group: "Reptiles"
  },
  Perentie: {
    Name: "Perentie",
    Image: "images/perentie.jpg",
    Information: "The perentie is the largest monitor lizard in Australia, renowned for its size and speed.",
    Food: "Smaller insects",
    Lifespan: "Around 20 years",
    Group: "Reptiles"
  },
  Cassowary: {
    Name: "Cassowary",
    Image: "images/cassowary.jpg",
    Information: "Standing up to six feet tall, cassowaries are large, flightless birds with a dinosaur-like appearance.",
    Food: "Fruits and insects",
    Lifespan: "Around 20 years",
    Group: "Birds"
  },
  Kookaburra: {
    Name: "Kookaburra",
    Image: "images/kookaburra.jpg",
    Information: "The laughing kookaburra is the largest member of the Kingfisher family, native to Australia's eucalyptus forests.",
    Food: "Insects and small animals",
    Lifespan: "Around 20 years",
    Group: "Birds"
  },
  YellowTailedBlackCockatoo: {
    Name: "Yellow Tailed Black Cockatoo",
    Image: "images/yellow tailed black cockatoo.jpg",
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

  if (clickCount[animal] === 2) {
    contentContainer.innerHTML = `
      <h2>Welcome</h2>
      <p>G'day and welcome to our site showcasing the incredible wildlife of Australia! Prepare to be amazed by the stunning images and information about some of the most unique and diverse creatures on this planet. From odd birds to feisty Tasmanian Devils, we've got it all covered here. Whether you're a nature enthusiast looking to learn more about Aussie animals or just stopping by for a virtual safari, we promise you'll be thoroughly entertained. So sit back, relax, and enjoy exploring the wonders of Down Under through our collection of photos and fun facts. And who knows, maybe you'll even discover your new favorite animal along the way! Cheers mate!</p>
    `;
    clickCount[animal] = 0; 
    return;
  }

  const selectedAnimal = animals[animal];
  contentContainer.innerHTML = `
    <h2>${selectedAnimal.Name}</h2>
    <img src="${selectedAnimal.Image}" alt="${selectedAnimal.Name}" style="width:400px;height:auto;">
    <p>${selectedAnimal.Information}</p>
    <p><strong>Food:</strong> ${selectedAnimal.Food}</p>
    <p><strong>Lifespan:</strong> ${selectedAnimal.Lifespan}</p>
    <a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
      Group: ${selectedAnimal.Group}
    </a>
  `;
}


document.querySelectorAll(".animal-button").forEach(button => {
  const animalKey = button.dataset.animal;
  button.addEventListener("click", () => updateContent(animalKey));
});
