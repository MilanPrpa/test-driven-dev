




// Constructor function, this creates the object.
// Helps to capatalize contructor function.
function Person(name) {
	this.name = name;
	this.species = 'Human';
	return this;
};

// Use the new keyword to make this work

new Person('Milan');