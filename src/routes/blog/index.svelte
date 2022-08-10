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
  import avatarImage from '../../components/images/bryson-avatar.jpg'
  type IPosts = [{
    meta?: {
      title?: string,
      date?: string
    },
    path?: string
  }]
  export let posts: IPosts
</script>

<svelte:head>
	<title>DevBryson | Blog</title>
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

    <header class='header text-center'>
      <h1 class='heading2Xl'>Blog</h1>
          </header>

{#each posts as post}
  <h2 class="mt-3">
    <a href={post.path}>
      {post.meta?.title}
    </a>
  </h2>
  {dayjs(post.meta?.date).format('MMMM DD, YYYY')}
{/each}

<div style="margin: 3rem 0 0;">
         
  <a href="/">← Back to home</a>

</div>


<style>
   .heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }
</style>