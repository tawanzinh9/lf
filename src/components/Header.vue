<template lang="">
  <div>
    <ul>
      <li class="logo">
        Tart<span>oo</span>Ga! - Compartilhe seus <span>Pensamentos</span>
      </li>
      <li class="no-sense"><router-link to="/login">Entrar</router-link></li>
      <li class="no-sense">
        <router-link to="/login">Começar por aqui</router-link>
      </li>
      <li class="no-sense"><router-link to="/forum">Forum</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "header",
  data() {
    return {};
  },
};
</script>

<style scoped>


.logo {
  position: absolute;
  left: 0;
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

span {
  color: rgb(132, 255, 142);
}

.localization {
  width: 30px;
}

a {
  max-width: 700px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

a:hover {
  transition: 0.3s;
  padding: 6px;
  border-bottom: 1px solid white;
  color: orange;
}

ul {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 4rem;
  padding: 20px;
  align-items: center;
  text-align: center;

  background-color: #ffffff;
  background-image: linear-gradient(315deg, #0a3a72 0%, #5899e2 74%);
}

.no-sense:hover {
  border-top: 1px solid white;
}

.config {
  width: 20px;
}

@media (max-width: 1300px) {
  div {
    width: 100%;
  }
  .logo {
    display: none;
  }

  ul {
    display: flex;
    justify-content: center;
  }
}
</style>
