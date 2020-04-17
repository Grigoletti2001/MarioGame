import {loadMario} from '../entities/loadMario.js';
import {loadGoomba} from '../entities/loadGoomba.js';
import {loadKoopa} from '../entities/loadKoopa.js';


export function loadEntities(){
    const entitiyFactories = {};
    //return a callback function
    function add(name){
        return factory => entitiyFactories[name] = factory
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
        loadMario().then(add('mario')), // !default put returned value into parameter of callback function
        loadGoomba().then(add('goomba')),
        loadKoopa().then(add('koopa')),
    ])
    .then(()=> {return entitiyFactories});
}