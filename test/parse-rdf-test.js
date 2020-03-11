/***
 * Excerpted from "Node.js 8 the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode2 for more book information.
***/
'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const parseRDF = require('../databases/lib/parse-rdf.js');

const rdf = fs.readFileSync(`${__dirname}/pg132.rdf`);

describe('parseRDF', () => {
  it('should be a function', () => {
    expect(parseRDF).to.be.a('function');
  });

  it('should parse RDF content', () => {
    const book = parseRDF(rdf);
    

    expect(book).to.be.an('object');
    expect(book).to.have.a.property('id', 132);
    expect(book).to.have.a.property('title', 'The Art of War');

     expect(book).to.have.a.property('authors')
      .that.is.an('array').with.lengthOf(2)
      .and.contains('Sunzi, active 6th century B.C.')
      .and.contains('Giles, Lionel');

    expect(book).to.have.a.property('subjects')
      .that.is.an('array').with.lengthOf(2)
      .and.contains('Military art and science -- Early works to 1800')
      .and.contains('War -- Early works to 1800');
  });
   /* Add a new assertion to parse-rdf-test.js that checks for book.lcc. 
 It should be of type string and it should be at least one character long.
  It should start with an uppercase letter of the English alphabet, but not I, O, W, X, or Y. */
  it('should check for book.lcc', () =>{
    const book = parseRDF(rdf);

    expect(book).to.have.a.property('lcc').that.is.an('string');
    //console.log(book.lcc.charAt(0));
  
    expect(book.lcc.charAt(0)).to.equal(book.lcc.charAt(0).toUpperCase())
    .and.not.contains('I').and.not.contains('O').and.not.contains('W')
    .and.not.contains('X').and.not.contains('Y');
  });
});
