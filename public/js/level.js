import Compositor from './compository.js';
import EntityCollider from './entityCollider.js';
import TileCollider from './tileCollider.js';

export default class Level {
    constructor(){
        this.compo = new Compositor();
        this.entities = new Set();
        //this.tiles_matrix = new Matrix();
        this.tile_collider =null;
        this.entity_collider = new EntityCollider(this.entities);
        this.duration = 0;

    }
    setCollisionGrid(matrix){
        //being set up in levelLoader, has three properties
        this.tile_collider = new TileCollider(matrix);
    }
    updateEntity(dt){
        this.entities.forEach(entity=>{
            //first update entity jump, go speed and then update position
            console.log('updating after dt.....');
            entity.updateBytime(dt,this); //this pointing to level 

            
            //check whether entities collide with tiles, entity position with tile_collider matrix
            if(entity.canDetectTiles){
                //test=>checkX or Y=>getTilebyRange=>getTilebyIndex
                this.tile_collider.test(entity);  
            }
            
            //check if overlap or collide with mario
            this.entity_collider.checkEntityOverlapMario(entity); 
            this.entity_collider.checkEntityCollideMario(entity); 
            
            //"this "is pointing to level
            this.duration +=dt;

        })
        
   
    }
}


