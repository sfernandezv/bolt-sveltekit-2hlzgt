<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let sections = [
    {
      unit: 'Gramaje (g)',
      measurements: Array(5).fill().map(() => ({ measurement1: 0, measurement2: 0 })),
      isExpanded: true // Changed to true by default
    }
  ];

  function addSection() {
    sections = [
      ...sections,
      {
        unit: 'Gramaje (g)',
        measurements: Array(5).fill().map(() => ({ measurement1: 0, measurement2: 0 })),
        isExpanded: true
      }
    ];
  }

  function removeSection(index) {
    if (sections.length > 1) {
      sections = sections.filter((_, i) => i !== index);
    }
  }

  function toggleSection(index) {
    sections = sections.map((section, i) => {
      if (i === index) {
        return { ...section, isExpanded: !section.isExpanded };
      }
      return section;
    });
  }
</script>

<div class="space-y-6">
  <h2 class="text-xl font-semibold text-blue-900">Control Piezas</h2>
  
  {#each sections as section, sectionIndex}
    <div class="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-blue-50">
      <div class="p-4 border-b border-blue-50">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <label class="form-label">Unidad</label>
            <select
              bind:value={section.unit}
              class="form-select"
            >
              <option>Gramaje (g)</option>
              <option>Calibre (cm)</option>
              <option>Grosor de Corte (cm)</option>
            </select>
          </div>
          <div class="flex items-center space-x-2 ml-4">
            <button
              type="button"
              on:click={() => toggleSection(sectionIndex)}
              class="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                {#if section.isExpanded}
                  <path d="M18 15l-6-6-6 6"/>
                {:else}
                  <path d="M6 9l6 6 6-6"/>
                {/if}
              </svg>
            </button>
            {#if sections.length > 1}
              <button
                type="button"
                on:click={() => removeSection(sectionIndex)}
                class="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
            {/if}
          </div>
        </div>
      </div>

      {#if section.isExpanded}
        <div class="p-4 space-y-4" transition:slide>
          {#each section.measurements as measurement, index}
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs text-gray-500 mb-1">Medición 1</label>
                <input
                  type="number"
                  step="0.01"
                  bind:value={measurement.measurement1}
                  required
                  class="form-input"
                />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">Medición 2</label>
                <input
                  type="number"
                  step="0.01"
                  bind:value={measurement.measurement2}
                  required
                  class="form-input"
                />
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/each}

  <button
    type="button"
    on:click={addSection}
    class="inline-flex items-center px-4 py-2 border border-blue-300 rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
    </svg>
    Agregar medición
  </button>
</div>