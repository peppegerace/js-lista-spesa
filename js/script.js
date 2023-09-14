// 1. Creo un array.

// 2. Creo le condizioni di partenza.

// 3. Utilizzo un ciclo while per stampare gli elementi della lista.

// 4. Creo un elemento <li> per ogni elemento nella lista della spesa.

// 5. Imposto il testo dell'elemento <li>.

// 6. Aggiungo l'elemento <li> alla lista <ul> nell'html.

// 7. Incremento le condizioni di partenza per passare all'elemento successivo.

// 1.
let listaSpesa = ['pane','latte','biscotti','carne','uova','legumi'];

// 2.
let contatore = 0;

const listaUl = document.querySelector('.lista-spesa');

// 3
while (contatore < listaSpesa.length) {
  // 4.
  const elementoSpesa = document.createElement("li");
  console.log(contatore)

  // 5.
  elementoSpesa.textContent = listaSpesa[contatore];

  // 6.
  listaUl.append(elementoSpesa);

  // 7.
  contatore++;
}