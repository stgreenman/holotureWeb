var names = ['Aubrey', 'Luka', 'Parx'];

names.forEach(function(name) {
	console.log('forEach', name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
})

names.forEach((name) => console.log(name));

var returnMe = (name) => name + "!";

console.log(returnMe('Logan'));

var person = {
	name: 'Logan',
	greet: function() {
		names.forEach((name) => console.log(this.name + " says hi to " + name));
	}
};

person.greet();
