
// this keyword is used 
let obj = {
  name: "Aliyan",
  DOB: "2nd Dec, 2000",
  place: "Nashik",

  print: function() {
    console.log(this.name, this.DOB, this.place);
  }
};


obj.print();
