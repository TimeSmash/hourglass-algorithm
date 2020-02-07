simpleseg = (array) => {
    let unprocessedSegs = []
    for(var i = 0; i<array.length-1; i++){
        unprocessedSegs.push(array.slice(i,i+3))
    }
    return unprocessedSegs.filter(a => a.length === 3)
}

function getHourglassTops(array){
	//bottom 2 rows should never be gotten
	//length=height
	let allTops = []
	for (var i = 0; i < array.length-2; i++){
    	allTops.push(simpleseg(array[i]))
	}
	return allTops
}

function getHourglassBottoms(array){
	let allBottoms = []
	for (var i = 2; i < array.length; i++){
		console.log(i)
    	allBottoms.push(simpleseg(array[i]))
	}
	return allBottoms
}

function getHourglassMiddles(array){
	let allMiddles = []
	array.forEach(line =>{
			allMiddles.push(line.slice(1,line.length-1))
	})
	allMiddles.shift();
	allMiddles.pop();
	return allMiddles;
}