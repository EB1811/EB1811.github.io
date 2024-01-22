<script lang="ts">
  import ProjectLink from '../../common/ProjectLink.svelte'
</script>

<section
  class="bg-gray-700 py-20 transition-colors duration-500 dark:bg-neutral-900"
>
  <div class="mx-auto max-w-5xl px-6 text-center">
    <h2 class="text-3xl font-semibold text-white">My Work</h2>
    <div class="mt-10">
      <div
        class="flex h-96 items-center justify-center overflow-hidden rounded-md border-b-8 border-emerald-400 bg-white transition-colors duration-500 dark:border-indigo-700 dark:bg-neutral-800"
      >
        <img
          class="h-full w-full object-cover"
          src="img/home-page-predira.PNG"
          alt=""
        />
      </div>
      <div class="mt-5 bg-gray-600 p-5 dark:bg-neutral-800">
        <h2 class="text-center text-lg font-semibold text-white">
          Predira Ltd
        </h2>
        <p class="text-sm text-gray-300">
          SaaS platform allowing users to create and maintain a custom trading
          platform, finetuning the products, maturities, and negotiation
          process.
        </p>
        <span class="mt-2 block text-sm text-gray-400">
          React + TypeScript + AWS (AppSync, Lambda, DynamoDB)
        </span>
      </div>
    </div>
    <hr class="mt-12 border-gray-500" />
    <h2 class="mt-10 text-2xl font-semibold text-white">Personal Projects</h2>
    <div class="mt-10 flex items-center justify-center">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectLink
          title="Fair / Share"
          desc="Website helping users share rent, share goods, and separate finances."
          tech="React + Firebase + .NET Core"
          link="https://github.com/EB1811/Fair-Share"
          imgLink="img/home-page-fairshare.PNG"
          imgAlt="Image of Fair / Share website"
        />
        <ProjectLink
          title="TaskScape"
          desc="TaskScape is an attempt to build a more enticing task manager."
          tech="Vue.js + TypeScript"
          link="https://github.com/EB1811/taskscape-vue.js"
          imgLink="img/home-page-taskscape.PNG"
          imgAlt="Image of TaskScape website"
        />
        <ProjectLink
          title="Twitch Stream Finder"
          desc="Chrome extension to find Twitch streams filtered by categories and viewer counts."
          tech="Svelte + Typescript + Vite."
          link="https://github.com/EB1811/TwitchDiscovererExtension"
          imgLink="img/twitch-stream-finder.PNG"
          imgAlt="Image of Twitch Stream Finder extension"
        />
      </div>
    </div>
    <!-- <hr class="mt-12 border-gray-500" /> -->
    <h2 class="mt-10 text-2xl font-semibold text-white">Tools</h2>
    <div class="mt-10">
      <a
        href="https://github.com/EB1811/twitch-to-clip?tab=readme-ov-file"
        class="mx-auto block max-w-xs overflow-hidden rounded-md bg-gray-600 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-neutral-800 lg:max-w-lg"
      >
        <div class="px-3 py-2 text-center text-sm">
          <div class="span relative">
            <svg
              class="absolute right-0 top-2 h-3 w-3 text-gray-400"
              fill="currentColor"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 122.6 122.88"
              ><g
                ><path
                  d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                /></g
              ></svg
            >
          </div>
          <h2 class="text-center text-lg font-semibold text-white">
            Twitch-To-Clip
          </h2>
          <p class="mt-1 text-gray-300">
            CLI tool that allows you to download Twitch clips and convert them
            into vertical videos ideal for TikTok and YouTube Shorts.
          </p>
          <span class="mt-2 block text-sm text-gray-400"> Python </span>
        </div>
      </a>
    </div>
    <div class="mt-8 flex items-center justify-center">
      <a
        href="https://github.com/EB1811"
        class="flex items-center text-white hover:text-gray-200 hover:underline dark:text-gray-300 dark:hover:text-gray-200"
      >
        <span>View More On Github</span>
        <svg
          viewBox="0 0 120.64 122.88"
          class="ml-2 h-4 w-4"
          stroke="currentColor"
          fill="currentColor"
          ><g
            ><path
              d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z"
            /></g
          ></svg
        >
      </a>
    </div>
  </div>
</section>
