var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
function isPermutation(A, B){
	if((Number.isInteger(A) ? !Number.isInteger(B) : Number.isInteger(B)) || (!Number.isInteger(A) && !Number.isInteger(B))){
		console.log("Expected integer input.");
		return;
	}
	// Create number set from integers
	var a = (A).toString(10).split("").map(function(t){return parseInt(t);});
	var b = (B).toString(10).split("").map(function(t){return parseInt(t);});
	if(a.length != b.length){
		//Easy give away
		return false;
	}
	// Initialize product as 1 so that we can add-assign our product properly
	var product = 1;
	for (i=0; i<a.length; i++){
		product *= primes[a[i]]/primes[b[i]];
	}

	if(product == 1){
		return true;
	}
	else{
		return false;
	}

}
