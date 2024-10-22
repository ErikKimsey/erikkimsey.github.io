import React, { useEffect, useLayoutEffect, useState } from "react";
import Sketch from "react-p5";
import deviceType from "../utils/mobileDetection";


// Define array to hold snowflake objects

export default function Bubbling({ props }) {

    const [dimen, setDimens] = useState();
    const [devType, setDevType] = useState();
    const [p5, setP5] = useState();

    let hexagon;
    let hexagons = [];

    useEffect(() => {
        setDimens(props);
        let device = deviceType();
        setDevType(device);
        // window.addEventListener('resize', windowResized);
        return () =>
            console.log("fun time");
        // window.removeEventListener('resize', windowResized)
    }, []);

    useLayoutEffect(() => {
        setDimens(props);
        let device = deviceType();
        setDevType(device);
        // window.addEventListener('resize', windowResized);
    }, []);

    function preload(p5) {
        hexagon = p5.loadImage("../assets/images/hexagon.png");
    }

    function setup(p5, canvasParentRef) {

        p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);

        p5.angleMode(p5.DEGREES);

        // Create snowflake objects
        for (let i = 0; i < 20; i++) {
            // Add a new snowflake object to the array
            hexagons.push(new Hexagon(hexagon));
        }
    }

    function draw(p5) {
        p5.background(0);

        // Update and display each snowflake in the array
        let currentTime = p5.frameCount / 120;

        for (let hex of hexagons) {
            // Update each snowflake position and display
            hex.update(currentTime);
            hex.display();
        }
    }

    return (
        <>
            <Sketch preload={preload} setup={setup} draw={draw} style={{ position: "fixed", top: 0, left: 0, zIndex: 3 }} />
        </>)
}


// Define the snowflake class

class Hexagon {
    constructor(p5, hex) {
        this.p5 = p5;
        this.hex = hex
        this.posX = 0;
        this.posY = p5.random(p5.height, 0);
        this.initialAngle = p5.random(0, 360);
        this.size = p5.random(12, 50);
        this.radius = p5.sqrt(p5.random(p5.pow(p5.width / 2, 2)));
        this.color = p5.color(255);
    }

    update(time) {
        // Define angular speed (degrees / second)
        let angularSpeed = 5;

        // Calculate the current angle
        let angle = this.initialAngle + angularSpeed * this.p5.time;

        // x position follows a sine wave
        this.posX = this.p5.width / 2 + this.radius * this.p5.sin(angle);

        // Different size snowflakes fall at different y speeds
        let ySpeed = 8 / this.size;
        this.posY -= ySpeed;

        // When snowflake reaches the bottom, move it to the top
        if (this.posY < 0) {
            this.posY = this.p5.height;
        }
    }

    display() {
        this.p5.rotateX(this.p5.radians(this.p5.rotationX += this.p5.angularSpeed / 2));
        this.p5.rotateY(this.p5.radians(this.p5.rotationY -= this.p5.angularSpeed) / 3);
        this.p5.rotateZ(this.p5.radians(this.p5.rotationZ += this.p5.angularSpeed / 3))

        this.p5.image(this.hex, this.posX, this.posY, this.size, this.size);
    }
}