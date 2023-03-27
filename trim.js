




var x = ["2123", "275673", "29083", "56456"];

var res = [];

for (let i in x) {

  res.push(Number(x[i]));

}

// var res = x.map(Number);
console.log(res);