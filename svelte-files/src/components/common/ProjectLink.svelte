<script lang="ts">
  export let title: string
  export let desc: string
  export let tech: string
  export let link: string
  export let imgLink: string
  export let imgAlt: string
</script>

<div class="max-w-xs w-full">
  <div
    class="flex items-center justify-center h-56 bg-white dark:bg-gray-800 border-b-8 border-green-400 dark:border-indigo-700 rounded-md overflow-hidden transition-colors duration-500"
  >
    <img class="object-cover h-full w-full" src={imgLink} alt={imgAlt} />
  </div>

  <a
    href={link}
    class="block bg-gray-600 dark:bg-gray-800 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  >
    <div class="py-2 px-3 text-center text-sm">
      <p class="text-white font-semibold text-lg">
        {title}
      </p>
      <p class="text-gray-300 mt-1">
        {desc}
      </p>
      <span class="block text-gray-400 mt-2">{tech}</span>
    </div>
  </a>
</div>
