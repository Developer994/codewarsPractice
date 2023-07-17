//
//
// Kata 1
// A square of squares
// You like building blocks.
// You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square.
// Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.

// The tests will always use some integral number,
// so don't worry about that in dynamic typed languages.

// // Ans:

// var isSquare = function (n) {
//   return Math.sqrt(n) % 1 === 0;
// };

// console.log(isSquare(25));

//
//
// Kata 2
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
// It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells.
// RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Ans:

// function DNAtoRNA(dna) {
//   return dna.includes('T')
//     ? dna.replaceAll('T', 'U')
//     : dna.replaceAll('U', 'T');
// }

// // A Better solution:
// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, 'U');
// }
