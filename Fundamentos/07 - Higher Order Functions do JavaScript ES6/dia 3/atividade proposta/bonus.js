
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = () => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

flatten();

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];
  
  const longestNamedBook = () => {
    const livro = books.reduce((acc, curr) => curr.name.length > acc ? curr : acc ,'');
    return livro;
  }
  console.log(longestNamedBook());

const reduceNames = () => {
    return books.reduce((acc, curr, index) => {
        if ( index === books.length - 1) {
            return `${acc}${curr.author.name}. `
        }
        return `${acc}${curr.author.name}, `
    }, '');
    
    // return books.reduce((acc, curr) =>`${acc}${(curr.author.name)}`,'')
}
reduceNames();

const expectedResult = 43;
const averageAge = () => {
    const lengthDebooks = books.length;
    const somaIdade = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0) / lengthDebooks;
    return somaIdade;
}
averageAge();