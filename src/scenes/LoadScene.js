export class LoadScene extends Phaser.Scene{
	constructor() {
		super({key: "LOAD"})
	}

	preload() {
		this.load.image("bg_grad", "./assets/images/bg-grad.jpg");
		this.load.image("snow_ball", "./assets/images/snow_ball.png");

		this.add.text(this.game.renderer.width/2-50, this.game.renderer.height/1.5+10, "Загрузка...", {color: 0xaaaaaa});
		let loadingBar = this.add.graphics({
			fillStyle: { color: 0x4682b4 }
		})
		this.load.on("progress", (percent)=>{
			loadingBar.fillRect(0, this.game.renderer.height/1.5, this.game.renderer.width, 5);
		})
	}

	create() {
		this.scene.start("MAIN");
	}
}