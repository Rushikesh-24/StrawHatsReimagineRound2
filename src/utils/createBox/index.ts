//@ts-nocheck
import { Bodies } from 'matter-js';

function createBox(item, width, height, x){

    const box = {
        w: width,
        h: height,
        body: Bodies.rectangle(x+50,20, width, height),
        elem: item,
        render() {
            const {x, y} = this.body.position;

            item.style.top = `${y - this.h / 2}px`;
            item.style.left = `${x - this.w / 2}px`;
            item.style.transform = `rotate(${this.body.angle}rad)`;
        },
    };
    box.body.restitution = 0.2
    return box
}

export { createBox }