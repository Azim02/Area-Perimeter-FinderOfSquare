class Form {

    constructor() {
      this.input = createInput("").attribute("placeholder", "        Side of the Square");
      this.button = createButton('Find');
      this.text1 = createElement();
      this.text2 = createElement();
    }

    display(){

      this.input.position(windowWidth/2-75, windowHeight/2-75);
      this.input.style('background', 'lightblue');

      this.button.position(windowWidth/2+50, windowHeight/2-50);
      this.button.style('background', 'yellow');

      this.button.mousePressed(()=>{
        
        finder.side = this.input.value();

        this.text1.html("Area - " + finder.side*finder.side);
        this.text1.position(windowWidth/2-75, windowHeight/2+50);

        this.text2.html("Perimeter - " + finder.side*4);
        this.text2.position(windowWidth/2-75, windowHeight/2+75);
      });
    }
}
  