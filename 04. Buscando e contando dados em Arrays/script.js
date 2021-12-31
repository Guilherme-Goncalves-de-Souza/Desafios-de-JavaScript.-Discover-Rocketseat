/* 

Faça os seguintes desafios

- Contar o número de categorias e o número de livros em cada categoria.

- Contar o número de autores.

- Mostrar os livros do autor Augusto Cury.

- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

const livros_por_categoria = [
  {
    categoria: 'Riqueza',
    livros: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    categoria: 'Inteligência Emocional',
    livros: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },

      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },

      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

/* 
- Contar o número de categorias e o número de livros em cada categoria.
*/

console.log(livros_por_categoria.length)

for (let categoria of livros_por_categoria) {
  console.log('Total de livros na categoria', categoria.categoria)
  console.log(categoria.livros.length)
}

/* - Contar o número de autores. */

function contar_author() {
  let authors = []

  for (let categoria of livros_por_categoria) {
    for (let livros of categoria.livros) {
      if (authors.indexOf(livros.author) == -1) {
        authors.push(livros.title)
      }
    }
  }
  console.log('Total de autores: ', authors.length)
}

contar_author()

/* 
- Mostrar os livros do autor Augusto Cury.
  e 
- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. */

function livros_do_augustCury(author) {
  let books = []

  for (let categoria of livros_por_categoria) {
    for (let livros of categoria.livros) {
      if (livros.author === author) {
        books.push(livros.title)
      }
    }
  }
  console.log(`Total de livros do ${author}: ${books.join(', ')}`)
}

livros_do_augustCury('Augusto Cury')
