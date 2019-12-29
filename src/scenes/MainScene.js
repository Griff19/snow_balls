import connect from '@vkontakte/vk-connect';
export class MainScene extends Phaser.Scene {
	constructor() {
		super({key: "MAIN"});

		this.count = 0;
	}

	init() {

	}


	create() {
		connect.send("VKWebAppInit", {});
		connect.subscribe((e) => console.log(e));
		connect
			.sendPromise('VKWebAppGetEmail')
			.then(data => {
				// Handling received data
				console.log(data.email);
			})
			.catch(error => {
				// Handling an error
			});


		let centerX = this.game.renderer.width/2;
		let centerY = this.game.renderer.height/2;

		this.add.image(0, 0, "bg_grad").setOrigin(0);
		this.add.text(0,0, "Играем!", {color: 0x010101});
		let countBall = this.add.text(0, 100, "Всего снежков " + this.count, {color: 0x010101});

		let snowBall = this.add.image(centerX, centerY, "snow_ball").setScale(1.3);
		snowBall.setInteractive();

		snowBall.on("pointerdown", ()=>{
			snowBall.setScale(1.2);
		})

		snowBall.on("pointerup", ()=>{
			snowBall.setScale(1.3);
			this.count += 1;
			countBall.setText("Всего снежков " + this.count);
		})
	}

	update() {

	}
}