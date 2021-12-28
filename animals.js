function Animal(name) {
    this.name = name;
    this.speed = 0;
}

function Rabbits(name) {
    this.name = name;
    this.speed = 0;
}

function Dogs(name) {
    this.name = name;
    this.speed = 0;
}

function Cocks(name) {
    this.name = name;
    this.speed = 0;
}

function Cats(name) {
    this.name = name;
    this.speed = 0;
}

function Snakes(name) {
    this.name = name;
    this.speed = 0;
}

function Elephants(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.run = function () {
    alert(this.name + " бежит!")
}

Rabbits.prototype.run = function () {
    alert(this.name + " бежит!");
};

Dogs.prototype.run = function () {
    alert(this.name + " скачет!");
};

Cocks.prototype.run = function () {
    alert(this.name + " дерётся!");
};

Cats.prototype.run = function () {
    alert(this.name + " крадётся!");
};

Snakes.prototype.run = function () {
    alert(this.name + " ползает!");
};

Elephants.prototype.run = function () {
    alert(this.name + " топает!");
};

function Rabbit(name) {
    Rabbits.apply(this, arguments);
}

function Dog(name) {
    Dogs.apply(this, arguments);
}

function Cock(name) {
    Cocks.apply(this, arguments);
}

function Cat(name) {
    Cats.apply(this, arguments);
}

function Snake(name) {
    Snakes.apply(this, arguments);
}

function Elephant(name) {
    Elephants.apply(this, arguments);
}

Rabbit.prototype = Object.create(Rabbits.prototype);
Rabbit.prototype.constructor = Rabbit;

Dog.prototype = Object.create(Dogs.prototype);
Dog.prototype.constructor = Dog;

Cock.prototype = Object.create(Cocks.prototype);
Cock.prototype.constructor = Cock;

Cat.prototype = Object.create(Cats.prototype);
Cat.prototype.constructor = Cat;

Snake.prototype = Object.create(Snakes.prototype);
Snake.prototype.constructor = Snake;

Elephant.prototype = Object.create(Elephants.prototype);
Elephant.prototype.constructor = Elephant;

Rabbit.prototype.run = function () {
    Rabbits.prototype.run.apply(this);
    alert(this.name + " подпрыгивает!");
};

Dog.prototype.run = function () {
    Dogs.prototype.run.apply(this);
    alert(this.name + " подскакивает!");
};

Cock.prototype.run = function () {
    Cocks.prototype.run.apply(this);
    alert(this.name + " кудахчет!");
};

Cat.prototype.run = function () {
    Cats.prototype.run.apply(this);
    alert(this.name + " мурлыкает!");
};

Snake.prototype.run = function () {
    Snakes.prototype.run.apply(this);
    alert(this.name + " шипит!");
};

Elephant.prototype.run = function () {
    Elephants.prototype.run.apply(this);
    alert(this.name + " визжит!");
};

let rabbit = new Rabbit('Кролик');
rabbit.run();
let dog = new Dog("Пёс");
dog.run();
let cock = new Cock("Петух");
cock.run();
let cat = new Cat("Кот");
cat.run();
let snake = new Snake("Змея");
snake.run();
let elephant = new Elephant("Слон");
elephant.run();
