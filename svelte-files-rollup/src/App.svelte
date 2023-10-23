<script lang="ts">
  import {onMount} from 'svelte'
  import MainPage from './components/mainPageComponents/MainPage.svelte'

  onMount(() => {
    const preferredOSTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    const currentTheme = localStorage.getItem('theme') ?? preferredOSTheme

    if (currentTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })
</script>

<MainPage />

<!-- <div class:dark><MainPage /></div> -->
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
