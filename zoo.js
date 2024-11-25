function Animals(name, lifespan, group, food, description, length, weigth, found) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weigth = weigth;
    this.found = found;
    this.description = () => console.log(`${this.name}'s weight is ${this.weigth}`)
}


let echidna = new Animals("Echidna", 50 + "years", "mammals", "insects such as ants and termites, beetle larvae and worms", "should be description here", 76 + "cm", 10 + "kg", "Throught Australia");
let tasmanianDevil = new Animals("Tasmanian Devil", 5 + "years", "mammals", "A predator, then eat meat from other animals such as wallabies and wombats", "should be a description here", 70 + "cm", 10 + "kg", "Tasmania");
let quokka = new Animals("Quokka", 10 + "years", "mammals", "Plant eaters, they munch on shrubs and grasses", "should be a description here", 50 + "cm", 3 + "kg", " Only found on Rottnest Island and a few places on mainland Western Australia");

let frillNeckedLizard = new Animals("Frill-Necked Lizard", 20 + "yeards", "reptiles", "Small insects and spiders", "should be a discription here", 90 + "cm", 1 + "kg", "Northern Australia");
let hawksbillTurtle = new Animals("Hawksbill Turtle", 50 + "years", "reptiles", "other animals (sponges & jellyfish), sea plants", "should be a discription here", 80 + "cm(carapace)", 50 + "kg", "Tropical coasts of Queensland, Northern Territory and Western Australia");
let perentie = new Animals("Perentie", 20 + "years", "reptiles", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "should be a discription here", 2.5 + "m", 20 + "kg", "Deserts");

let cassowary = new Animals("Cassowary", 20 + "years", "birds", "Plants matter like fruit, insects and small animals like mice amd lizards", "should be a disciption here", 1.7 + "m", 44 + "kg", "Queensland");
let kookaburra = new Animals("Kookaburra", 20 + "years", "birds", "Insects and small animals including snakes, frogs and lizards", "should be a discription here", 43 + "cm", 300 + "g", "Australia wide");
let yellowTailedBlackVockatoo = new Animals("Yellow Tailed Black Cockatoo", 41 + "years", "birds", "Fruit, seeds and other plant material", "should be a discription here", 65 + "cm", 900 + "grams", "South East Australia");

console.log(echidna.name)


let animals = [echidna, tasmanianDevil, quokka, frillNeckedLizard, hawksbillTurtle, perentie, cassowary, kookaburra, yellowTailedBlackVockatoo];

animals.forEach(animals => animals.description());