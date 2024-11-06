<script>
  export let label = '';
  export let type = 'float';
  export let icon = '';

  let measurement1 = type === 'integer' ? 0 : 0.0;
  let measurement2 = type === 'integer' ? 0 : 0.0;

  $: average = ((measurement1 + measurement2) / 2).toFixed(2);
</script>

<div class="card">
  <div class="flex items-center gap-3 mb-4">
    {#if icon}
      <span class="text-blue-600">{@html icon}</span>
    {/if}
    <h3 class="text-lg font-semibold text-blue-900">{label}</h3>
  </div>
  
  <div class="space-y-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs text-gray-500 mb-1">Medición 1</label>
        <input
          type="number"
          step={type === 'integer' ? '1' : '0.01'}
          bind:value={measurement1}
          required
          class="form-input"
        />
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">Medición 2</label>
        <input
          type="number"
          step={type === 'integer' ? '1' : '0.01'}
          bind:value={measurement2}
          required
          class="form-input"
        />
      </div>
    </div>
    
    <div class="pt-2 border-t">
      <div class="text-center">
        <span class="text-sm text-gray-500">Promedio</span>
        <p class="text-xl font-semibold text-blue-600">{average}</p>
      </div>
    </div>
  </div>
</div>