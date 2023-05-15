<template>
   <div class="div">
        <form class="cardRegister" @submit.prevent="createUser()">
            <img src="@/assets/turtle-register.png" alt="Tokyo">
            <input type="text" placeholder="Your NickName" v-model="username">
            <input type="email" placeholder="E-mail" v-model="email">
            <input type="text" placeholder="Your adress" v-model="adress">
            <input type="tel" placeholder="Phone Number" v-model="phone">
            <input type="password" placeholder="Password" v-model="password">
            <input type="password" placeholder="Confirm Password" v-model="confirmPassword">
            <p v-if="validationsRegister" class="validationsRegister"> {{ validationsRegister }}</p>
            <p v-if="userCreated" class="userCreated">{{ userCreated }}</p>
            <button class="buttonLoginAndRegister">Criar</button>
           <p>Já tem uma conta? <router-link to="/login">Fazer login</router-link>  </p>
        </form>
    </div>
</template>

<script src="./RegisterScript.js"></script>


<style scoped>

    img {
        width: 75px;
    }

    .validationsRegister {
        font-size: 14px;
        color: rgb(255, 98, 98);
    }

    .userCreated {
        font-size: 14px;
        color: greenyellow;
    }

    div, form {
        font-family: Helvetica, sans-serif;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

  
    input {
        border: 1px solid rgb(150, 144, 144);
        padding: 7px;
        width: 240px;
        font-size: 14px;
    }

    button {
        margin-top: 10px;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        padding: 7px;
        width: 200px;
    }

    button:hover {
        transition: 0.4s;
        cursor: pointer;
    }

    a  {
        color: rgb(3, 97, 45);
    }

    p {
        margin-top: 10px;
        font-size: 13px;
    }

</style>