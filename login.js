import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const site = 'https://vue3-course-api.hexschool.io/v2/';
const url = `${site}admin/signin`;

createApp({
    data(){
        return{
            user:{
                username: '',
                password: '',
            },
        }
    },
    methods: {
        login(){
            axios.post(url, this.user)
                .then((res)=>{
                    const { token, expired } = res.data;
                    // 寫入 cookie token
                    // expires 設置有效時間
                    document.cookie = `Token=${token}; expires=${new Date(expired)}`;
                    // 轉址
                    window.location = `products.html`;
                })
                .catch((err) => {
                  alert(err.response.data.message);
                })
        },
    },
}).mount('#app');