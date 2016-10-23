//1 Calculate average price of all items.


var priceArray= items.map(function(prices){return prices.price});

var average = (priceArray.reduce(function(a,b) {return (a + b)})/priceArray.length).toFixed(2)


document.getElementById("answer1").innerHTML = "The average price is $"+ average;

//The above only provides the rounded number, but I assume is okay?
//Below is failed attempt at doing something more consice using reduce. Womp.
//I thought I would be able to get the average price

// function average (price){
//   (function addingStuff (a, b) {return a + b;})
//   return  / items.length
// }

//2 Titles for priced items between $14-$18.
//
// function filter (items, options) {
//   var list = [];
//   for (var i = 0; i < items.length; i++) {
//     if (options (items [i]))
//     passed.push (items [i]);
//   }
//   return list; }
//The above function is initially how I filtered through items,
// and getting through writing it is getting a little tedius every time.

var tooMuch = items.filter (function (singItem)
{return singItem.price > 14.00 && singItem.price < 18.00})

var range = tooMuch.map (function (singItem)
{return singItem.title});

document.getElementById("answer2").innerHTML = "The priced items are: " + range. join ("<p></p> ");

//After talking to Grace and Tai, I realized my answers take up a lot of space.
//I'm mostly concerned about readability, which was also my concern with HTML AND CSS.
//I don't know. I guess I'm still working on being concise, organized, and readable all at once.

//3 Find merchant who used GBP currency.

var tooMuch = items.filter (function (singItem) {return singItem.currency_code === "GBP"})

var currency= tooMuch.map (function (singItem){return singItem.title;});

var currencyPrice= tooMuch.map (function (singItem){return singItem.price;});


document.getElementById("answer3").innerHTML = currency + "costs £" + currencyPrice

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
  return madeOf.materials.includes("wood")})

var haveWood = woodsy.map (function (woodz){return woodz.title;});

document.getElementById("answer4").innerHTML = haveWood.join("<p></p>");

//5 Which items are made of 8 or more materials. Display name, number, and materials. BLERG

var woodsy = items.filter (function(madeOf) {return madeOf.materials.length >= 8;
})
var woodTitle= woodsy.map (function (woodz){return woodz.title;});

var woodMaterials = woodsy.map (function (woodz){return woodz.materials;});

// var one= woodsy[0].title + " and " + woodsy[1].title + " are made of " + (woodMaterials[0].length)  + " and " + woodMaterials[1].length + " materials respectively. <br> Those materials are " + woodMaterials[0] + " and " + woodMaterials[1];

var tediousOne= woodsy[0].title + " has " + (woodMaterials[0].length)  + "  materials:<br> " + woodMaterials[0].join('<p id="wood"></p>')
//joining is an exercise in confusion.

var tediousTwo= woodsy[1].title + " has " + (woodMaterials[1].length)  + "  materials:<br> " + woodMaterials[1].join('<p id= "wood"></p>')
document.getElementById("answer5").innerHTML = tediousOne + "<p></p>" + tediousTwo

// 6 Number of sellers who made there own stuff? (18)

var woodsy = items.filter (function(madeOf) {
  return madeOf.who_made=== "i_did"
})

var ownStuff= woodsy.reduce (function(a,b){
  return (a+b).length+1
})

document.getElementById("answer6").innerHTML = ownStuff + " were made by their sellers."
