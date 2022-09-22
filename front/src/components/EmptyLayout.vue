<template>
  <div class="wrapper">
    <div class="formWrapper"><router-view /></div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #e8e8e8;
}

.formWrapper {
  width: 650px;
}
</style>
