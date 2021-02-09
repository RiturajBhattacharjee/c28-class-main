class Chase{
    constructor(body1,point2){
   var options={
       bodyA:body1,
       pointB:point2,
       stiffness:0.04,
       length:10
   } 
    this.chase=Constraint.create(options)
     this.pointB=point2  
    World.add(world,this.chase)
    }

    fly(){
        this.chase.bodyA=null
    }
    display(){
        if(this.chase.bodyA){
         
    
        strokeWeight(4)
        line(this.chase.bodyA.position.x,this.chase.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
}




