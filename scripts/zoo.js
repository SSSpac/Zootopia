//alert("welcome")
const toggleButton = document.getElementById('toggle-btn')
//const toggleButton = document.querySelector('#toggle-btn').addEventListener 
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close') //The toggle() method toggles between hide() and show() for the selected elements
  toggleButton.classList.toggle('rotate') //The classList property returns the CSS classnames of an element

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

window.addEventListener("load", function() {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").style.display = "block";
    },
    1000
  )
})
document.querySelector("#close").addEventListener
("click", function() {
  document.querySelector(".popup").style.display = "none";
}
)

//alert("hello")
function Animals(name, length, weight, lifespan, food, description, found, image) { //object
  this.name = name;
  this.length = length;
  this.weight = weight;
  this.lifespan = lifespan;
  this.food = food;
  this.description = description;
  this.found = found;
  this.image = image; 
}

let echidna = new Animals ("Echidna", 76, 10, 50, "insects", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "Throughout Australia", "../images/echidna.jpg");

let tasmanian_devil = new Animals ("Tasmanian Devil", 70, 10, 50, "A predator (eats meat from other animals like wallabies and wombats", " The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.", "Tasmania", "../images/tasmanian devil.jpg");

let quokka = new Animals ("quokka", 50, 3, 10, "Plant eaters", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.", "Rottnest Island and a few places on mainland Western Australia", "../images/quokka.jpg");

let animals = [echidna, tasmanian_devil, quokka];


const getAllAnimals = () => {
  animals.forEach(e => {
    const animal_info = document.querySelector(".animal_names");
    animal_info.innerHTML = animal_info.innerHTML + `<li>${e.name}</li>`;
  });
}


const showAnimal = (index) => {
  const animals = document.getElementById("content");
  let animal = getAnimal(index);
  animals.innerHTML = ` 
  <h2 class="animal_name">${animal.name}</h2> 
    <img src="${animal.image}" alt="${animal.name}" class="image"> 
    <p><strong>Length:</strong> ${animal.length} meters</p>
    <p><strong>Lifespan:</strong> ${animal.lifespan} years</p>
    <p><strong>Weight:</strong> ${animal.weight} kg</p>
    <p><strong>Found:</strong> ${animal.found}</p>
    <p><strong>Food:</strong> ${animal.food}</p>
    <p><strong>Description:</strong> ${animal.description.substring(0, 38)}
    <span class="dots">...</span>
    <span class="more hidden">${animal.description.substring(200)}</span></p>
    <button class="read-more">Read more</button> `;
  // Add an event listener to the "Read more" button
  const readMoreButton = animals.querySelector(".read-more");
  readMoreButton.addEventListener("click", function () {
    const dots = animals.querySelector(".dots");
    const moreText = animals.querySelector(".more");

    if (moreText.classList.contains("hidden")) {
      // Show the hidden text and update button text
      moreText.classList.remove("hidden");
      dots.style.display = "none";
      readMoreButton.textContent = "Read less";
    } else {
      // Hide the extra text and reset button text
      moreText.classList.add("hidden");
      dots.style.display = "inline";
      readMoreButton.textContent = "Read more";
    }
  });
}

getAllAnimals();

const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', (e) => {
    showAnimal(e.target.textContent);

  }
  )
})


// This function returns animal data 

const getAnimal = (animal) => {
  return animals.find(o => o.name === animal) || null; // Return null if no match
}


/*const button = document.querySelector(".menu li:nth-child(2) a"); 
button.addEventListener("click", (event) => {
  event.preventDefault();
  
  const container = document.querySelector(".mammals-container");
  container.innerHTML = '';

  
  animals.forEach(animal => {
      const animals = document.createElement('div');
      animals.classList.add('animal-info');
      
      animals.innerHTML = `
      <div class="animal-div">
          <h2 class="animal-name">${animal.name}</h2>
          <img src="${animal.image}" alt="${animal.name}" class="animal-image">
          <p><strong>Lifespan:</strong>${animal.lifespan} years old</p>
          <p><strong>Length:</strong> ${animal.length} meters</p>
          <p><strong>Weight:</strong> ${animal.weight} kg</p>
          <p><strong>Food:</strong> ${animal.food}</p>
          <p><strong>Found in:</strong> ${animal.found}</p>
          <p><strong>Description:</strong> ${animal.description.substring(0, 200)}
          <span class="dots">...</span>
          <span class="more hidden"> ${animal.description.substring(200)}</span></p>
              <button onclick="readmore(this)" class="read-more">Read More</button>
              </div>
      `;
      const readMoreButton = animals.querySelector(".read-more");
      readMoreButton.addEventListener("click", function (){
          const dots = animals.querySelector(".dots");
          const moreText = animals.querySelector(".more");

          if(moreText.classList.contains("hidden")) {
              moreText.classList.remove("hidden");
              dots.computedStyleMap.display = "none";
              readMoreButton.textContent = "Read Less";
          }else {
              moreText.classList.add("hidden");
              dots.style.display = "inline";
              readMoreButton.textContent = "Read More";
          }
      })
      
      container.appendChild(animals);
  });
});

/*let noOfCharac = 150;
let animalInfo = document.querySelectorAll(".animalInfo")
contents.forEach(content => {
  if(content.textContent.length < noOfCharac) {
      content.nextElementSibling.computedStyleMap.display = "none"
  }
  else{
      let displayText = content.textContent.slice(0,noOfCharac);
      let moreText = content.textContent.slice(noOfCharac);
      console.log(displayText)
      content.innerHTML = `${displayText}<span class = "dots">...</span><span class="hide more"> ${moreText}</span>`

  }
});
function readMore(btn) {
  let post = btn.parentElement;
  console.log(post)
  post.querySelector("dots").classList.toggle("hide");
  post.querySelector("more").classList.toggle("hide");
  btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More"
}


let searchInput = document.querySelector("#search")
document.querySelector("#search").addEventListener("input", () => console.log(searchInput.value)) //input event(console logs every time yountype in the search bar)

//document.querySelector("#search").addEventListener("change", () =>  console.log(searchInput.value)) //change event(console logs and displays in the console when you move the mouse)

const findTab = () => {
  animaltabs.forEach(tab => {
      if (tab.textContent.toLowerCase().includes(searchInput.value)) {
          tab.classList.add("active")
      } else {
          tab.classList.remove("active")
      }
  })
}
searchInput.addEventListener("input", findTab)

searchInput.addEventListener("change", findTab)*/

