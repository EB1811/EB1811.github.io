<script lang="ts">
  export let title: string
  export let link: string
  export let date: string
  export let first: boolean = false
</script>

<a
  class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-green-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  class:mt-8={!first}
  href={link}
>
  <div class="flex items-center justify-between px-4 py-2">
    <h3 class="text-lg font-medium text-gray-700">{title}</h3>
    <span class="block text-gray-600 font-light text-sm">{date}</span>
  </div>
</a>
