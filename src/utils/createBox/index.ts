//@ts-nocheck
import { Bodies } from 'matter-js';
const SOLID = 0x0001;
const IMAGE = 0x0002;
const NEXTBALL = 0x0003;
function createBox(item, width, height, x, y){

    const box = {
        w: width,
        h: height,
        body: Bodies.rectangle(x+50,y, width, height),
        elem: item,
        render() {
            const {x, y} = this.body.position;

            item.style.top = `${y - this.h / 2}px`;
            item.style.left = `${x - this.w / 2}px`;
            item.style.transform = `rotate(${this.body.angle/100}deg)`;
        },
    };
    box.body.restitution = 0.2
    //box.body.collisionFilter.mask = SOLI;
    return box
}

export { createBox }