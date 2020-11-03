class Slingshot {
    constructor(bodyA,pointB){
        var  option ={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
        
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){

        
        var pointA =this.sling.bodyA.position
        
        line(pointA.x,pointA.y,this.sling.pointB.x,this.sling.pointB.y)
        }
    }
}