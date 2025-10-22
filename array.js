const books = [
  {
    title: "Seun",
    description: "Tales of Seun",
    numberOfPages: 27,
    author: "KING",
    reading: true
  },
  {
    title: "Gloria",
    description: "The Return of Gloria",
    numberOfPages: 35,
    author: "KING",
    reading: true
  },
  {
    title: "Nicolas",
    description: "Final Chapter of Nicolas",
    numberOfPages: 40,
    author: "KING",
    reading: true
  }
];

books.forEach((book, index) => {
  console.log(`${index + 1}. ${book.title} by ${book.author}`);
});

