// https://github.com/n6g7/redux-saga-firebase/tree/master/src

import db from "../config/Firebase";

export function get(col, callback) {
  let res = [];
  const ref = db.collection(col);
  // citiesRef.limit(3)
  // citiesRef.limitToLast(3)

  ref.get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      res.push(doc.data());
    });

    callback(res);
  });
  //firestore.collection('Users').orderBy("FirstName");
}

export function getPremise(col) {
  let res = [];
  const ref = db.collection(col);

  ref.get().then(snapshot => {
    snapshot.docs.forEach((doc, i) => {
      res.push(doc.data());
    });
  });
  return res;
}

export function getFilters() {
  //https://firebase.google.com/docs/firestore/query-data/queries
  //var citiesRef = db.collection("cities");
  //var query = citiesRef.where("state", "==", "CA");
  //                      .where("population", "<", 100000)
}

export function save(col, obj) {
  db.collection(col).add(obj);
  //callback();
}

export function uploadJsonToFirebase(json, colNumber = 0, colName) {
  var arr = [];
  Object.keys(json).forEach(function(key) {
    arr.push(json[key]);
  });
  const list = arr[colNumber];

  Object.keys(list).forEach(key => {
    //console.log("obj1: ", list[key]);
    ///////////////////////////////////////////////////////////
    //DesComentar la siguiente linea para que se suba el json
    //db.collection(colName).add(list[key]);
    ///////////////////////////////////////////////////////////
  });
}
export function readRealtimeDatabase() {
  // db.ref("TangoEventos/").once("value", function(snapshot) {
  //   console.log(snapshot.val());
  // });
}
