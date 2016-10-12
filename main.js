//1 Calculate average price of all items.

var sumPrice = 0
for (var i = 0; i < items.length; i++) {
  sumPrice += items[i].price;
}
(sumPrice/items.length)

var average = (sumPrice/items.length)
average.innerHTML =
var answer1Box = document.getElementById("answer1").innerHTML = ""The average price is " + average;";


//The above only provides the rounded number, but I assume is okay?
//Below is failed attempt at doing something more consice using reduce. Womp.
//I thought I would be able to get the average price

// function average (price){
//   (function addingStuff (a, b) {return a + b;})
//   return  / items.length
// }

//2 Titles for priced items between $14-$18.

function filter (items, options) {
  var list = [];
  for (var i = 0; i < items.length; i++) {
    if (options (items [i]))
    passed.push (items [i]);
  }
  return list; }
//The above function is initially how I filtered through items,
// and getting through writing it is getting a little tedius every time.

var tooMuch = items.filter (function (singItem)
{return singItem.price > 14.00 && singItem.price < 18.00

})

var answer2= tooMuch.map (function (singItem)
{return singItem.title;
}
)
answer2.innerHTML = "The priced items are " + answer2;
var answer2Box = document.getElementById("answer2");
;




//After talking to Grace and Tai, I realized my answers take up a lot of space.
//I'm mostly concerned about readability, which was also my concern with HTML AND CSS.
//I don't know. I guess I'm still working on being concise, organized, and readable all at once.

//3 Find merchant who used GBP currency.

var tooMuch = items.filter (function (singItem)
{return singItem.currency_code === "GBP"

})

tooMuch.map (function (singItem)
{return singItem.title;

}
);

//4 Find all listings with wood in materals.

// function filter (items, options) {
//   var list = [];
//   for (var i = 0; i < items.length; i++)
// for (var j = 0; j <items[i].length;j++ )
//   var bigGroup = items[i].materials[j];
//     if (options (bigGroup)) {
//     list.push (bigGroup);
//   }
//   return list
// };

var woodsy = items.filter (function(madeOf) {
  return madeOf.materials.includes("wood")
})


woodsy.map (function (woodz)
{return woodz.title;
}
);

//5 Which items are made of 8 or more materials. Display name, number, and materials. BLERG

var woodsy = items.filter (function(madeOf) {
  return madeOf.materials.length >= 8;
})

woodsy.map (function (woodz)
{return woodz.title;

})
;


//6 Number of sellers who made there own stuff? (18)

var woodsy = items.filter (function(madeOf) {
  return madeOf.who_made=== "i_did"
})

woodsy.reduce (function(a,b){
  return (a+b).length+1
})
