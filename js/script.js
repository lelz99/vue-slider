const { createApp } = Vue;
const app = createApp({
    data() {
        return{
            pictures,
            currentIndex: 0,
        }
    },
    methods:{
        goToNext(){
            if(this.currentIndex < 4){
                this.currentIndex++
            } else {
                this.currentIndex = 0
            }
        },
        goToPrev(){
            if(this.currentIndex === 0){
                this.currentIndex = this.pictures.length - 1
            } else {
                this.currentIndex--
            }
        },
    },
});
app.mount('#root');

