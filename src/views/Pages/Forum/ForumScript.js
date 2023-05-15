import axios from "axios"
import router from '@/router';
import moment from "moment"

export default {

    name: "Forum",
    data() {
       return {
        post_content: "",
        posts: [],
        // Pegar informações sobre o usuario
        username: localStorage.getItem("username"),
        emailUser:  localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        adress: localStorage.getItem("adress"),
        
        // -- fim 

        // pegando a api de forum
        
        baseURL: "https://backend-turtle-pex86ccc5-tiagobonito44-hotmailcom.vercel.app/forum"
       }
    },    

   
    mounted() {
        document.body.style.background = 'white'; // Altere para a cor desejada
      },

   created() {
       this.getPosts()
   },
    methods: {
        
        async createPost(){
            
            const postData = {
                content: this.post_content,
                username: localStorage.getItem("username")
              };

         await axios.post(`${this.baseURL}`, postData)
         .then((data) => {
            console.log(data)
            this.getPosts()
         
         })
         .catch((e) => {
            console.log(e)
         })

         this.formatDataTime(this.posts.createdAt)
         this.post_content = ""
        },



        async getPosts() {
         await axios.get(`${this.baseURL}`)
         .then((posts) => {
            console.log(posts.data.posts)
            this.posts = posts.data.posts.reverse();
            this.posts = posts.data.posts
           
         })
         .catch((err) => {
            console.log(err)
         })
        },

        formatDataTime(dateTime) {
            return moment(dateTime).fromNow()
        },


        logout() {

            localStorage.removeItem("username")
            localStorage.removeItem("email")
            localStorage.removeItem("phone")
            localStorage.removeItem("adress")
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            router.push( {name: "home"} )
        }
    }
}
