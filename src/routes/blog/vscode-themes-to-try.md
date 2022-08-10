---
title: 'VSCode Theme You Should Try'
date: '2022-08-09'
---

<svelte:head>
	<title>DevBryson | {title} </title>
</svelte:head>


<h1 class="headingLg">{title}</h1> 
<small class="lightText">August 08, 2022</small><br /><br />


Here is one VSCode theme I use and recommend you should try.<br /><br />

## [City Lights theme](https://marketplace.visualstudio.com/items?itemName=Yummygum.city-lights-theme)
I like this theme because it's easy on the eyes, both during the day and especially at night. I customized the comments and strings color, which can be done in your user [settings](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme).<br />
Here are my configurations, but you can customize the color theme however you like or keep the default color/settings.<br />
```
 "editor.tokenColorCustomizations": {
    "[City Lights]": {
      "comments": "#c9c9c9",
      "strings": "#7bacda"
    }
  },
  "workbench.colorTheme": "City Lights"
```
<br /><br />


  
 <div style="margin: 3rem 0 0;">
         
            <a href="/">← Back to home</a>
         
        </div>
       

<style>
  h1 {
   font-size: 2.7rem
  }
  h2 {
   font-size: 1.3rem
   
  }
 
 .lightText {
    color: #666;
    margin-bottom: 1rem;
  }

  .headingLg {
    font-size: 2rem;
    line-height: 1.4;
    margin: 1rem 0;
  }

      </style>