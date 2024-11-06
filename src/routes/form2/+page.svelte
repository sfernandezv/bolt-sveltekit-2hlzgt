<script>
  import { onMount } from 'svelte';

  let formData = {
    timestamp: '',
    product: '',
    brand: '',
    cost: '',
    lot: '',
    temperature: '',
    hygienicControl: {
      line: '',
      personal: '',
      elaboration: ''
    },
    foreignObjects: false,
    defectiveProduct: false,
    staticTunnel: {
      t1: '',
      t2: ''
    },
    spiralTunnel: {
      t1: '',
      t2: ''
    },
    linearTunnel: {
      t1: '',
      t2: ''
    },
    glazer: {
      waterfalls: '0',
      values: Array(4).fill('')
    },
    scalding: '',
    organoleptic: {
      aspect: '',
      glaze: '',
      smell: ''
    }
  };

  onMount(() => {
    formData.timestamp = new Date().toISOString().slice(0, 16);
  });

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  }

  function handleSave() {
    // Handle save functionality
    console.log('Form saved:', formData);
  }
</script>

<div class="max-w-4xl mx-auto p-4">
  <form on:submit={handleSubmit} class="space-y-6">
    <div class="card">
      <h1 class="text-2xl font-bold text-blue-900 mb-6">INSPECCIÓN EN PROCESO</h1>

      <!-- Basic Information -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="form-label">Hora</label>
          <input
            type="datetime-local"
            bind:value={formData.timestamp}
            required
            class="form-input"
          />
        </div>

        <div>
          <label class="form-label">Producto</label>
          <input
            type="text"
            bind:value={formData.product}
            required
            class="form-input"
          />
        </div>

        <div>
          <label class="form-label">Marca y/o Cliente</label>
          <input
            type="text"
            bind:value={formData.brand}
            required
            class="form-input"
          />
        </div>

        <div>
          <label class="form-label">Costo</label>
          <input
            type="number"
            bind:value={formData.cost}
            required
            class="form-input"
          />
        </div>

        <div>
          <label class="form-label">Lote</label>
          <input
            type="text"
            bind:value={formData.lot}
            required
            class="form-input"
          />
        </div>

        <div>
          <label class="form-label">Temperatura (°C)</label>
          <input
            type="number"
            step="0.1"
            bind:value={formData.temperature}
            required
            class="form-input"
          />
        </div>
      </div>

      <!-- Control Higiénico -->
      <div class="mt-6">
        <h2 class="text-lg font-semibold text-blue-900 mb-4">Control Higiénico</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="form-label">Línea</label>
            <input
              type="text"
              bind:value={formData.hygienicControl.line}
              required
              class="form-input"
            />
          </div>
          <div>
            <label class="form-label">Personal</label>
            <input
              type="text"
              bind:value={formData.hygienicControl.personal}
              required
              class="form-input"
            />
          </div>
          <div>
            <label class="form-label">Elaboración</label>
            <input
              type="text"
              bind:value={formData.hygienicControl.elaboration}
              required
              class="form-input"
            />
          </div>
        </div>
      </div>

      <!-- Control Objects -->
      <div class="mt-6 space-y-4">
        <div class="flex items-center space-x-4">
          <label class="form-label mb-0">Control Objetos extraños: plásticos, parásitos...</label>
          <div class="flex items-center space-x-4">
            <label class="inline-flex items-center">
              <input
                type="radio"
                bind:group={formData.foreignObjects}
                value={true}
                class="form-radio"
              />
              <span class="ml-2">Sí</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                bind:group={formData.foreignObjects}
                value={false}
                class="form-radio"
              />
              <span class="ml-2">No</span>
            </label>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <label class="form-label mb-0">Se está apartando producto con defectos? Presencia de piel, cáscara, melanosis...</label>
          <div class="flex items-center space-x-4">
            <label class="inline-flex items-center">
              <input
                type="radio"
                bind:group={formData.defectiveProduct}
                value={true}
                class="form-radio"
              />
              <span class="ml-2">Sí</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                bind:group={formData.defectiveProduct}
                value={false}
                class="form-radio"
              />
              <span class="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Tunnels -->
      <div class="mt-6 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="form-label">Túnel Estático 1</label>
            <input
              type="text"
              bind:value={formData.staticTunnel.t1}
              class="form-input"
            />
          </div>
          <div>
            <label class="form-label">Túnel Estático 2</label>
            <input
              type="text"
              bind:value={formData.staticTunnel.t2}
              class="form-input"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="form-label">Túnel Espiral 1</label>
            <input
              type="text"
              bind:value={formData.spiralTunnel.t1}
              class="form-input"
            />
          </div>
          <div>
            <label class="form-label">Túnel Espiral 2</label>
            <input
              type="text"
              bind:value={formData.spiralTunnel.t2}
              class="form-input"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="form-label">Túnel Lineal 1</label>
            <input
              type="text"
              bind:value={formData.linearTunnel.t1}
              class="form-input"
            />
          </div>
          <div>
            <label class="form-label">Túnel Lineal 2</label>
            <input
              type="text"
              bind:value={formData.linearTunnel.t2}
              class="form-input"
            />
          </div>
        </div>
      </div>

      <!-- Glaseadora -->
      <div class="mt-6">
        <h2 class="text-lg font-semibold text-blue-900 mb-4">Glaseadora: N° Cataratas</h2>
        <div class="flex items-center space-x-4 mb-4">
          <label class="inline-flex items-center">
            <input
              type="radio"
              bind:group={formData.glazer.waterfalls}
              value="0"
              class="form-radio"
            />
            <span class="ml-2">0</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              bind:group={formData.glazer.waterfalls}
              value="1"
              class="form-radio"
            />
            <span class="ml-2">1</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              bind:group={formData.glazer.waterfalls}
              value="2"
              class="form-radio"
            />
            <span class="ml-2">2</span>
          </label>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {#each formData.glazer.values as _, i}
            <div>
              <label class="form-label">{i + 1}</label>
              <input
                type="text"
                bind:value={formData.glazer.values[i]}
                class="form-input"
              />
            </div>
          {/each}
        </div>
      </div>

      <!-- Control Escaldado -->
      <div class="mt-6">
        <label class="form-label">Control Escaldado (T°)</label>
        <input
          type="text"
          bind:value={formData.scalding}
          class="form-input"
        />
      </div>

      <!-- Inspección Organoléptica -->
      <div class="mt-6">
        <h2 class="text-lg font-semibold text-blue-900 mb-4">Inspección Organoléptica</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="form-label">Aspecto</label>
            <input
              type="text"
              bind:value={formData.organoleptic.aspect}
              required
              class="form-input"
            />
          </div>
          <div>
            <label class="form-label">Glaseo</label>
            <input
              type="text"
              bind:value={formData.organoleptic.glaze}
              required
              class="form-input"
            />
          </div>
          <div>
            <label class="form-label">Olor</label>
            <input
              type="text"
              bind:value={formData.organoleptic.smell}
              required
              class="form-input"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex justify-center gap-4">
      <button type="submit" class="btn-primary">
        Registrar
      </button>
      <button type="button" on:click={handleSave} class="btn-primary">
        Guardar
      </button>
    </div>
  </form>
</div>