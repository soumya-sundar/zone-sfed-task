var MongoClient = require('mongodb');
var assert = require('assert');
var config = require('./config');
var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
var files = fs.readdirSync('./input_files');

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  files.forEach((file) => {
    fs.readFile( './input_files/' + file, "utf-8", function (error, text) {
      if (error) {
        throw error;
      }
      else {
        console.log(file);
        var arr =  JSON.parse(text);
        if(file === "Employee.json") {
          arr.forEach( (elem)=> {
            db.collection('employee').insert(elem)
            .then(response => {
              console.info('employee inserted = ', elem);
            });          
          });
        } else {
          arr.forEach( (elem)=> {
            db.collection('salary').insert(elem)
            .then(response => {
              console.info('salary inserted = ', elem);
            });          
          });        
        }
      }
    });
  });
});