function Animal(name) {
    this.name = name;
    this.speed = 0;
}

// function Snake1(name) {
//     this.name = name;
//     this.speed = 0;
// }

Animal.prototype.run = function () {
    alert(this.name + " бежит!")
}

// Snake1.prototype.run = function () {
//     alert(this.name + " ползёт!")
// }



function Rabbit(name) {
    Animal.apply(this, arguments); // вызов конструктора родителя
}
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
    Animal.prototype.run.apply(this); // вызов метода run родителя, который выполнит alert(this.name + " бежит!") 
    alert(this.name + " подпрыгивает!"); // добавлено свое действие к действию родителя
    // let rabbit = new Rabbit('Кролик');
    // rabbit.run();
};

let rabbit = new Rabbit('Кролик');
rabbit.run();



function Dog(name) {
    Animal.apply(this, arguments); // вызов конструктора родителя
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
    Animal.prototype.run.apply(this); // вызов метода run родителя, который выполнит alert(this.name + " бежит!")
    alert(this.name + " виляет хвостом!"); // добавлено свое действие к действию родителя
};

let dog = new Dog('Пёс');
dog.run();



function Cat(name) {
    Animal.apply(this, arguments); // вызов конструктора родителя
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.run = function () {
    Animal.prototype.run.apply(this); // вызов метода run родителя, который выполнит alert(this.name + " бежит!")
    alert(this.name + " мурлыкает!"); // добавлено свое действие к действию родителя
};

let cat = new Cat('Кот');
cat.run();



function Cock(name) {
    Animal.apply(this, arguments); // вызов конструктора родителя
}
Cock.prototype = Object.create(Animal.prototype);
Cock.prototype.constructor = Cock;

Cock.prototype.run = function () {
    Animal.prototype.run.apply(this); // вызов метода run родителя, который выполнит alert(this.name + " бежит!")
    alert(this.name + " кудахчет!"); // добавлено свое действие к действию родителя
};

let cock = new Cock('Петух');
cock.run();



function Elephant(name) {
    Animal.apply(this, arguments); // вызов конструктора родителя
}
Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.constructor = Elephant;

Elephant.prototype.run = function () {
    Animal.prototype.run.apply(this); // вызов метода run родителя, который выполнит alert(this.name + " бежит!")
    alert(this.name + " топает!"); // добавлено свое действие к действию родителя
};

let elephant = new Elephant('Слон');
elephant.run();



function Snake(name) {
    Animal.apply(this, arguments); // вызов конструктора родителя
}
// Snake.prototype = Object.create(Snake1.prototype);
// Snake.prototype.constructor = Snake;

Snake.prototype.run = function () {
    // Snake1.prototype.run.apply(this); // вызов метода run родителя, который выполнит alert(this.name + " бежит!")
    alert(this.name + " шипит!"); // добавлено свое действие к действию родителя
};

let snake = new Snake('Змея');
snake.run();

