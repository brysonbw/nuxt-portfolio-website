<script lang="ts" context="module">
	export function load({ error }: any) {
		return {
			props: {
				message: error.message
			}
		};
	}
</script>

<script lang="ts">
	export let message: string
</script>

<div class="error">
    <div class="w-9/12 m-auto py-16 my-44 flex items-center justify-center">
        <div class="max-w-md">
           <div class="text-5xl font-dark font-bold text-white">404</div>
         <p
           class="text-2xl my-6 text-white md:text-3xl font-light leading-normal"
         >Page {message.toLowerCase()}</p>
       <p class="mt-3 mb-8 text-white"></p>
       
          
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