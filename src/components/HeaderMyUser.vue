<template lang="">
    <div>
        <ul>
            <li class="logo">Tart<span>oo</span>Ga! - Share your <span>Dreams</span> <img src="@/assets/localization.png" class="localization"> i|O_</li>
            <li class="no-sense"><router-link to="/">Inicio</router-link></li>
            <li class="no-sense"><router-link to="/forum">Forum</router-link></li>
            <li  @click="logout()" class="no-sense"><router-link to="/">Sair</router-link></li>
        </ul>
    </div>
</template>

<script lang="ts">

    export default {
        name: "headeruser",
        data() {
            return {}
        },
        methods: {
            logout() {

    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")
    localStorage.removeItem("adress")
    localStorage.removeItem("token")
    localStorage.removeItem("userId")

}
        }
    }
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
        color: rgb(0, 221, 18);
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
       background: rgba(132, 132, 155, 0.95);;
        
    }

    .no-sense:hover {
        border-top: 1px solid white;
    }
  

    .config {
        width: 20px;
    }

   

    @media(max-width: 1300px) {
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

    @media(max-width: 600px) {
        .config {
            display: none;
        }

        .no-sense {
            display: none;
        }
    }

   
</style>