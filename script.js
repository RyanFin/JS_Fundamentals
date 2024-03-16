const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(3);

// object destructure must match an existing 'key'
const { title, author, pages, genres } = book;

// ... 'rest' example
// otherGenres loads all the 'rest' of the genres in a 'new' array
// the variable using the ... destructuring pattern must be loaded at the end of the array to get the 'rest'
const [primary_genre, secondary_genre, ...otherGenres] = genres;

console.log(primary_genre);

console.log(otherGenres);

// ... 'spread' example

console.log(otherGenres, "epic fantasy");
console.log(...otherGenres, "epic fantasy");
console.log("epic fantasy", ...otherGenres);

// ... 'spread' takes all of the genres from the inner array and makes it part of the outer array as includes the value 'epic fantasy' as a element.

// spread with objects
const updatedBook = { book, imdbRating: 9.1 };
console.log(updatedBook);

// places the new imdbRating property inside the original one.
const updatedSBook = { ...book, imdbRating: 9.1 };

console.log(updatedSBook);

// overriding existing properties
// the ...book has to be before the update property for the attribute to be updated
// in this example 'pages' is being updated
const overideBook = { apple: "golden wonder", ...book, pages: 3000 };
console.log(overideBook);

// template literals (with the use of backticks)
const summary = `${title} is a book written by ${author} and the book has ${pages} pages`;

console.log(summary);

const year = book.publicationDate.split("-")[0];

// ternary operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";

// ES6 arrow functions

// old method
// function getYear(str) {
//   return str.split("-")[0];
// }

// console.log(getYear(book.publicationDate));

// new arrow function method
(str) => str.split("-")[0];

const getYear = (str) => str.split("-")[0];

ans = getYear(book.publicationDate);

const add = (a, b) => a + b;

b = add(5, 6);

// short circuiting
// falsy: 0, null, '',"", false, undefined
// 'AND'
console.log("jonas" && "some string"); // truthy value

console.log(true && "some string");

console.log(null && "some string");

console.log(undefined && "some string");

console.log(0 && "some string");

// 'OR'
console.log(true || "some string");

console.log(undefined || "some string");

console.log(null || "some string");

console.log("hey" || "some string");

console.log(book.translations.spanish);

// 'OR' can be used in this case for setting default values in a JS program
const spanishTranslations = book.translations.bengali || "NOT TRANSLATED";
spanishTranslations; // when a falsy value is found it will use the 2nd var
// "NOT TRANSLATED" in 'OR' short circuiting

// console.log(book.reviews.librarything.reviewsCount);
// countWrong = book.reviews.librarything.reviewsCount || "no data";

// countWrong; // not correct as it should be equal to 0 not 'no data'.
// '0' is data in this example but the program sees it as a falsy value

// solution: knowledge coalescing operator will only return the 2nd value
// when the 1st value is null or undefined; but not when it is 0 or an empty string ''/""
const count = book.reviews.librarything?.reviewsCount ?? "no data";
count;

// optional chaining
function getTotalReviewsCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  // optional chaining operator '?' kicks into effect if the librarything object is not present for a book
  // then the value is to be ignored
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  librarything;

  return goodreads + librarything;
}

getTotalReviewsCount(book);

const books = getBooks();

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); // you can chain multiple conditions

console.log(longBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure")) //filter by adventure genre only
  .map((book) => book.title); // only display book titles

adventureBooks;

// reduce functionz
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

pagesAllBooks;

// sort function
const x = [1, 100000, 4, 21, 30, 506];

const ascSorted = x.slice().sort((a, b) => a - b);
x; // sort ascending
ascSorted;

const descSorted = x.slice().sort((a, b) => b - a);
x;
descSorted;

const [elem1, elem2, ...rest] = descSorted;
elem1;
rest;

const updatedDesc = [...descSorted, 70];

updatedDesc.sort((a, b) => a - b);

updatedDesc;

// sort pages in descending order
const pageSort = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => ({ title: book.title, pages: book.pages }));

pageSort;

const boo = books.filter((book) => book.id > 2 && book.id < 5);

console.log(boo);
