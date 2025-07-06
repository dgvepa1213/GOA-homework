const customerOrders = [
  {
    orderId: 101,
    isDelivered: true,
    items: [
      { title: "Book A", price: 15, quantity: 1 },
      { title: "Book B", price: 12, quantity: 2 }
    ]
  },
  {
    orderId: 102,
    isDelivered: false,
    items: [
      { title: "Book C", price: 8, quantity: 1 },
      { title: "Book D", price: 11, quantity: 1 }
    ]
  },
  {
    orderId: 103,
    isDelivered: true,
    items: []
  }
];

// ✅ Task 1: Check if all orders have at least one item
const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log("All orders have items:", allOrdersHaveItems);

// ✅ Task 2: Check if any order is not delivered yet
const hasPendingDelivery = customerOrders.some(order => !order.isDelivered);
console.log("There is a pending delivery:", hasPendingDelivery);

// ✅ Task 3: Loop through orders and apply nested checks
customerOrders.forEach(order => {
  console.log(`Processing Order ID: ${order.orderId}`);

  const allExpensive = order.items.every(item => item.price > 10);
  console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);

  const hasMultipleCopies = order.items.some(item => item.quantity > 1);
  console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
});