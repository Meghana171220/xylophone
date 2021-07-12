var columns=document.querySelectorAll(".col");

for(var i=0; i<columns.length; i++){
	//console.log(columns[i]);
	columns[i].addEventListener("click",playNote);
	//columns[i].addEventListener("keyup",playNote);
}
//document.addEventListener("keypress",function(event){
//	playNote(event.key.toUpperCase());
//});
function playNote(key){
	var audioNote;

	console.log(this.innerHTML);
	
	switch(this.innerHTML.trim()){
		case 'A': audioNote='1';
		break;
		case 'B': audioNote='2';
		break;
		case 'C': audioNote='3';
		break;
		case 'D': audioNote='4';
		break;
		case 'E': audioNote='5';
		break;
		case 'F': audioNote='6';
		break;
		case 'G': audioNote='7';
		break;

	}
	var audio=new Audio('/xylophone/sounds/note'+audioNote+'.wav');
	audio.play();
};