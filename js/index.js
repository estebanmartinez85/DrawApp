import { DrawApp } from './drawApp.js';
let app = new DrawApp('app');

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

let width = getUrlParameter('width');
let height = getUrlParameter('height');

if(width === '' || height === ''){
    window.location.href = '/';
}

app.createCanvas(width, height);