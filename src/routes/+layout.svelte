<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";

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