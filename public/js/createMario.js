import {loadMarioSprite} from './sprites.js';
import Go from './traits/go.js'
import Jump from './traits/jump.js'
import Position from './traits/position.js'
import Entity from './entity.js'

export function createMario(){
  
    return loadMarioSprite()
    .catch(err=>{console.log(err.message)})
    .then(mario=>{
        const mario_entity = new Entity('mario',8);
        mario_entity.size.set(16,16);
       
        mario_entity.addTrait(new Jump());
        mario_entity.addTrait(new Position());
        mario_entity.addTrait(new Go());
        
        
        //add a draw method to mario entity
        mario_entity.draw = function drawMario(context){
            mario.draw('mario',context,this.pos.x,this.pos.y);
           
        }
        
        return mario_entity
    })
}