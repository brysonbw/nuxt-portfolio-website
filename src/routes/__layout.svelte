<script>
import Navbar from "../components/Navbar.svelte";
  import "../app.css";
import Footer from "../components/Footer.svelte";
</script>


<Navbar />
<div class="container">
  <slot  />  
</div>
<Footer />


<style>
  .container {
    max-width: 36rem;
    padding: 0 1rem;
    margin: 6rem auto 6rem;
  }
</style>