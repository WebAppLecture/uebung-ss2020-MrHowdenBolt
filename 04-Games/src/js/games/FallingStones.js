import { GameTemplate } from "./GameTemplate.js"
import { MovableGameObject, Ball } from "../GameObject.js";

export class FallingStones extends GameTemplate {


        start() {
        this.player = new Player(175, 450, 50, 50, 5, 5);
        this.bullets = [];
        this.gameOver = false;
        this.stones = [];
            
        }

        draw(ctx){
            this.player.draw(ctx);
            if(this.bullets[0] != undefined) {
                this.bullets.forEach(bullet => bullet.draw(ctx));
            }    
        }

        update(ctx){
            this.player.update(ctx);
            if(this.bullets[0] != undefined) {
                this.bullets.forEach(bullet => bullet.update(ctx));
            }
        
        }

        createBullet() {
            if (this.bullets.length == 10){
                this.bullets = [];
            }
            this.bullets.push(new Ball(this.player.x, this.player.y, 20, 20, "#6bd26b", 0, -5));
        }

        createStones() {
        }

        bindControls() {
            this.inputBinding = {
                "left": this.player.left.bind(this.player), 
                "right": this.player.right.bind(this.player),  
                "up": this.createBullet.bind(this)
            };
        }



    

    static get NAME() {
        return "FallingStones";
    }

}


export class Player extends MovableGameObject {

    constructor(x, y, width, height, speed, points) {
        super(x, y, width, height, "#6bd26b", 0, 0);
        this.points = points;
        this.speed = speed;
    }
    left(bool) {    
        this.vx = bool * -this.speed; 
    }

    right(bool) {
        this.vx = bool * this.speed;
    }

    up(bool) {
        this.vy = bool * -this.speed;
    }

    


    update(ctx) {

        if(this.vy === 0 && this.vx === 0) {
            return;
        }
        if(this.y < 0) { // Top border
            this.y = 0;
        } 
        if(this.y + this.height > ctx.canvas.height) { // bottom border
            this.y = ctx.canvas.height - this.height;
        }
        if(this.x < 0) { // left border
            this.x = 0;
        } 
        if(this.x + this.width > ctx.canvas.width) { // right border
            this.x = ctx.canvas.width - this.width;
        }
        super.update();
    }


}

