<script lang="ts">
</script>

<div id="first">
  <div id="contactInfo" style="color: white">
    <a href="https://github.com/EB1811" class="projectLink">GitHub</a>
    |
    <a href="https://www.linkedin.com/in/emmanuils-borov" class="projectLink">
      LinkedIn
    </a>
  </div>
  <div id="namecontainer">
    <!-- <img class="selfImage" src="Eman.jpg" /> -->
    <h1 id="name">Emmanuil Borovikovs</h1>
    <hr style="min-width: 250px; max-width: 750px; width: 50%" />
    <h1 id="role">Software Engineer</h1>
  </div>
  <div id="showcaseButton">
    <div id="buttonToProjects">
      <a href="#projectsMenu" id="showcaseText">
        <span class="showcaseText"> Click Here to see my Projects </span>
      </a>
      <div>
        <span style="color: #fff; font-size: 0.75rem">or scroll ↓</span>
      </div>
    </div>
  </div>
</div>

<style>
  #first {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 80%;
    min-height: 600px;
    background-color: rgba(20, 20, 20, 0.5);
  }
  #namecontainer {
    flex-grow: 1;
    text-align: center;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }
  #name {
    color: #fff;
    font-family: Helvetica, sans-serif;
    font-size: 3.5rem;
    font-weight: 500;
    margin: 10px 10px 0px 10px;
  }
  #contactInfo {
    flex-grow: 1;
    text-align: center;
    margin-top: 15px;
  }
  #role {
    width: 100%;
    color: #fff;
    font-family: 'arial';
    font-size: 1.75rem;
    font-weight: 300;
    margin: 0;
  }
  #showcaseButton {
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  #buttonToProjects {
    margin-bottom: 20px;
    text-align: center;
  }
  /* Name Page - Small */
  @media only screen and (max-width: 700px) {
    #buttonToProjects {
      margin-bottom: 25px;
    }
    #name {
      font-size: 2.5rem;
    }
    #role {
      font-size: 1.25rem;
    }
    #contactInfo {
      margin-bottom: 30px;
    }
  }
  /* End Name Page */
</style>
