const product = { count: 4, price: 12, type: 'mascotas' };

let IVA;
let totalsinIVA = product.count * product.price;
let IVAcompra;

if (product.type === 'ropa') {
  IVA = 0.1;
} else if (product.type === 'libros') {
  IVA = 0.04;
} else if (product.type !== 'ropa' && product.type !== 'libros') {
  IVA = 0.21;
}

if (product.count > 0) {
  IVAcompra = totalsinIVA * IVA;
  totalconIVA = totalsinIVA + IVAcompra;
  console.log(
    'Ha elegido ' + product.type + ', el precio es: ' + totalconIVA + '€'
  );
} else {
  console.log('No hay artículos seleccionados en su carro');
}
