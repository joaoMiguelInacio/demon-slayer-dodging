class Obstacles { 
    constructor (canvas, ctx) {
        this.canvas = canvas;
		this.ctx = ctx;
		this.image = null;
        this.obstaclesSpeed = 10;
        this.width = 100;
		this.height = 100;
        this.y = enemy.y;
		this.x = canvas.width-150;
        this.init();
    }

    init(){
        this.image = new Image();
		this.image.src = "./assets/images/footagecrate-animestrike2@2X.png";
    }

    draw(){
        if(this.image){
                this.ctx.drawImage(
                    this.image, 
                    this.x, 
                    this.y,
                    this.width, 
                    this.height);
        }
    }

    move(){
        this.ctx.drawImage(
            this.image, 
            this.x -= this.obstaclesSpeed, 
            this.y,
            this.width, 
            this.height);
    }
}

class Obstacles1 extends Obstacles {
    constructor (canvas, ctx) {
        super(canvas,ctx);
        this.obstaclesSpeed = 4;
        this.width = 100;
		this.height = 100;
        this.y = enemy.y;
		this.x = canvas.width-150;
        this.init();
    }
}

class Obstacles2 extends Obstacles {
    constructor (canvas, ctx) {
        super(canvas,ctx);
        this.obstaclesSpeed = 4;
        this.width = 100;
		this.height = 100;
        this.y = enemy.y;
		this.x = canvas.width-150;
        this.init();
    }
}

class Obstacles3 extends Obstacles {
    constructor (canvas, ctx) {
        super(canvas,ctx);
        this.obstaclesSpeed = 4;
        this.width = 100;
		this.height = 100;
        this.y = enemy.y;
		this.x = canvas.width-150;
        this.init();
    }
}