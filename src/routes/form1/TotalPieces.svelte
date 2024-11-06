<script>
  let weight = {
    measurement1: 0.0,
    measurement2: 0.0
  };

  let count = {
    measurement1: 0.0,
    measurement2: 0.0
  };
</script>

<div class="space-y-6">
  <div>
    <label class="form-label">Peso (g)</label>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-xs text-gray-500 mb-1">Medición 1</label>
        <input
          type="number"
          step="0.01"
          bind:value={weight.measurement1}
          required
          class="form-input"
        />
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">Medición 2</label>
        <input
          type="number"
          step="0.01"
          bind:value={weight.measurement2}
          required
          class="form-input"
        />
      </div>
    </div>
  </div>

  <div>
    <label class="form-label">Número</label>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-xs text-gray-500 mb-1">Medición 1</label>
        <input
          type="number"
          step="0.01"
          bind:value={count.measurement1}
          required
          class="form-input"
        />
      </div>
      <div>
        <label class="block text-xs text-gray-500 mb-1">Medición 2</label>
        <input
          type="number"
          step="0.01"
          bind:value={count.measurement2}
          required
          class="form-input"
        />
      </div>
    </div>
  </div>
</div>