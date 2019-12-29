import {LoadScene} from "./scenes/LoadScene";
import {MainScene} from "./scenes/MainScene";

let game = new Phaser.Game({
	width: 300,
	height: 600,
	backgroundColor: 0x87CEEB,
	scene: [LoadScene, MainScene],
	parent: "main"
});
