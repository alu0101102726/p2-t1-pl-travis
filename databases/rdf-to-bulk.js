"use strict";
  let dir = require('node-dir');
  let parseRDF = require('./lib/parse-rdf.js')
  
  let dirname = process.argv[2];

  let options = {
    match: /\.rdf$/,
    exclude: ['ph0.rdf'], 
  };
  dir.readFiles(dirname, options, (err, content, next) => {
    if (err) throw err;
    let doc = parseRDF(content);
    console.log(JSON.stringify({ index: { _id: `pg${doc.id}`}}));
    console.log(JSON.stringify(doc));
    next();
  });
process.stdout.on('error', err => process.exit());
