<script lang="ts">
import Contact from "../components/Contact.svelte";
import Github from "../components/Github.svelte";
import Projects from "../components/Projects.svelte";
import TechStack from "../components/TechStack.svelte";
//import Web3 from "../components/Web3.svelte";
import Languages from "../components/Languages.svelte";
import avatarImage from '../components/images/bryson-avatar.jpg'
</script>

<svelte:head>
	<title>DevBryson | Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
          
</svelte:head>


    <a href="/">
      <img
        src={avatarImage}
        class="borderCircle mx-auto"
        height={108}
        width={108}
        alt="bryson-avatar-img"
      />
    </a>



<div>
    <!-- Languages --->
    <Languages />
     <!-- Tech Stack --->
     <TechStack />
      <!-- Web3 --->
     <!--  <Web3 /> -->
       <!-- Projects --->
       <Projects />
       <!-- Github --->
       <Github />
        <!-- Contact --->
        <Contact />
</div>
<div style="margin: 3rem 0 0;">
         
  <a href="/">← Back to home</a>

</div>


<style>
     .borderCircle {
    border-radius: 9999px;
  }
</style>