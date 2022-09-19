
export default class LandingText {
    constructor(p5, w, text, font, color, dimens, size) {
        this.p5 = p5;
        this.w = w;
        this.text = text;
        this.liveString = "";
        this.cAt = "";
        this.textDrawn = false;
        this.font = font;
        this.color = color;
        this.dimens = dimens;
        this.size = size;
    }

    drawCompleteText() {
        this.p5.fill(this.color);
        this.p5.textSize(84);
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        this.p5.textFont(this.font);
        this.p5.text(this.liveString, this.dimens.left, this.dimens.top, this.dimens.width, this.dimens.height);
    }

    drawText(index) {
        if (index >= this.text.length) {
            this.textDrawn = true;
            return;
        }
        if (this.cAt !== this.text.charAt(index)) {
            this.cAt = this.text.charAt(index);
            this.liveString = this.liveString + this.cAt;

        }
        this.p5.fill(this.color);
        this.p5.textSize(84);
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        this.p5.textFont(this.font);
        this.p5.text(this.liveString, this.dimens.left, this.dimens.top, this.dimens.width, this.dimens.height);
    }
}

