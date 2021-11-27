<script lang="ts">
  import ArticelLinkBar from '../../common/ArticelLinkBar.svelte'
</script>

<section class="bg-white py-20">
  <div class="max-w-5xl px-6 mx-auto text-center">
    <h2 class="text-2xl font-semibold text-gray-800">Latest Articles</h2>
    <div class="flex flex-col items-center justify-center mt-6">
      <ArticelLinkBar
        title="Writing cleaner JavaScript with ES6+"
        date="Coming Soon"
        link="/"
        first={true}
      />
      <ArticelLinkBar
        title="Stop Overcomplicating your State – Try Zustand"
        date="Oct 30 2021"
        link="https://dev.to/emmanuilsb/stop-overcomplicating-your-state-try-zustand-39p4"
      />
    </div>
    <div class="flex items-center justify-center mt-12">
      <a
        href="/"
        class="flex items-center mx-2 text-gray-600 hover:underline hover:text-gray-500"
      >
        <span>View More</span>
      </a>
    </div>
  </div>
</section>
