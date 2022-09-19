

export default class P5Cursor {
    constructor(p5, diam) {
        this.p5 = p5;
        this.diam = diam;
        this.radius = 20;
        this.orbit = null;
        this.rate = 0.1;
        this.xMove = 50;

        this.color = this.p5.color("#fbf");
    }



    calcOrbit(rad) {
        let y = rad * this.p5.sin(this.rate) + this.p5.mouseY;
        let x = rad * this.p5.cos(this.rate) + this.p5.mouseX;
        this.rate += 0.1;
        return { x, y }
    }

    updateCursor() {
        if (this.xMove > 48) {
            this.xMove -= 2;
        } else if (this.xMove < 48) {
            this.xMove += 2;
        }

        this.xMove += this.p5.floor(this.p5.movedX / 5);

        let { x, y } = this.calcOrbit(this.radius);
        // this.p5.fill(this.p5.color("#32ff40"));
        // this.p5.noStroke();
        this.p5.noFill();
        this.p5.ellipse(x, y, this.diam);
        this.p5.stroke(this.color);


        // this.p5.line(this.p5.mouseX, this.p5.mouseY, this.p5.pmouseX, this.p5.pmouseY);

        // // this.p5.fill(255);
        // this.p5.noFill();
        // this.p5.rect(mX - 90, mY - 90, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX - 90, mY + 30, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX - 90, mY - 30, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX - 30, mY - 90, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX + 30, mY - 90, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX + 30, mY + 30, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX - 90, mY - 30, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX - 30, mY + 30, 60);
        // // this.p5.fill(255);
        // this.p5.stroke(this.color);
        // this.p5.noFill();
        // this.p5.rect(mX + 30, mY - 30, 60);

    }
}

