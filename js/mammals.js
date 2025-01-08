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

let echidna = new Animals("Echidna", 76, 10, 50, "insects", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus. The short-beaked echidna (Tachyglossus aculeatus), also called the short-nosed echidna, is one of four living species of echidna, and the only member of the genus Tachyglossus. It is covered in fur and spines and has a distinctive snout and a specialised tongue, which it uses to catch its insect prey at a great speed. Like the other extant monotremes, the short-beaked echidna lays eggs; the monotremes are the only living group of mammals to do so. The short-beaked echidna has extremely strong front limbs and claws, which allow it to burrow quickly with great power. As it needs to be able to survive underground, it has a significant tolerance to high levels of carbon dioxide and low levels of oxygen. It has no weapons or fighting ability but deters predators by curling into a ball and protecting itself with its spines. It cannot sweat or deal well with heat, so it tends to avoid daytime activity in hot weather. It can swim if needed. The snout has mechanoreceptors and electroreceptors that help the echidna to detect its surroundings.", "Throughout Australia", "../images/echidna.jpg");

let tasmanian_devil = new Animals("Tasmanian Devil", 70, 10, 50, "A predator (eats meat from other animals like wallabies and wombats", " The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion. It is a most unusual mammal, It is also a marsupial, related to koalas and kangaroos. Why the “fiery” name and reputation for something the size of a small dog? Devils are said to have fierce tempers! Their oversize head, neck, and jaws are well suited to crushing bones. They make eerie growls while searching for food at night. And when a group of devils feeds together at a carcass, harsh screeching and spine-chilling screams can be heard. Tasmanian devils have behaviors that may seem odd or scary to us, but they have a different meaning in devil society.", "Tasmania", "../images/tasmanian devil.jpg");

let quokka = new Animals("Quokka", 50, 3, 10, "Plant eaters", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws. Quokkas have a promiscuous mating system.After a month of gestation, females give birth to a single baby called a joey. Females can give birth twice a year and produce about 17 joeys during their lifespan. The joey lives in its mother's pouch for six months. Once it leaves the pouch, the joey relies on its mother for milk for two more months and is fully weaned around eight months after birth. Females sexually mature after roughly 18 months. When a female quokka with a joey in her pouch is pursued by a predator, she may drop her baby onto the ground; the joey produces noises which may serve to attract the predator's attention, while the mother escapes.", "Rottnest Island and a few places on mainland Western Australia", "../images/quokka.jpg");

let animals = [echidna, tasmanian_devil, quokka];

const welcomeMessage = document.querySelector(".content");
welcomeMessage.innerHTML = "<h2>Welcome to mammals</h2> <p>A mammal (from Latin mamma 'breast') is a vertebrate animal of the class Mammalia. Mammals are characterised by the presence of milk-producing mammary glands for feeding their young, a broad neocortex region of the brain, fur or hair, and three middle ear bones. These characteristics distinguish them from reptiles and birds, from which their ancestors diverged in the Carboniferous Period over 300 million years ago. Around 6,400 extant species of mammals have been described and divided into 27 orders. The study of mammals is called mammalogy. The largest orders of mammals, by number of species, are the rodents, bats, and eulipotyphlans (including hedgehogs, moles and shrews). The next three are the primates (including humans, monkeys and lemurs), the even-toed ungulates (including pigs, camels, and whales), and the Carnivora (including cats, dogs, and seals).</p>"

const getAllAnimals = () => {
  animals.forEach(event => {
    const animal_info = document.querySelector(".animal_names");
    animal_info.innerHTML = animal_info.innerHTML + `<li>${event.name}</li>`;
  });
}

const showAnimal = (animal_position) => {   //function
  const animals = document.querySelector(".content"); //will display in the content bar in html
  let animal = getAnimal(animal_position);
  animals.innerHTML = ` 
    <h3 class="animal_name">${animal.name}</h3> 
    <img src="${animal.image}" alt="${animal.name}" class="image"> 
    <p><strong>Length:</strong> ${animal.length} meters</p>
    <p><strong>Lifespan:</strong> ${animal.lifespan} years</p>
    <p><strong>Weight:</strong> ${animal.weight} kg</p>
    <p><strong>Found:</strong> ${animal.found}</p>
    <p><strong>Food:</strong> ${animal.food}</p>
    <p><strong>Description:</strong> ${animal.description.substring(0, 38)} 
    <span class="dots">...</span>
    <span class="more">${animal.description.substring()}</span></p>
    <button class="read-more">Read more</button> `; // substring extracts characters from start to end

  const readMoreButton = animals.querySelector(".read-more");
  readMoreButton.addEventListener("click", function () {  // Add an event listener to the "Read more" button

    const dots = animals.querySelector(".dots");
    const moreText = animals.querySelector(".more");
    const btnText = document.querySelector(".read-more")

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  });
}

getAllAnimals();

const items = document.querySelectorAll(".animal_names li");
items.forEach(item => {
  item.addEventListener("click", (event) => {
    showAnimal(event.target.textContent);

  }
  )
})

// This function returns animal data 

const getAnimal = (animal) => {
  return animals.find(object => object.name === animal);
}


