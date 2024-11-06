<script>
  let observations = [''];

  function addObservation() {
    observations = [...observations, ''];
  }

  function removeObservation(index) {
    if (observations.length > 1) {
      observations = observations.filter((_, i) => i !== index);
    }
  }
</script>

<div class="space-y-6">
  {#each observations as observation, index}
    <div class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-50">
      <div class="flex items-start gap-4">
        <div class="flex-1">
          <textarea
            bind:value={observations[index]}
            rows="3"
            placeholder="Ingrese su observación aquí..."
            class="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
          ></textarea>
        </div>
        {#if observations.length > 1}
          <button
            type="button"
            on:click={() => removeObservation(index)}
            class="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  {/each}

  <button
    type="button"
    on:click={addObservation}
    class="inline-flex items-center px-4 py-2 border border-blue-300 rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
    </svg>
    Agregar observación
  </button>
</div>