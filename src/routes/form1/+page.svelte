<script>
  import { onMount } from 'svelte';
  import { products } from '$lib/stores/formStore';
  import MeasurementInput from './MeasurementInput.svelte';
  import PiecesControl from './PiecesControl.svelte';
  import TotalPieces from './TotalPieces.svelte';
  import Observations from './Observations.svelte';
  import HistorySidebar from './HistorySidebar.svelte';

  let timestamp = '';
  let cost = 0;
  let product = '';
  let productImage = '';
  let lot = '';

  $: {
    const matchingProduct = products.find(p => p.cost === Number(cost));
    if (matchingProduct) {
      product = matchingProduct.name;
      productImage = matchingProduct.image;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission
  }

  function handleSave() {
    // Handle save functionality
  }

  onMount(() => {
    timestamp = new Date().toISOString().slice(0, 16);
  });

  const icons = {
    time: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    cost: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    product: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
    </svg>`,
    lot: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
    </svg>`,
    glaseado: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
    </svg>`,
    congelado: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>`,
    glaseo: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
    </svg>`,
    bag: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
    </svg>`,
    pieces: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
    </svg>`,
    observations: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>`
  };
</script>

<div class="flex">
  <div class="flex-1 max-w-4xl mx-auto p-4 space-y-8">
    <!-- Main Title -->
    <h1 class="text-3xl font-bold text-center text-blue-900 bg-white/80 backdrop-blur-sm py-4 rounded-xl shadow-sm">
      REGISTRO DE CONTROL GLASEO & UNITARIO DE PIEZAS
    </h1>

    <form on:submit={handleSubmit} class="space-y-8">
      <!-- Código:CA28 / Anexo 1 -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-center text-blue-800 bg-blue-50/80 backdrop-blur-sm py-3 rounded-lg">
          Código:CA28 / Anexo 1
        </h2>

        <!-- Basic Info Card -->
        <div class="card">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-blue-600">{@html icons.time}</span>
                <label class="form-label mb-0">Hora</label>
              </div>
              <input
                type="datetime-local"
                bind:value={timestamp}
                required
                class="form-input"
              />
            </div>

            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-blue-600">{@html icons.cost}</span>
                <label class="form-label mb-0">Costo</label>
              </div>
              <input
                type="number"
                bind:value={cost}
                required
                class="form-input"
              />
            </div>

            <div class="sm:col-span-2">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-blue-600">{@html icons.product}</span>
                <label class="form-label mb-0">Producto/Marca-Cliente</label>
              </div>
              <div class="flex items-center gap-2">
                <input
                  type="text"
                  bind:value={product}
                  required
                  class="form-input"
                />
                {#if productImage}
                  <a 
                    href={productImage}
                    target="_blank"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </a>
                {/if}
              </div>
            </div>

            <div class="sm:col-span-2">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-blue-600">{@html icons.lot}</span>
                <label class="form-label mb-0">Lote</label>
              </div>
              <input
                type="number"
                bind:value={lot}
                required
                class="form-input"
              />
            </div>
          </div>
        </div>

        <!-- Measurements Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <MeasurementInput 
            label="Peso Glaseado (g)" 
            type="float"
            icon={icons.glaseado}
          />
          <MeasurementInput 
            label="Peso Congelado (g)" 
            type="float"
            icon={icons.congelado}
          />
          <MeasurementInput 
            label="Glaseo %" 
            type="integer"
            icon={icons.glaseo}
          />
        </div>

        <!-- Control Piezas -->
        <div class="card">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-blue-600">{@html icons.pieces}</span>
            <h3 class="text-xl font-semibold text-blue-900">Control Piezas</h3>
          </div>
          <PiecesControl />
        </div>

        <!-- Bolsa granel -->
        <div class="card">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-blue-600">{@html icons.bag}</span>
            <h3 class="text-xl font-semibold text-blue-900">
              Bolsa granel (1kg aprox.)
            </h3>
          </div>
          <TotalPieces />
        </div>
      </div>

      <!-- Código:CA28 / Anexo 2 -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-center text-blue-800 bg-blue-50/80 backdrop-blur-sm py-3 rounded-lg">
          Código:CA28 / Anexo 2
        </h2>
        
        <div class="card">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-blue-600">{@html icons.observations}</span>
            <h3 class="text-xl font-semibold text-blue-900">Observaciones</h3>
          </div>
          <Observations />
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex justify-center gap-6">
        <button type="submit" class="btn-primary">
          Registrar
        </button>
        <button type="button" on:click={handleSave} class="btn-primary">
          Guardar
        </button>
      </div>
    </form>
  </div>

  <HistorySidebar />
</div>