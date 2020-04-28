import Trait from './trait.js';

export default class KoopaBehavior extends Trait{
    constructor(){
        super('koopaBehavior');
        this.startKill = 0;
    }

    overlaps_entity(me,other){
        if(other.marioCollide){

            if(me.killable.sleepTime){
                
                if(other.velocity.y>me.velocity.y){
                    me.canDetectTiles = false; 
                    me.canBePush = false; 
                    if(this.startKill==0){
                        other.playerController.score +=200;
                        this.startKill += 1;
                    }
                }else if (other.velocity.y==me.velocity.y){
                    me.canDetectTiles = true;
                    me.canBePush = true;
                }
 
            }else{
                me.canDetectTiles =true;
                if(other.velocity.y>me.velocity.y){
                    other.marioCollide.bounceUp();
                    me.killable.letSleep();
                    me.walk.dir =0;
                    other.playerController.score +=100;
                
                }else if(other.velocity.y==me.velocity.y){
                    other.killable.killed();
                    other.go.dir =0;
                
                }
            }
            

            
        }
    }
}