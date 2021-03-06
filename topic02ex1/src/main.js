
var Movie = require("./movie.js");
var Actor = require("./actor.js");
var Logger = require("./logger.js");

let film = new Movie("Harry Potter",2001,120);
film.play();
let logger = new Logger();
film.on('play',logger.log);//if you declare an event, it triggers automatically if
//it has the same name of the method
film.on('pause',logger.log);
film.pause();
film.play();

let Dumbledore = new Actor("Albus D.",88);

let actors = [
    new Actor("Dobby",33),
    new Actor("EL colo",19),
    new Actor("El peluca",55)
];

film.addCast(Dumbledore);
film.addCast(actors);
console.log(film.cast);

//ex 5 object called social
let Social = {
    share: friendName=>{console.log(friendName + " shares " + film.title)},
    like: friendName=>{console.log(friendName + " likes " + film.title)}
}
Object.assign(film,Social);//mixin, film mixes in with social
film.like("Victor");