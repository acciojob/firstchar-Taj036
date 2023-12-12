function firstChar(text) {
  // your code here
	if(text===' ' || text===''){
		return '';
	}
	
	let ans = text.split('');
     let re=  ans.shift()
	return `"${re}"`;
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
