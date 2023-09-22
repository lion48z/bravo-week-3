const products = [
    { name: 'Widget', value: 10, quantity: 2 },
    { name: 'Gadget', value: 20, quantity: 3 },
    { name: 'Doodad', value: 5, quantity: 10 }
  ];
  
  const productsWithTotalValue = products.map(module => {
    return {
      name: module.name,
      price: module.value,
      quantity: module.quantity,
      totalPrice: module.value * module.quantity 
    }
  });
  
  console.log(productsWithTotalValue);