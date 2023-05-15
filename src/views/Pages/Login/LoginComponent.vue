<template>
    <div class="div">
        <form class="card" @submit.prevent="getLogin()" >
            <img src="@/assets/logo.png">
            <input type="text" placeholder="Nick" v-model="username">
            <input type="password" placeholder="Password" v-model="password">
            <button class="buttonLoginAndRegister">Entrar</button>
            <p class="result" :v-if="result">{{ result }}</p>
           <p>Não tem uma conta? <router-link to="/register">Criar conta</router-link>  </p>
        </form>
    </div>

</template>


<script src="./LoginScript.js"></script>

<style scoped>
.result {
    color: rgb(255, 98, 98);
    font-size: 13px;
}
    body {
        background: rgb(255, 255, 255);
    }
    
    img {
        margin-bottom: 29px;
    }

    div, form {
        font-family: Helvetica, sans-serif;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

  

    a {
        color: rgb(3, 97, 45);
    }
    input {
        outline: none;
        border: 1px solid rgb(153, 153, 153);
        border-radius: 5px;
        padding: 8px;
        width: 200px;
        color: #535353;
        font-size: 14px;
    }

    button {
        margin-top: 10px;
        color: white;
        font-weight: bold;
        border: none;
        padding: 6px;
        width: 150px;
    }


    p {
        font-size: 13px;
    }
</style>