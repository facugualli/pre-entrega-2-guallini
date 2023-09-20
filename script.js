// Dragon Ball wiki
/// Informacion sobre los oersonajes (nombre, raza, ataque 1, ataque 2 y transformaciones)
//// Se puede buscar a los guerreros por raza, ataques y transformaciones.
///// Crea tu propio Guerrero Z.
let guerrero;
const personajes = [];

personajes.push(new Personaje(`GOKU`,`SAYAYIN`,`KAMEHAMEHA`,`GENKIDAMA`,`SUPER SAYAYIN`)); 
personajes.push(new Personaje(`VEGETA`,`SAYAYIN`,`BIG BANG ATTACK`,`GALICK GUN`,`SUPER SAYAYIN`)); 
personajes.push(new Personaje(`GOHAN`,`SAYAYIN`,`MASENKO`,`KAMEHAMEHA`,`SUPER SAYAYIN`)); 
personajes.push(new Personaje(`PICCORO`,`NAMEKUSEI`,`MAKANKOSAPO`,`ATAQUE MISTICO`,`FUSION NAMEKIANA`)); 
personajes.push(new Personaje(`KRILIN`,`TERRICOLA`,`KIENSAN`,`KAMEHAMEHA`,`KAIO-KEN`)); 
personajes.push(new Personaje(`FREEZER`,`ALIENIGENA`,`DISCO MORTAL`,`TAJO MORTAL`,`GOLDEN FREEZER`)); 
personajes.push(new Personaje(`MAESTRO ROSHI`,`TERRICOLA`,`KAMEHAMEHA`,`MAFUBA`,`100% PODER`));

alert(`Bienvenido al Dragon Ball Wiki, aca vas a poder ver los atributos de los personajes principales y crear tu propio Guerrero Z!`)

function mostrarPersonajeNuevo(nombre,raza,ataque1,ataque2,powerUp) {
    alert(`Ha nacido un nuevo Guerrero Z! \n Nombre: ${nombre} \n Raza: ${raza} \n Ataques: ${ataque1} y ${ataque2} \n Transformacion: ${powerUp}`)
};

do {
    let accion = prompt(`Elegi la opcion que quieras utilizar seleccionando el numero: \n
                        1- Informacion de personajes.
                        2- Crea tu propio Guerrero Z!.
                        3- Busca guerreros por sus raza.
                        4- Busca guerreros por sus ataques.`);
    if (accion == (1)) {
        guerrero = prompt(`Ingrese el nombre del guerrero que quiera ver: \n
                            1-Goku      2-Vegeta \n
                            3-Gohan       4-Piccoro \n
                            5-Krilin       6-Freezer \n
                            7-Maestro Roshi 
                            `);
        const mostrarInfo = personajes.find((item) => { return item.nombre === guerrero.toUpperCase()});
        function mostrarPersonaje() {
            alert(`Nombre: ${mostrarInfo.nombre} \n Raza: ${mostrarInfo.raza} \n Ataques: ${mostrarInfo.ataque1} y ${mostrarInfo.ataque2} \n Transformacion: ${mostrarInfo.powerUp}`);
        } 
        mostrarPersonaje();

    }else if (accion == 2) {
        let nombre = prompt(`Ingresa el nombre de tu Guerrero Z:`);
        let raza = prompt(`Ingresa la raza a la cual pertenece tu personaje: \n
                            - Sayayin
                            - Namekusei
                            - Terricola
                            - Alienigena`);
        let ataque1 = prompt(`Ingresa tu ataque principal: \n
                                - Kamehameha - Genkidama \n
                                - Big Bang Attack - Galick Gun \n
                                - Masenko - Makankosappo \n
                                - Ataque Místico - Kiensan \n
                                - Disco Mortal - Tajo Mortal \n
                                - Mafuba`);
        let ataque2 = prompt(`Ingresa tu ataque secundario: \n
                                - Kamehameha - Genkidama \n
                                - Big Bang Attack - Galick Gun \n
                                - Masenko - Makankosappo \n
                                - Ataque Místico - Kiensan \n
                                - Disco Mortal - Tajo Mortal \n
                                - Mafuba`);
        let powerUp = prompt(`Ingrese la transformacion que quieras realizar \n
                            - Super Sayayin 
                            - Kaio-ken
                            - 100% Poder
                            - Fusion namekusei`);

        const personajeNuevo = personajes.push(new Personaje(`${nombre}`,`${raza}`,`${ataque1}`,`${ataque2}`,`${powerUp}`)); 
        
        mostrarPersonajeNuevo(nombre,raza,ataque1,ataque2,powerUp);
    }else if (accion == 3) {
        guerrero = prompt(`Ingrese la raza de la cual quieras ver los guerreros: \n
                            1-SAYAYIN       2-TERRICOLA \n
                            3-NAMEKUSEI       4-ALIENIGENA`);

        const mostrarPorRaza = personajes.filter((item) => { return item.raza === guerrero.toUpperCase()});
        for (const personaje of mostrarPorRaza) {
            alert(`${personaje.nombre} es raza ${guerrero}`);
        } ;
        
    }else if (accion == 4) {
        guerrero = prompt(`Ingresa el ataque por el cual quieras filtrar: \n
                            - Kamehameha - Genkidama \n
                            - Big Bang Attack - Galick Gun \n
                            - Masenko - Makankosappo \n
                            - Ataque Místico - Kiensan \n
                            - Disco Mortal - Tajo Mortal \n
                            - Mafuba`);

        const mostrarPorRaza = personajes.filter((item) => { return item.ataque1 === guerrero.toUpperCase() || item.ataque2 === guerrero.toUpperCase()});
        for (const personaje of mostrarPorRaza) {
            alert(`${personaje.nombre} puede atacar con ${guerrero}`);
        } ;
    }else {
        alert(`La accion no es valida.`)
    }

    continuar = prompt(`Quiere hacer utilizar el Dragon Ball Wiki nuevamente? SI/NO`);

} while (continuar.toUpperCase() == `SI`);










