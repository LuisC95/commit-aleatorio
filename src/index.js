const messages = [
    "Asi fue como todo comenzo...",
    "Commit cometido",
    "El control de versiones es horrible",
    "COMMIT A TODOS LOS ARCHIVOS!",
    "Lo mismo que hacemos todas las noches, Pinky - tratar de conquistar el mundo!",
    "Carpetas Lock-S en posicion de ataque",
    "Este commit es una mentira",
    "Te lo explicare cuando seas mayor!",
    "Aqui hay dragones",
    "Reinventando la rueda. otra vez.",
    "Este no es el mensaje de commit que estas buscando",
    "Batman! (este commit no tiene padres)",
  ];
  
  const commitDivertido = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    commitDivertido
  };