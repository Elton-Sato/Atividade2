
let audioPlayer = new Audio();

function playMusic(){
	audioPlayer.pause();
	console.log("debug1");
	let numero = prompt("Escolha uma música de 1 a 17:");
	console.log('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-' + numero + ".mp3");
	audioPlayer = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-' + numero + '.mp3');
	audioPlayer.play();
}

function stopMusic(){
	audioPlayer.pause();
	audioPlayer.currentTime = 0;
}
