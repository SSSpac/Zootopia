
function Animal(image, name, group, lifespan, weight, food, length, found, description) {
    this.image = image;
    this.name = name;
    this.group = group;
    this.lifespan = lifespan;
    this.weight = weight;
    this.food = food;
    this.length = length;
    this.found = found;
    this.description = description;
  }
  
  let frilledNeckLizard = new Animal("./images/frill-necked lizard.jpg", "Frilled-neck Lizard", "Reptile", "20 years", "90cm", "Small insects and spiders", "1kg", "Norther Australia", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.The frilled lizard inhabits northern Australia and southern New Guinea. Its Australian range stretches from the Kimberley region of Western Australia east through the Top End of the Northern Territory to Queensland's Cape York Peninsula and nearby islands of Muralug, Badu, and Moa, and south to Brisbane.[1][8] In New Guinea, it lives in the Trans-Fly ecosystem on both the Papua New Guinean and Indonesian sides of the island. The species mainly inhabits savannahs and sclerophyll woodlands. It prefers highly elevated areas with good soil drainage and a greater variety of tree species, mostly Eucalyptus species, and avoids lower plains with mostly Melaleuca and Pandanus trees. Frilled lizards also prefer areas with less vegetation on the ground, as they can then better spot prey from aboveThese lizards are more active during the wet season, when they select smaller trees and are more commonly seen near the ground; during the dry season, they use larger trees and are found at greater heights. Frilled lizards do not enter torpidity during the dry season, but they can greatly reduce their energy usage and metabolic rate in response to less food and water. Body temperatures can approach 40 °C (104 °F). The species will bask vertically on the main tree trunk in the morning and near the end of the day, though in the dry season they cease basking at a lower body temperature to better maintain energy and water. When it gets hotter during day, they climb higher in the canopy for shade. Frilled lizards will use large trees and termite mounds as refuges during wildfires. After a forest is burnt, the lizards select trees with more continuous canopies.");
  let hawksbillTurtle = new Animal("./images/hawksbill turtle.jpg", "Hawksbill Turtle", "Reptile", "50 years", "80cm", "Sponges, jellyfish, sea plants", "50kg", "Tropical coasts of Queensland,Northern Territory and Western Australia", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.The appearance of the hawksbill is similar to that of other marine turtles. In general, it has a flattened body shape, a protective carapace, and flipper-like limbs, adapted for swimming in the open ocean. E. imbricata is easily distinguished from other sea turtles by its sharp, curving beak with prominent tomium, and the saw-like appearance of its shell margins. Hawksbill shells slightly change colors, depending on water temperature. While this turtle lives part of its life in the open ocean, it spends more time in shallow lagoons and coral reefs. The World Conservation Union, primarily as a result of human fishing practices, classifies E. imbricata as critically endangered. Hawksbill shells were the primary source of tortoiseshell material used for decorative purposes. The Convention on International Trade in Endangered Species (CITES) regulates the international trade of hawksbill sea turtles and products derived from them Adult hawksbill sea turtles are primarily found in tropical coral reefs. They are usually seen resting in caves and ledges in and around these reefs throughout the day. As a highly migratory species, they inhabit a wide range of habitats, from the open ocean to lagoons and even mangrove swamps in estuaries.[10][37] Little is known about the habitat preferences of early life-stage E. imbricata; like other young sea turtles, they are assumed to be completely pelagic, remaining at sea until they mature");
  let perentie = new Animal("./images/perentie.jpg", "Perentie", "Reptile", "20 years", "2.5cm", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "20kg", "Desserts", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.Perenties are the largest living species of lizard in Australia. Perenties can grow to lengths of 2.5 m (8 ft 2 in) and weigh up to 20 kg (44 lb), possibly up to 3 m (9 ft 10 in) and 40 kg (88 lb), making it the fourth-largest extant species of lizard (exceeded in size only by the Komodo dragon, Asian water monitor and crocodile monitor).[7][8][9] However, perenties are very lean among large monitors, making it significantly less bulky than the rock monitor at a similar size.Perenties generally avoid human contact and often retreat before they are seen. Being able diggers, they can excavate a burrow for shelter in only minutes. Their long claws enable them to climb trees easily. They often stand on their back legs and tails to gain a better view of the surrounding terrain.");
  
  let animals = [frilledNeckLizard, hawksbillTurtle, perentie,];
  
  const getAllAnimals = () => {
    animals.forEach(e => {
      const animal_info = document.querySelector(".animal_names");
      animal_info.innerHTML = animal_info.innerHTML + `<li>${e.name}</li>`;
    });
  }
  
  const onClick = {
    lastClicked: null,
    showWelcomeMsg: false,
  }
  
  const showAnimal = (animalName) => {
    const animalInfo = document.getElementById("content");
    let animal = getAnimal(animalName);
  
  
    if(onClick.lastClicked === animalName && !onClick.showWelcomeMsg){
      animalInfo.innerHTML = `<h2>Embark on a Reptilian Adventure!</h2>
      <p>Welcome, intrepid explorer! From the deserts to the rainforests, reptiles inhabit some of the most extreme and beautiful places on Earth. Let’s dive into their world and uncover the secrets of their survival.</p>`
      onClick.showWelcomeMsg = true;
    }else{
    animalInfo.innerHTML = ` 
      <img src="${animal.image}" alt="${animal.name}" class="animal_imge"> 
      <h2 class="animal_name">${animal.name}</h2> 
      <p>${animal.description.substring(0, 200)}
      <span class="dots">...</span>
      <span class="more hidden">${animal.description.substring(200)}</span></p>
      <button class="read-more">Read more</button> 
      <p><strong>Group:</strong> ${animal.group}</p>
      <p><strong>Lifespan:</strong> ${animal.lifespan}</p>
      <p><strong>Weight:</strong> ${animal.weight}</p>
      <p><strong>Found:</strong> ${animal.found}</p>
      <p><strong>Food:</strong> ${animal.food}</p>`;

    // Add an event listener to the "Read more" button
    const readMoreButton = animalInfo.querySelector(".read-more");
    readMoreButton.addEventListener("click", function () {
      const dots = animalInfo.querySelector(".dots");
      const moreText = animalInfo.querySelector(".more");
  
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
  
    onClick.lastClicked = animalName;
    // Reset welcome message
    onClick.showWelcomeMsg = false; 
  }
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
    // Return null if no match
    return animals.find(o => o.name === animal) || null; 
  }
  
  
  
  
  