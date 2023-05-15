<template lang="">
  <div>
    <Header></Header>
    <div class="section-one">
      <div class="button">
        <p>se registre agora e entre em nosso forum exclusivo</p>
        <router-link to="/register"><button>Vamos lá!</button></router-link>
      </div>
      <div class="img-one">
        <img src="@/assets/tart.jpg" class="primary-img" />
      </div>
    </div>
    <!--Fazer mais seções-->
  </div>
</template>

<script src="./HomeScript.js"></script>

<style scoped>
.section-one {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 400px;
  background: #ffffff;
  color: black;
}

.button,
.img-one {
  max-width: 900px;
}

.primary-img {
  width: 500px;
}
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  transition: 0.5s;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #1876e0 0%, #8afdba 74%);
  color: white;
  width: 220px;
  font-size: 17px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 14px;
  border-bottom: 6px solid rgb(190, 190, 190);
}

button:hover {
  transition: 0.5s;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #006be6 0%, #11d161 74%);
  transform: scale(1.1);
}

p {
  font-size: 21px;
}

@media (max-width: 1400px) {
  .img-none {
    display: none;
  }

  div {
    width: 100%;
  }

  .section-one {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: start;
    text-align: center;
  }

  @media (max-width: 600px) {
    button {
      padding: 4px;
    }

    img,
    .img-one {
      display: none;
    }
  }
}

@media (max-width: 1000px) {
  .section-one {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: start;
    text-align: center;
  }
}
</style>
