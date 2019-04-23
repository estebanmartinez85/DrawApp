import { DrawApp } from '../js/drawApp.js';

document.body.innerHTML = 
`<body>
  <div id="app">
    <label for="width">Width: </label>
    <input type="text" id="width" value=5>
    <label for="height">Height: </label>
    <input type="text" id="height" value=5>
  </div>
</body>`;

test("Create Canvas With TextBox Dimensions", () => {
    let elementId = 'app';
    let app = new DrawApp(elementId);
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    app.createCanvas(width, height);

    expect(app.canvas.width).toBe(5);
    expect(app.canvas.height).toBe(5);
});