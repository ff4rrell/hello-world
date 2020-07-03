let multiply =  (a, b) => {

	return a + b
};



//let multiply = function(a, b){
//	return a + b;
//};
let result = multiply(3 , 4);


const print = message => console.log(message);

//print(result)

const player = {
	name: "Catago",
	skills: ['a', 'b', 'c'],
	printSkills: function(){
		this.skills.forEach(skill => print(`${this.name} знает ${skill}`))
	}
}

//player.printSkills();



