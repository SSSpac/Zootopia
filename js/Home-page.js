


const toggleButton = document.getElementById('toggle-btn')
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
      <p> G'day and welcome to our site showcasing the incredible wildlife of Australia! Prepare to be amazed by the stunning images and  about somme of the most unique and diverse creatures on this planet. From odd birds to feisty Tasmanian Devils, we've got it all covered here. Whether you're a nature enthusiast looking to learn more about Aussie animals or just stopping by for a virtual safari, we promise you'll be thoroughly entertained. So sit back, relax, 
        and enjoy exploring the wonders of Down Under through our collection of photos and fun facts. And who knows, maybe you'll even discover your new favorite animal along the way! Cheers mate! </p>
    `;
    clickCount[animal] = 0;
    return; 
  }

  if (animal === "Echidna") {
    contentContainer.innerHTML = `
      <h2>Echidna</h2>
       <img src="images/echidna.jpg" alt="Echidna" style="width:400px;height:auto;">
      <p> Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs.
      Their lifespan is around 50 years, and their favorite food are insects, betles and worms.</p>
     
      <a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to Mamamls
    </a>    
      `;
  }
  if (animal === "Tasmanian Devil") {
    contentContainer.innerHTML = `
      <h2>Tasmanian Devil</h2>
             <img src="images/tasmanian devil.jpg" alt="Echidna" style="width:400px;height:auto;">

      <p> The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. A predator, that eats meat from other animals, lifespan around 5 years.
</p>
<a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to Mamamls
    </a> 
`;
  }
  if (animal === "Quokka") {
    contentContainer.innerHTML = `
      <h2>Quokka</h2>
             <img src="images/quokka.jpg" alt="Echidna" style="width:400px;height:auto;">
     <p>The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River, plant eaters, they munch on shrubs and grasses, lifespan around 10 years. </p>
    <a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to Mamamls
    </a> 
     `;
  }
  if (animal === "frill-necked lizard") {
    contentContainer.innerHTML = `
      <h2>Frill-necked Lizard</h2>
             <img src="images/frill-necked lizard.jpg" alt="Echidna" style="width:400px;height:auto;">

      <p>When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, they eat insects and spiders, lifespan around 20 years.
  </p>
  <a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to reptiles
    </a>  
  `;
  }
  if (animal === "Hawksbill Turtle") {
    contentContainer.innerHTML = `
      <h2>Hawksbill Turtle</h2>
            <img src="images/hawksbill turtle.jpg" alt="Hawksbill Turtle" style="width:400px;height:auto;">

      <p> The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. Feeds on other animals (sponges & jellyfish), sea plants, lifespan around 50 years.
 </p>
 <a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to reptiles
    </a>   
 `;
  }
 
  if (animal === "Perentie") {
    contentContainer.innerHTML = `
      <h2>Perentie</h2>
             <img src="images/perentie.jpg" alt="Echidna" style="width:400px;height:auto;">

<p>The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. life span around 20 years </p>
<a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to reptiles
    </a> 
    `;
  }

  if (animal === "Cassowary") {
    contentContainer.innerHTML = `
      <h2>Cassowary</h2>
             <img src="images/cassowary.jpg" alt="Echidna" style="width:400px;height:auto;">

      <p>It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly. They feed on Plants matter like fruit, insects, lifespan around 20 years.
</p>
<a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to birds
    </a>     
`;
  }
  if (animal === "Kookaburra") {
    contentContainer.innerHTML = `
      <h2>Kookaburra</h2>
             <img src="images/kookaburra.jpg" alt="Echidna" style="width:400px;height:auto;">
      <p>Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Insects and small animals life span around 20 years.</p>
    <a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to birds
    </a> 
      `;
  }
  if (animal === "Yellow Tailed Black Cockatoo") {
    contentContainer.innerHTML = `
      <h2>Yellow Tailed Black Cockatoo</h2>
             <img src="images/yellow tailed black cockatoo.jpg" alt="Echidna" style="width:400px;height:auto;">
      <p>It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. Fruit, seeds and other plant material, lifespan around 41 years.
  </p>
  <a href="test.html" style="margin-top: 10px; display: inline-block; padding: 10px; background-color: grey; color: white; text-decoration: none; border-radius: 5px;">
       Click to go to birds
    </a>  
  `;
  }
}

