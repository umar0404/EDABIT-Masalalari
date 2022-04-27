function potatoes(str) {
	let res = /potato/g;
	console.log(str.match(res).length);
}
potatoes('potatopotatopotato')