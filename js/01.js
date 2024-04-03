// operador spread caso 1

const pokemonData = (name, ps, atk, def, speed) => {

    console.log("Nombre: ", name);
    console.log("Vida: ", ps);
    console.log("Ataque: ", atk);
    console.log("Defensa: ", def);
    console.log("Velocidad: ", speed);
    };

    let pokemon = ["Pikachu", 35, 55, 40, 90];

    pokemonData(pokemon[0], pokemon[1], pokemon[2], pokemon[3], pokemon[4]);

    pokemonData(...pokemon);

