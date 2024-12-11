function Animals(name, lifespan, group, food, description, length, weight, found, image) {
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;
}

let cassowary = new Animals(
  "Cassowary",
  20,
  "birds",
  "Plants matter like fruit, insects, and small animals like mice and lizards",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rainforest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
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
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.",
  0.65,
  0.9,
  "South East Australia",
  "../images/yellowtailedblackcockatoo.jpg"
);

let animals = [cassowary, kookaburra, yellowTailedBlackCockatoo];

function displaySpecificBirdInfo(birdName) {
  const container = document.getElementById('main-content');
  container.innerHTML = '';

  const bird = animals.find(animal => animal.name === birdName);

  if (bird) {
      const animalInfo = document.createElement('div');
      animalInfo.classList.add('animal-info');
      animalInfo.innerHTML = `
          <h3>${bird.name}</h3>
          <img src="${bird.image}" alt="${bird.name}" class="animal-image">
          <p><strong>Lifespan:</strong> ${bird.lifespan} years</p>
          <p><strong>Group:</strong> ${bird.group}</p>
          <p><strong>Food:</strong> ${bird.food}</p>
          <p><strong>Description:</strong>
              <span id="dots">${bird.description.substring(0, 200)}...</span>
              <span id="more" style="display:none;">${bird.description}</span>
          </p>
          <button class="read-more" onclick="myFunction(this)">Read more</button>
          <p><strong>Length:</strong> ${bird.length} meters</p>
          <p><strong>Weight:</strong> ${bird.weight} kg</p>
          <p><strong>Found in:</strong> ${bird.found}</p>
      `;
      container.appendChild(animalInfo);
  }
}

function myFunction(button) {
  const animalInfo = button.closest('.animal-info');
  const dots = animalInfo.querySelector('#dots');
  const moreText = animalInfo.querySelector('#more');

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerHTML = "Read more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      button.innerHTML = "Read less";
      moreText.style.display = "inline";
  }
}

const onClick = {
  birdsClicked: false,
};

const showBirdsWelcomeMessage = () => {
  const welcomeMessageContainer = document.getElementById("home-message");

  if (!onClick.birdsClicked) {
    welcomeMessageContainer.innerHTML = `
      <h2>Hi and Welcome to the Birds page!</h2>
      <p>We have three different birds here at the Zoo. To find more information about them, click on the button on the left side in the sidebar to find out more! Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. There are over 11,000 living species and they are split into 44 orders. More than half are passerine or "perching" birds. Birds have wings whose development varies according to species; the only known groups without wings are the extinct moa and elephant birds. Wings, which are modified forelimbs, gave birds the ability to fly, although further evolution has led to the loss of flight in some birds, including ratites, penguins, and diverse endemic island species. The digestive and respiratory systems of birds are also uniquely adapted for flight. Some bird species of aquatic environments, particularly seabirds and some waterbirds, have further evolved for swimming. The study of birds is called ornithology.</p>
    `;
    onClick.birdsClicked = true;
  } else {
    welcomeMessageContainer.innerHTML = "";
  }
};

const menuLinks = document.querySelectorAll('.menu-item');
menuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    menuLinks.forEach(item => {
      item.classList.remove('active');
    });

    event.target.classList.add('active');
    
    if (event.target.textContent === "Birds") {
      showBirdsWelcomeMessage();
    }
  });
});

const sidebarButtons = document.querySelectorAll('.animal-button');
sidebarButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const birdName = event.target.getAttribute('data-animal');
    displaySpecificBirdInfo(birdName);

    menuLinks.forEach(item => {
      item.classList.remove('active');
    });
  });
});