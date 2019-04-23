export class DrawApp {
    constructor(elementId){
        this.node = document.getElementById(elementId);
        this.canvas = null;
    }
    createCanvas(width, height){
        if(width === undefined || height === undefined){
            throw new Error("Must have a width and height.");
        }

        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'drawCanvas');
        this.canvas.height = height;
        this.canvas.width = width;

        this.node.appendChild(this.canvas);
    }
}
