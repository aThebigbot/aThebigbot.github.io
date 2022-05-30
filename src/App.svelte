<script lang="ts">
  const github = () => {
    window.location.replace("https://github.com/Thebigbot0000");
  };

</script>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
  <body>
    <br>
    <div class="main">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <h1>
        <img
          class="icon"
          src="https://avatars.githubusercontent.com/u/77632836?v=4"
          alt=""
        /> Thebigbot
      </h1>
      <p class="desc">
        Hello! I am thebigbot, I am an Italian developer. <br /> I can use JS, TS, HTML,
        CSS, Shell and I'm learning many others.
      </p>
      <hr class="line"/>
      <button class="btn" on:click={() => github()}><i class="bi bi-github" /></button>
    </div>
    
    <style lang="scss">
      @import "./styles/main.scss";
    </style>  
  </body>
</html>
