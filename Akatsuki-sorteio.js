let bonecos = ["Caio","Cassio","Carina","Carin","Norma","Allan","Vitor","Stephanie","Loco","Paloma","Murilo","Martin"];

function getNameRandom(min,max){
	let step1 = max - min +1;
	let step2 = Math.random() * step1;
	let result = Math.floor(step2) + min;

	console.log(result);

}