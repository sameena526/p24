class Ball{

    constructor(x,y,r){
    
         var options={
    
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:1.2
    
         }
    
    this.r=r;
    this.x=x;
    this.y=y;
      this.object= Bodies.circle(this.x,this.y,this.r/2,options);
    
         World.add(world,this.object);
    
    
    }
    display(){
    var pos=this.object.position;
    push ();
    translate (pos.x,pos.y);
    fill(255,0,255);
    rotate (this.object.angle);
    ellipse(0,0,this.r,this.r);
    pop ();
    
    
    }
    
    
    
    
    }