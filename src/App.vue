<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Source Sans Pro', sans-serif;
    }
    body {
      background-color: #ffffff;
      background-image: linear-gradient(315deg, #ffffff 0%, #5899e2 74%);


      color: black;
    }

    input {
      outline: none;
      color: #000000;
    }
    
    li {
      list-style: none;
    }

    .card {
        border: 1px solid rgb(207, 207, 207);
        background: #e3fbff;
        max-height: 40%;
        max-width: 90%;
        border-radius: 10px;
        width: 700px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    } 

    .cardRegister {
        border: 1px solid rgb(207, 207, 207);
        background: #e3fbff;
        max-height: 60%;
        max-width: 90%;
        border-radius: 10px;
        width: 700px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .buttonLoginAndRegister {
      background-color: rgb(0, 119, 255);
    }

    .buttonLoginAndRegister:hover {
        transition: 0.4s;
        cursor: pointer;
        background: rgb(59, 159, 252);
    }
</style>


