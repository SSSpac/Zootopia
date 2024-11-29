//alert("hello")
function Animals(name, length, weight, lifespan, food, description, found, image) {
    this.name = name;
    this.length = length;
    this.weight = weight;
    this.lifespan = lifespan;
    this.food = food;
    this.description = description;
    this.found = found;
    this.image = image; 
}

/*let cassowary = new Animals(
    "Cassowary", 
    20, 
    "birds", 
    "Plants matter like fruit, insects, and small animals like mice and lizards", 
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida", 
    1.7, 
    44, 
    "Queensland",
    "../images/cassowary.jpg"
);

let kookaburra = new Animals(
    "Kookaburra", 
    20, 
    "birds", 
    "Insects and small animals including snakes, frogs, and lizards", 
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    0.43, 
    0.3, 
    "Australia wide",
    "../images/kookaburra.jpg"
);

let yellowTailedBlackCockatoo = new Animals(
    "Yellow Tailed Black Cockatoo", 
    41, 
    "birds", 
    "Fruit, seeds, and other plant material", 
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.", 
    0.65, 
    0.9, 
    "South East Australia",
    "../images/yellowtailedblackcockatoo.jpg"
);

let animals = [cassowary, kookaburra, yellowTailedBlackCockatoo];

    //this.description = () => console.log(`${this.name}'s favorite sport is ${this.sport}`) 
};*/

let echidna = new Animals ("Echidna", 76, 10, 50, "insects", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "Throughout Australia", "../images/echidna.jpg");

let tasmanian_devil = new Animals ("Tasmanian Devil", 70, 10, 50, "A predator (eats meat from other animals like wallabies and wombats", " The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.", "Tasmania", "../images/tasmanian devil.jpg");
  
let quokka = new Animals ("quokka", 50, 3, 10, "Plant eaters", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.", "Rottnest Island and a few places on mainland Western Australia", "../images/quokka.jpg");

let animals = [echidna, tasmanian_devil, quokka];


const button = document.querySelector(".menu li:nth-child(2) a"); 
button.addEventListener("click", (event) => {
    event.preventDefault();
    
    const container = document.querySelector(".mammals-container");
    container.innerHTML = '';

    animals.forEach(animal => {
        const animalInfo = document.createElement('div');
        animalInfo.classList.add('animal-info');
        
        animalInfo.innerHTML = `
            <h3>${animal.name}</h3>
            <img src="${animal.image}" alt="${animal.name}" class="animal-image">
            <p><strong>Lifespan:</strong> ${animal.lifespan} years</p>
            <p><strong>Food:</strong> ${animal.food}</p>
            <p><strong>Description:</strong> ${animal.description}</p>
                <button class="read-more">Read More</button>
            <p><strong>Length:</strong> ${animal.length} meters</p>
            <p><strong>Weight:</strong> ${animal.weight} kg</p>
            <p><strong>Found in:</strong> ${animal.found}</p>
        `;
        
        container.appendChild(animalInfo);
    });
});


/*let searchInput = document.querySelector("#search")
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
