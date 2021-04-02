class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
     
      this.width = width;
      this.height = height;
      World.add(myWorld,this.body);
      this.image=loadImage("images/rock1.png")
    }
    show()
    {
       var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
    }
  
  
  }
  