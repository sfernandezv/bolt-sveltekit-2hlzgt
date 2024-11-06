<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/form1');
  });
</script>

<div class="text-center">
  <p>Redirigiendo...</p>
</div>