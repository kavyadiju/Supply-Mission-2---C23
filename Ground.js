class Ground
{
    constructor(x,y,width,height)
    {
      
        var options={
                      isStatic:true
                    }

       

       this.body=Bodies.rectangle(x,y-20,width,height,options);
   
       this.width=width;
      this.height=height;
    
        World.add(world,this.body); 

    }
    display()
    {
    var pos=this.body.position;
     rectMode(CENTER);
     fill("red");
     rect(pos.x,pos.y+10,this.width,this.height);
    }
}