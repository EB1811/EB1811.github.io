<script lang="ts">
  export let title: string
  export let desc: string
  export let tech: string
  export let link: string
  export let imgLink: string
  export let imgAlt: string
</script>

<div class="w-full max-w-xs">
  <div
    class="flex h-56 items-center justify-center overflow-hidden rounded-md border-b-8 border-emerald-400 bg-white transition-colors duration-500 dark:border-indigo-700 dark:bg-neutral-800"
  >
    <img class="h-full w-full object-cover" src={imgLink} alt={imgAlt} />
  </div>

  <a
    href={link}
    class="mt-5 block overflow-hidden rounded-md bg-gray-600 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-neutral-800"
  >
    <div class="px-3 py-2 text-center text-sm">
      <p class="text-lg font-semibold text-white">
        {title}
      </p>
      <p class="mt-1 text-gray-300">
        {desc}
      </p>
      <span class="mt-2 block text-gray-400">{tech}</span>
    </div>
  </a>
</div>
