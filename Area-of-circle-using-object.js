// Object method to find area of circle.



let circle ={

  radius:0,
  Area: function(){
  return (this.radius**2)*(22/7);
  }
};


circle.radius=6;
console.log(circle.Area());



