let aprovados = new Array('Bia', 'Carlos', 'Ana'); 
console.log(aprovados); 

aprovados = ['Bia', 'Carlos', 'Ana']; 
console.log(aprovados[0]); 
console.log(aprovados[1]);
console.log(aprovados[2]); 

aprovados[3] = 'Paula';
aprovados.push('Adria'); 
console.log(aprovados.length); 

aprovados[9] = 'Donatelo';
console.log(aprovados.length);  

aprovados.sort(); 
console.log(aprovados); 

delete aprovados[1]; 

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1);
console.log(aprovados); 