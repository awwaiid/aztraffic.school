<template>
  <main class="prose prose-invert">
    <ContentDoc />
  </main>
</template>

<style lang="scss">

main {
  padding: 1em;
  max-width: 600px;
  margin: 2em auto;
  border: 5px solid black;
  border-radius: 20px;
  background-color: rgb(0 0 0 / 0.9);
}

h1 {
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 1em;
}

h2 {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1em;
}

p {
  margin-bottom: 2em;
}

body {
  // background image on black stretched to width and non-repeating y
  background: url(/traffic-background.jpg) #000 no-repeat top center fixed;
  //
}

</style>
