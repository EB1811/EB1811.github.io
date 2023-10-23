<script lang="ts">
  import NameSection from './sections/NameSection.svelte'
  import Header from './sections/Header.svelte'
  import MidAboutMeSection from './sections/MidAboutMeSection.svelte'
  import Articles from './sections/articles.svelte'
  import Projects from './sections/Projects.svelte'
  import Footer from './sections/Footer.svelte'
</script>

<div class="bg-white transition-colors duration-500 dark:bg-neutral-800">
  <Header />
  <NameSection />
  <MidAboutMeSection />
  <Articles />
  <Projects />
  <Footer />
</div>
