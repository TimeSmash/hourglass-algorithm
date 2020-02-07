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

function getHourglassSums(tops, middles, bottoms) {
	//each top + bottom are arrays with 3-length subarrays
	//The top[0] matches with the bottom[0]
	//The middle[0] should also match
	
	let arrayOfLongArrays = []
	//OUTER ARRAY 
	for(var x = 0; x < tops.length; x++){
		for(var y = 0; y < tops.length; y++){
			let hourglass = [...tops[x][y], middles[x][y], ...bottoms[x][y]]
			arrayOfLongArrays.push(hourglass)
    	}
    }
	return arrayOfLongArrays
}