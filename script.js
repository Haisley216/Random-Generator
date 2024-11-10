 let input = document.getElementById("userInput");
 let pushButton = document.getElementById("button");
 let outputText = document.getElementById("outputTxt");

 let fortunes = ["Treasure what you have.", "Follow your heart's strong desire.", "Take the time to be considerate of others.", "Wisdom comes from experience.", "Accept your independence and use it wisely."];
 pushButton.addEventListener("click", function(){
 	let userInputText = input.value;
 	generate(userInputText);
 	restyle();
 })

 function generate(incUserInput) {
 	let randomIndex = Math.floor(Math.random() * fortunes.length);
 	let selectedFortune = fortunes[randomIndex];
 	outputText.innerText = incUserInput + ", your fourtune is '" + selectedFortune + "'";
 }

function restyle() {

	let txtAlign = ["center", "left", "right"];
	let ranAlign = txtAlign[Math.floor(Math.random() * txtAlign.length)];
	outputText.style.textAlign= ranAlign;

	let BGcolor = ["#f5f5dc","#e6e6fa","#f0f8ff","#f0fff0","#ffecb3", "#ffd1dc", "#d1f2eb", "#f6e6d8"];
	let ranBGcolor = BGcolor[Math.floor(Math.random() * BGcolor.length)];
	outputText.style.backgroundColor = ranBGcolor;

	let txtcolor = ["#333333", "#ff00ff", "#ff69b4", "#e60000", "#4169e1"];
	let ranTxtcolor = txtcolor[Math.floor(Math.random() * txtcolor.length)];
	outputText.style.color = ranTxtcolor;

}
