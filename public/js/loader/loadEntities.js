import {loadMario} from '../entities/loadMario.js';
import {loadGoomba} from '../entities/loadGoomba.js';
import {loadKoopa} from '../entities/loadKoopa.js';
import {loadCannon} from '../entities/loadCannon.js';
import {loadBullet} from '../entities/loadBullet.js';


export function loadEntities(audioContext){
    const entitiyFactories = {};
    //closure 
    function add(name){
        return factory => entitiyFactories[name] = factory;
    }

    // return Promise.all([
    //     loadMario().then(marioEntity=>{entitiyFactories['mario'] =marioEntity}),
    //     loadGoomba().then(goombaEntity=>{entitiyFactories['goomba'] =goombaEntity}),
    //     loadKoopa().then(koopaEntity=>{entitiyFactories['koopa'] =koopaEntity}),
    // ])
    // return Promise.all([
    //     loadMario().then(marioEntity=>{add('mario')(marioEntity)}),
    //     loadGoomba().then(goombaEntity=>{add('goomba')(goombaEntity)}),
    //     loadKoopa().then(koopaEntity=>{add('koopa')(koopaEntity)}),
    // ])

    
    return Promise.all([
        loadMario(audioContext).then(add('mario')), // !default put returned value into parameter of callback function
        loadGoomba(audioContext).then(add('goomba')),
        loadKoopa(audioContext).then(add('koopa')),
        loadBullet(audioContext).then(add('bullet')),
        loadCannon(audioContext,entitiyFactories).then(add('cannon'))
    ])
    .then(()=> entitiyFactories);
}