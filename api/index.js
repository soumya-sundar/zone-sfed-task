import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/employee', (req, res) => {
  let employee = [];
  employee = mdb.collection("employee").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send({ data: result });
  })
});

router.get('/salary', (req, res) => {
  let salary = [];
  salary = mdb.collection("salary").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send({ data: result });
  })
});

//Merge both employee and salary collections for front end processing
router.get('/aggregate', (req, res) => {
  let aggregate = [];
  aggregate = mdb.collection("employee").aggregate([{
    $lookup: {
            from: "salary",
            localField: "EmployeeId",
            foreignField: "EmployeeId",
            as: "Salary"
        }
  }]).toArray(function(err, result) {
    if (err) throw err;
    res.send({ data: result });
  })
});



export default router;