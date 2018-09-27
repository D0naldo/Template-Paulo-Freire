<template>
    <div ref="carousel" class="carousel carousel-slider center" >
        <div class="container carousel-fixed-item" style=" height:40%" >
            <div class="left">
                <a @click="prev" class=" waves-effect waves-circle waves-light"><i class="fas fa-chevron-left fa-2x"></i></a>
            </div>
            
            <div class="right">
                <a @click="next"  class="waves-effect waves-circle waves-light"><i class="fas fa-chevron-right fa-2x"></i></a>
            </div>
        </div>
            <div class="carousel-fixed-item center">
                <a class="btn waves-effect green white-text darken-text-2 ">Contactanos</a>
            </div>
            <div class="carousel-item" href="#one!" id="img1">
                <h1 class="slogan white-text">"El conocimiento se construye, no se transmite"</h1>
            </div>
            <div class="carousel-item" href="#two!" id="img2">
                <h1 class="white-text slogan">Nuestras instalaciones</h1>
            </div>
            <div class="carousel-item" href="#three!" id="img3">
                <h1 class="white-text slogan">Nuestros Profesores</h1>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: {
        
    },
    mounted() {
        this.instanceCarousel = M.Carousel.init(this.$refs.carousel, {
        fullWidth: true,
        indicators: true,
        dist: 0
        });
        this.instanciaAutoPlay = M.Carousel.getInstance(this.$refs.carousel);
        setTimeout(this.autoplay, 6000)
    },
    methods:{
        autoplay: function(){
        this.instanciaAutoPlay.next('next');
        setTimeout(this.autoplay, 6000)
        },
        stop: function(){
            console.log("stopped")
        },
        next: function(e) {
        var instancia = M.Carousel.getInstance(this.$refs.carousel);
        instancia.next("next");
        },
        prev: function(e) {
        var instancia = M.Carousel.getInstance(this.$refs.carousel);
        instancia.prev("prev");
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

.slogan{
    font-family: 'Inconsolata', monospace;
    margin-top: 20vh;
    font-size: 3em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
}
a{
    color: rgb(133, 133, 133);
}
.btn{
    border-radius: 3px;
}
.carousel{
    height: 60vh !important;
    width: 100%;
}
.colof{
    width: 100%;
    height: 100%;
    background: #0f0f0f;
    opacity: .7;
    position: fixed;
}
#img1{       
    background-image: url('../assets/slider/navbar-1.jpg');  
    
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;    
}   
#img2  
{       
    background-image: url('../assets/slider/navbar-2.jpg');   
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: scroll;

    /* This is what makes the background image rescale based
        on the container's size */
    background-size: cover;

    /* Set a background color that will be displayed
        while the background image is loading */
    background-color: #464646;      
}   

#img3 {
  /* Location of the image */
  background-image: url('../assets/slider/navbar-3.jpg');
  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  
  /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
  background-attachment: scroll;
  
  /* This is what makes the background image rescale based
     on the container's size */
  background-size: cover;
  
  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;
}



</style>
