//function that creates an anagrams of all words in a text sample
function anagram(){

	let text = document.getElementById('text').innerHTML;
	let words = text.split(' ');


	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].split('');
		words[i] = words[i].sort();
		words[i] = words[i].join('');
	}

	let anagramWords = words.join(" ");

	document.getElementById('text').innerHTML = anagramWords;
};