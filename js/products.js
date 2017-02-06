var duckyArray = [
	{name: "Classic Duck",
	 price: "$4.99",
	 dimensions: "1.5in X 2in X 1.5in",
	 weight: "3oz",
	 description: "He'll never let you down.",
	 imgurl: "<img src='../images/plainduck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
	{name: "Vampire Duck",
	 price: "$3.99",
	 dimensions: "1in X 1in X 1in",
	 weight: "4oz",
	 description: "He vants to duck your blood.",
	 imgurl: "<img src='../images/vampduck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
	{name: "Mermaid Duck",
	 price: "$8.99",
	 dimensions: "1.5in X 2in X 1.5in",
	 weight: "1.5oz",
	 description: "She'll swim into your heart.",
	 imgurl: "<img src='../images/merduck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
	{name: "Hockey Duck",
	 price: "$2.99",
	 dimensions: "2in X 2in X 1.5in",
	 weight: "2oz",
	 description: "The original Mighty Duck.",
	 imgurl: "<img src='../images/hockeyduck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
	{name: "Redneck Duck",
	 price: "$5.99",
	 dimensions: "1.5in X 2in X 3in",
	 weight: "3oz",
	 description: "Wanna do donuts in the pond?",
	 imgurl: "<img src='../images/Redneck-duck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
	{name: "Batman Duck",
	 price: "$6.99",
	 dimensions: "1.5in X 2in X 1.5in",
	 weight: "5oz",
	 description: "Part bat, part duck, all justice.",
	 imgurl: "<img src='../images/batduck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
	{name: "Zombie Duck",
	 price: "$7.99",
	 dimensions: "1.5in X 2in X 1.5in",
	 weight: "3oz",
	 description: "Brains float, right?",
	 imgurl: "<img src='../images/zombieduck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
	{name: "Earth Duck",
	 price: "$9.99",
	 dimensions: "2in X 2in X 3in",
	 weight: "4oz",
	 description: "He will show you the world.",
	 imgurl: "<img src='../images/earthduck.png' alt='Classic Ducky' height='100px' width='100px'>"
	},
];

function printToCard (i, array) {
	let currentCard = document.getElementById("card" + i);
	let currentCardNameDiv = currentCard.getElementsByClassName("name");
	let currentCardPriceDiv = currentCard.getElementsByClassName("price");
	let currentCardDimensionsDiv = currentCard.getElementsByClassName("dimensions");
	let currentCardWeightDiv = currentCard.getElementsByClassName("weight");
	let currentCardDescriptionDiv = currentCard.getElementsByClassName("description");
	let currentCardImgURLDiv = currentCard.getElementsByClassName("img");
	currentCardNameDiv[0].innerHTML = array[i].name;
	currentCardPriceDiv[0].innerHTML = array[i].price;
	currentCardDimensionsDiv[0].innerHTML = array[i].dimensions;
	currentCardWeightDiv[0].innerHTML = array[i].weight;
	currentCardDescriptionDiv[0].innerHTML = array[i].description;
	currentCardImgURLDiv[0].innerHTML = array[i].imgurl;
};

function printArray (array) {
	for (var i = 0; i < array.length; i++) {
		printToCard(i, array);
	}
};

printArray(duckyArray);