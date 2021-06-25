class paper
{
	constructor(x,y,r){
    var options={
isStatic = false,
'restitution':0.3,
'friction':0,
'density':1.2
}

this.body = bodies.circle(x, y, r, options)
this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("paper.png");
    
}


display(){

    
        var pos =this.body.position;
       imageMode(CENTER);
       push ();
        fill(255)
        circle(pos.x, pos.y, radius);
        pop();

}


 
}	