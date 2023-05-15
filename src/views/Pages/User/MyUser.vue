<template lang="">
   <div scoped>
        <Header></Header>
        <div class="box">
            <div class="inside-box">
                <div class="user">
                    <img src="@/assets/icons/user.svg">
                </div>

                <div class="linha">
                </div>

                <div class="box-informations">
                    <div class="name">
                        <p>Hi, {{ username }}!</p>
                    </div>
                    
                    <div class="informations">
                        <p>Email: {{ emailUser }}</p>
                        <p>Phone: {{ phone }}</p>
                        <p>Your Adress: {{ adress }}</p>
                        <button>Edit Profile</button>
                    </div>

                    
                </div>

            </div>
        </div>
   </div>
</template>

<script src="./MyUserScript.js"></script>


<style scoped>

    html {
        background: black;
    }
    .box {
        display: flex;
        height: 100vh;
        width: 100vw;  
        justify-content: center;
        align-items: center;
        border: 1px solid black;      
    }

    .inside-box {
        background: #1b1b1b;
        color: white;
        display: flex; 
        align-items: center;
        flex-direction: column;
        height: 800px;
        width: 700px;
        border-top: 1px solid white;
        border: 1px solid rgb(75, 75, 75);
        border-radius: 22px;
    }

    .user {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        width: 100%;
       
    }

    img {
        filter: invert();
        width: 100px;
    }

    .linha {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid greenyellow;
        width: 30vw;
    }

    .box-informations {
        text-transform: initial;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
    }

    .informations {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border: 1px solid rgb(155, 155, 155);
        padding: 40px;
        border-radius: 2px;
    }


    button {
        cursor: pointer;
        border: none;
        border-radius: 2px;
        padding: 5px;
        background: rgb(72, 117, 4);
        color: rgb(236, 236, 236);
    }
   
    
</style>