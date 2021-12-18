<script lang="ts">
  export let title: string
  export let link: string
  export let date: string
  export let first: boolean = false
</script>

<a
  class="max-w-2xl w-full block bg-white dark:bg-neutral-800 shadow-md rounded-md border-t-4 border-emerald-400 dark:border-indigo-700 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
  class:mt-8={!first}
  href={link}
>
  <div class="flex items-center justify-between px-4 py-2">
    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">
      {title}
    </h3>
    <span class="block text-gray-600 dark:text-gray-300 font-light text-sm"
      >{date}</span
    >
  </div>
</a>
