<script>
  import MeasurementInput from './MeasurementInput.svelte';
</script>

<div class="space-y-4">
  <h2 class="text-lg font-semibold">BOLSA *granel en 1 kg aprox.</h2>
  <div class="space-y-4">
    <MeasurementInput label="Peso (g)" step="0.01" />
    <MeasurementInput label="Número" type="number" step="1" />
  </div>
</div>