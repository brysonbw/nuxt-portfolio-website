<script lang="ts" context="module">
 import dayjs from 'dayjs'
 

  export async function load({ fetch }: {fetch: any}) {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()
    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>


<script lang="ts">

   import avatarImage from '../components/images/bryson-avatar.jpg'
   type IPosts = [{
    meta?: {
      title?: string,
      date?: string
    },
    path?: string
  }]
  export let posts: IPosts
$: posts


</script>


<svelte:head>
	<title>DevBryson | Home</title>
</svelte:head>

    <header class='header'>
            <img       
            src={avatarImage}
              class='borderCircle mx-auto'
              height={144}
              width={144}
              alt='bryson-avatar-img'
            />
            <h1 class='heading2Xl'>Hey, I'm Bryson</h1>
            <h1 class='heading2XlTitle'>a full stack engineer</h1>
          
          </header>

          <!-- Intro-->

<section class='headingMd'>
    <p>I'm a full stack engineer who enjoys all things tech and software. I primarily create, design, and build full stack web and mobile applications. I love learning and discovering new technologies, and challenging myself to solve real-world problems. And most importantly creating the change I want to see in the world :)</p>
    <p class='mt-4'>
     
        <a href='/portfolio'>Portfolio: Skills & Projects</a>
     
    </p>
    <p class='mt-4'>
        Follow me online
    </p>
    <p>
        <a href='https://discordapp.com/users/805262289119739924'>Discord</a>
    </p>
    <p>
        <a href='https://github.com/brysonbw'>Github</a>
    </p>
    <p>
        <a href='https://www.linkedin.com/in/bryson-ward-b54085118/'>LinkedIn</a>
    </p>
  </section>

  <!-- Blog Preview-->
  {#if posts.length > 0 }
  <section class='headingMd padding1px'>
          
    <h2 class='headingLg'>Latest blog posts</h2>
    <ul class='list'>
     {#each posts as post}
     <li class='listItem'>
     
        <a href={post.path}>{post.meta?.title}</a>
     
      <br />
      <small class="lightText">
       {dayjs(post.meta?.date).format('MMMM DD, YYYY')}
      </small>
    </li>
     {/each}
    </ul>
  </section>
  {:else}
     {" "}
  {/if}
    
      

  <style>
 .headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .borderCircle {
    border-radius: 9999px;
  }

  .headingLg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .padding1px {
    padding-top: 1px;
  }

  .heading2XlTitle {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 0;
    margin-bottom: 1em;
    text-align: center;
  }

  .heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
    text-align: center;
  }


  .listItem {
    margin: 0 0 1.25rem;
  }
  
  .lightText {
    color: #666;
    margin-bottom: 1rem;
  }
  </style>