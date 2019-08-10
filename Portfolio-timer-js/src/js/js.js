'use strict';

class Option {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createNewDiv(){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'new-div');
        document.body.appendChild(newDiv);
        let source = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
        newDiv.style.cssText = source;
    }

};

let newObj = new Option(200, 200, 'green', 12, 'center');
newObj.createNewDiv();

