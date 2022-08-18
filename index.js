const pizzas = [
    {
id: 1, 
nombre: "Muzza",
ingredientes: ["Muzzarella", "Aceitunas"],
precio: 1200 
    },

    {
id: 2,
nombre: "Jamon",
ingredientes: ["Muzzarella", "Jamon", "Aceitunas"],
precio: 1600
    },

    {
id: 3,
nombre: "Napolitana",
ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
precio: 1500
    },

    {
id: 4, 
nombre: "Fugazzeta",
ingredientes: ["Muzzarella", "Cebolla", "Aceitunas"],
precio: 1400
    },

    {
id: 5,
nombre: "Anchoas",
ingredientes: ["Salsa de tomate", "Anchoas", "Aceitunas"],
precio: 1700

    },

    {
id: 6,
nombre: "Verduras",
ingredientes: ["Salsa blanca", "Acelga", "Queso", "Aceitunas"],
precio: 1300
    },
];


const a = pizzas.filter(impares);
function impares (pizza) {
pizza.id % 2 === 0 ? null : console.log(pizza);
}

const pizzaMenorA600 = pizzas.some( (e) => e.precio < 600);
console.log (pizzaMenorA600 ? 'hay pizzas menores a 600' : 'no hay pizzas menores a 600')


const ingredientesPizzas = pizzas.map ( (pizza) => {
    return {
        nombre: pizza.nombre,
        ingredientes: pizza.ingredientes
    }
})
console.log(ingredientesPizzas);