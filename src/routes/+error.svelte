<script>
	import { page } from '$app/stores';
</script>

<div class="error">
    <div class="w-9/12 m-auto py-16 my-44 flex items-center justify-center">
        <div class="max-w-md">
           <div class="text-5xl font-dark font-bold text-black dark:text-white">404</div>
         <p
           class="text-2xl my-6 text-black dark:text-white md:text-3xl font-light leading-normal"
         >Page {$page.error?.message}</p>
       <p class="mt-3 mb-8 text-black dark:text-white"></p>
       
          
       <a href='/' class="">back to home</a>
      
 </div>
</div>
</div>

<style>
  .error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>