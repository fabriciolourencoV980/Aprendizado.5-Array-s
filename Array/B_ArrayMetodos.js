const pilotos = ['Vettel', 'Alonso', 'Raikkoen', 'Massa']; 
pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos); 

pilotos.push('Verstappen'); // Adiciona um novo elemento na ultima posição
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona um elemento no ínicio do array 
console.log(pilotos);

// Splice pode adicionar e remover elementos no array 

//Adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//Remover 
pilotos.splice(3, 1); 
console.log(pilotos);

//Retorna um novo Array 

const algunsPilotos1 = pilotos.slice(2); 
console.log(algunsPilotos1); 

const algunsPilotos2 = pilotos.slice(1, 4); 
console.log(algunsPilotos2); 