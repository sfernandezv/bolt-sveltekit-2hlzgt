<script>
  export let section;
  
  const unitOptions = ['Gramaje (g)', 'Calibre (cm)', 'Grosor de Corte (cm)'];
</script>

<div class="space-y-4 p-4 border rounded-lg">
  <div>
    <label class="block text-sm font-medium text-gray-700">Unidad</label>
    <select
      bind:value={section.unit}
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
    >
      {#each unitOptions as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>

  <div class="space-y-3">
    {#each section.measurements as measurement, i}
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs text-gray-500">Medición 1 - Fila {i + 1}</label>
          <input
            type="number"
            step="0.01"
            required
            bind:value={measurement.m1}
            class="w-full p-2 border rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label class="block text-xs text-gray-500">Medición 2 - Fila {i + 1}</label>
          <input
            type="number"
            step="0.01"
            required
            bind:value={measurement.m2}
            class="w-full p-2 border rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    {/each}
  </div>
</div>