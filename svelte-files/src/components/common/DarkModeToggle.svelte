<script lang="ts">
  let darkMode: boolean = localStorage.getItem('theme')
    ? localStorage.getItem('theme') === 'dark'
      ? true
      : false
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? true
    : false

  const toggleDarkMode = () => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem(
        'theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'light'
          : 'dark'
      )
    }

    const preferredOSTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    const currentTheme = localStorage.getItem('theme') ?? preferredOSTheme

    if (currentTheme === 'dark') {
      document.body.classList.add('dark')
      darkMode = true
    } else {
      document.body.classList.remove('dark')
      darkMode = false
    }
  }
</script>

<div class="flex justify-center items-center mr-3">
  <span>
    <svg
      class="h-6 w-6 transition-all duration-200 ease-in-out"
      class:text-gray-400={darkMode}
      class:text-gray-500={!darkMode}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </span>
  <div
    class="w-12 h-6 flex items-center rounded-full mx-2 px-1 cursor-pointer transition-all duration-200 ease-in-out"
    class:bg-indigo-700={darkMode}
    class:bg-gray-300={!darkMode}
    on:click={toggleDarkMode}
  >
    <div
      class="bg-white w-4 h-4 rounded-full shadow-md transition-all duration-200 ease-in-out"
      class:toggle-dot={darkMode}
    />
  </div>
  <span>
    <svg
      class="h-6 w-6 transition-all duration-200 ease-in-out"
      class:text-gray-500={darkMode}
      class:text-gray-400={!darkMode}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </span>
</div>

<style lang="postcss">
  .toggle-dot {
    @apply translate-x-6 border-emerald-500;
  }
</style>
