<script>
  export let label = '';
  export let type = 'number';
  export let step = '1';
  export let required = true;
  
  let measurement1 = 0;
  let measurement2 = 0;
</script>

<div class="space-y-2">
  <label class="block text-sm font-medium text-gray-700">{label}</label>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <label class="block text-xs text-gray-500">Medición 1</label>
      <input
        {type}
        {step}
        {required}
        bind:value={measurement1}
        class="w-full p-2 border rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
      <label class="block text-xs text-gray-500">Medición 2</label>
      <input
        {type}
        {step}
        {required}
        bind:value={measurement2}
        class="w-full p-2 border rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </div>
</div>