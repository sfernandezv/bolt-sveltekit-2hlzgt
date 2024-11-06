<script>
  import '../app.css';
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
  <nav class="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-xl font-bold text-blue-900">Control App</span>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a 
              href="/form1"
              class="border-transparent text-gray-700 hover:text-blue-900 hover:border-blue-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
            >
              Registro Glaseos
            </a>
            <a
              href="/form2"
              class="border-transparent text-gray-700 hover:text-blue-900 hover:border-blue-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
            >
              Inspección en Proceso
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <slot />
  </main>
</div>