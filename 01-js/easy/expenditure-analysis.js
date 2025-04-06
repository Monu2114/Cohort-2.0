/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // return list with objects containing category and price spent
  // const output = [];
  const arr = [];
  // transactions.map((obj) => {
  //   output.push({ category: obj.category, totalSpent: obj.price });
  // });
  // for (let i = 0; i < transactions.length; i++) {
  //   let index = arr.findIndex(
  //     (item) => item.category === transactions[i].category
  //   );
  //   if (index == -1) {
  //     arr.push({
  //       category: transactions[i].category,
  //       totalSpent: transactions[i].price,
  //     });
  //   } else {
  //     arr[index].totalSpent = arr[index]["totalSpent"] + transactions[i].price;
  //   }
  // }
  transactions.forEach((element) => {
    let index = arr.findIndex((item) => item.category == element.category);
    if (index == -1) {
      arr.push({ category: element.category, totalSpent: element.price });
    } else arr[index].totalSpent += element.price;
  });
  console.log(arr);

  return arr;
}
calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
]);
module.exports = calculateTotalSpentByCategory;
