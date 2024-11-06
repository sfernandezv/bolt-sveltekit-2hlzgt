<script>
  export let cost = 0;
  export let product = '';
  export let productImage = '';
  
  const products = [
    { cost: 100, name: 'Producto A', image: '/images/productA.jpg' },
    { cost: 200, name: 'Producto B', image: '/images/productB.jpg' },
    { cost: 300, name: 'Producto C', image: '/images/productC.jpg' }
  ];
  
  $: {
    const matchingProduct = products.find(p => p.cost === cost);
    if (matchingProduct) {
      product = matchingProduct.name;
      productImage = matchingProduct.image;
    }
  }
</script>

<div class="flex items-center space-x-4">
  <div class="flex-grow">
    <label class="block text-sm font-medium text-gray-700 mb-1">Producto/Marca-Cliente</label>
    <input
      type="text"
      bind:value={product}
      required
      class="w-full p-2 border rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  {#if productImage}
    <a href={productImage} target="_blank" class="text-blue-500 hover:text-blue-700">
      Ver imagen
    </a>
  {/if}
</div>