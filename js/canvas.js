export function canvas(width, height){
    if(width === undefined || height === undefined){
        throw new Error("Must have a width and height.");
    }
    let c = document.createElement('canvas');
    c.width = width;
    c.height = height; 

    return c;
}
