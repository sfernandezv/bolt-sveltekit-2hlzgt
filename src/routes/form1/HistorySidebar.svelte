<script>
  import { slide } from 'svelte/transition';
  import { formHistory } from '$lib/stores/formStore';

  let isOpen = false;
  let expandedRecords = new Set();

  function toggleRecord(id) {
    if (expandedRecords.has(id)) {
      expandedRecords.delete(id);
    } else {
      expandedRecords.add(id);
    }
    expandedRecords = expandedRecords;
  }

  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<!-- Overlay background when sidebar is open -->
{#if isOpen}
  <div class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" on:click={() => isOpen = false}></div>
{/if}

<!-- Toggle button -->
<button
  class="fixed right-4 top-24 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-30"
  on:click={() => isOpen = !isOpen}
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
  </svg>
</button>

<!-- Sidebar panel -->
{#if isOpen}
  <div 
    class="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-hidden"
    transition:slide={{ duration: 300, axis: 'x' }}
  >
    <div class="h-full flex flex-col">
      <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <h2 class="text-xl font-bold text-blue-900">Histórico de Registros</h2>
        <button 
          class="p-2 hover:bg-gray-100 rounded-full transition-colors"
          on:click={() => isOpen = false}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        {#each $formHistory as record (record.id)}
          <div class="bg-white rounded-lg shadow-md border border-gray-100">
            <button
              class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              on:click={() => toggleRecord(record.id)}
            >
              <span class="font-medium text-gray-700">{formatDate(record.timestamp)}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transform transition-transform duration-200" class:rotate-180={expandedRecords.has(record.id)} viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            {#if expandedRecords.has(record.id)}
              <div class="px-4 pb-4" transition:slide>
                <dl class="space-y-2 text-sm">
                  <div>
                    <dt class="font-medium text-gray-500">Producto</dt>
                    <dd>{record.product}</dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-500">Lote</dt>
                    <dd>{record.lot}</dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-500">Mediciones</dt>
                    <dd class="space-y-1">
                      <div>Glaseado: {record.measurements.glaseado.m1}g / {record.measurements.glaseado.m2}g</div>
                      <div>Congelado: {record.measurements.congelado.m1}g / {record.measurements.congelado.m2}g</div>
                      <div>Glaseo: {record.measurements.glaseo.m1}% / {record.measurements.glaseo.m2}%</div>
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-500">Observaciones</dt>
                    <dd class="space-y-1">
                      {#each record.observaciones as obs}
                        <div>{obs}</div>
                      {/each}
                    </dd>
                  </div>
                </dl>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}