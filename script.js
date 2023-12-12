function firstChar(text) {
  // your code here
	if(text===' ' || text===''){
		return ' ';
	}
	let ans = text.split('');
	return ans.shift()
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
