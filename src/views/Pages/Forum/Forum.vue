<template>
    <div>
         <div class="header">
            <ul>
                <li class="img-li">
                    <p class="p-logo">Tart<span>oo</span>Ga! - Compartilhe seus <span>Pensamentos</span></p>
                    <img src="@/assets/logo.png" class="bunny">
                </li>
                <li class="input-li">
                     <input type="text" class="input-search" placeholder="Procurando por algo?">
                    <img src="@/assets/search.png" class="img-search">
                </li>

                <li class="profile">
                   <div class="user">
                    <img src="@/assets/icons/user.png" title="Meu Perfil" class="img-profile">
                    <p>Meu perfil</p>
                   </div>
                </li>
            </ul>
         </div>

         <div class="empty-space"></div>


         <div class="computerOnly">
           <div class="itens-left">
             <img src="@/assets/above_name.png">
             <h1 class="myName">Hi! {{ username }} 💚</h1>
             <div class="email">
                <img src="@/assets/email.png" class="email-img">
                <p class="p-phone">{{ emailUser }}</p>
            </div>
            <div class="phone">
                <img src="@/assets/phone.png" class="phone-img">
                <p class="p-phone">{{ phone }}</p>
            </div>

            <div class="adress">
                <img src="@/assets/adress.png" class="adress-img">
                <p class="p-phone">{{ adress }}</p>
            </div>
           </div>
         </div>
         <div class="sendTweet">
            <div class="send">
                <input type="text" placeholder="Pensando em alguma coisa?" class="input-sent" v-model="post_content">
             <img src="@/assets/sent.png" class="sent" @click="createPost()">
            </div>
         </div>

         <!--Começo do Forum-->
         <div class="forum" v-for="post in posts" :key="post._id">
            <!--Começo dos tweets-->
            <div class="tweets">
                <div class="imgAndUsername">
                    <img src="@/assets/bunny-user.png" class="img-bunny-user">
                     <p class="p-user"> {{ post.username }}</p>
                     <p class="datePub">{{ this.formatDataTime(post.createdAt) }}</p>
                </div>
                <!--Conteudo do tweet-->
               <div class="content">        
                  <p>{{ post.content }}</p>
               </div>
               <!--fim-->

               <!--Comentarios-->
               <div class="comment">
                    <div class="coments">
                        <img src="@/assets/heart.png" class="ribbon">
                       <div class="input">
                        <input type="text" placeholder="Comentar.." class="input-comennt">
                        <img src="@/assets/comennt.png" class="comennt-img">
                        
                       </div>
                    </div>
               </div>
            </div>

         </div>


    

         <footer>
            <ul>
                <li class="li-footer">
                   
                    <li class="li-house hover">
                        <router-link to="/"><img src="@/assets/casa.png" class="house"></router-link>
                    </li>

                    <li class="middle hover">
        
                        <router-link to="/"><img src="@/assets/posts.png" class="house"></router-link>
                    </li>

                    <li class="logout hover">
                        <router-link to="/"><img src="@/assets/logout.png" class="house" @click="logout()"></router-link>
                    </li>
                </li>
            </ul>
         </footer>
    </div>
</template>

<script src="./ForumScript.js"></script>

<style scoped >

.datePub {
    font-size: 10px;
    color: rgb(255, 230, 0);
}
.phone-img, .adress-img, .email-img {
    width: 20px;
}
.phone, .adress, .email{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;
    gap: 0.5rem;
    

}

.p-phone {
    font-size: 11px;
}
.input-comennt {
    border-radius: 2px;
    border: none;
    outline: none;
    padding: 2px 5px;
}
.input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}
.comment {
   margin-top: 35px;
}

.coments {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 1rem;
}



.ribbon {
    margin-left: 10px;
}
.ribbon, .comennt-img {
    width: 20px;
}
.img-li {
    color: white;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

span {
    color: rgb(132, 255, 142);
}
.myName {
    font-size: 18px;
}
.itens-left {
    width: 200px;
    padding: 20px;
}
.computerOnly {
    position: fixed;
    margin-top: 90px;
    text-align: center;
    border-right: 2px solid #a6b9ab;
    height: 100%;
    border-radius: 22px;
    background-image: linear-gradient(315deg, #e5ffec 0%, #ffffff 74%);
}



.user {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
}
.profile {
    position: absolute;
    right: 0;
}

.img-profile {
    width: 35px;
}
.empty-space {
    height: 30px; /* Ajuste a altura conforme necessário */
  }
 
  .logout {
    position: absolute;
    right: 0;
  }

  .middle {
    margin: 0 auto;
  }
  .li-house {
    position: absolute;
    left: 0;
  }
    .house {
        width: 35px;
    }
    footer {
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #ffffff;
        background-image: linear-gradient(315deg, #4548e9 0%, #9fffb4 74%);

    }

    .li-footer {
        display: flex;
        gap: 2rem;
    }

     .hover:hover {
        transition: 0.5s;
        transform: scale(1.2);
     }
    .itens {
        display: flex;
        justify-content: start;
    }

    
    .img-bunny-user {
        width: 35px;
    }

   .content {
    margin-left: 20px;
    
   }

    .p-user {
        font-size: 12px;
        border-bottom: 1px solid rgb(199, 253, 255);
    }
    .imgAndUsername {
        margin-top: 5px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
   

    .tweets {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: rgb(228, 228, 228);
        border-radius: 2px;
        background-color: #245894;
         height: 200px;
         width: 600px;
    }

    .forum {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
       }

       .send {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
       }
 .sendTweet {
    display: fixed;
    margin: 50px;
   
 }

 .sent:hover {
    cursor: pointer;
    transition: 0.4s;
    filter: invert(90);
 }
 .input-sent {
    border: 1px solid rgb(172, 172, 172);
    outline: none;
    border-radius: 12px;
    padding: 5px;
    width: 250px;
 }
 .sent {
    width: 25px;
 }

    .header {
        position: fixed;
        width: 100%;
       padding: 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      background-image: linear-gradient(315deg, #0a3a72 0%, #5899e2 74%);
    }

    .img-li {
        position: absolute;
        left: 0%
    }

  
    .input-li {
        margin-right: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    
    .img-search {
        width: 22px;
        
    }

    .img-search:hover {
        cursor: pointer;
        transform: scale(1.1);
        
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bunny {
        width: 40px;
    }

    .input-search {
        border: none;
        width: 150px;
        padding: 3px;
        border-radius: 12px;
    }

    
@media (max-width: 700px) {

     .p-logo {
        display: none;
     }
    .forum {
        display: fixed;
        margin-bottom: 20px;
    }
    .tweets {
        width: 300px;
    }

    .computerOnly {
        display: none;
    }

    .input-li {
        margin-right: 0;
    }

    
  
}


</style>