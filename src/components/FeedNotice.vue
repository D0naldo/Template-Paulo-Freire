<template>
<div class="center Notice">
    <br>
    <h3 style="text-transform: uppercase; font-weight: bold;">Noticias</h3>
    <div class="container ">
    <div ref="carousel" class="carousel carousel-slider center" >
        <div class="container carousel-fixed-item" style="  margin:0 0; width:100% !important" >
            <div class="left">
                <a @click="prev" class=" waves-effect waves-circle waves-light"><i class="fas fa-caret-left fa-3x"></i></a>
            </div>
            
            <div class="right">
                <a @click="next"  class="waves-effect waves-circle waves-light"><i class="fas fa-caret-right fa-3x"></i></a>
            </div>
        </div>
        
            <div class="row">
                <div class="col l12">
                    <div class="carousel-item" href="#one!">
                        <div class="col l1 hide-on-med-and-down"></div>
                        <div class="col l4 s12 hide-on-med-and-down" >
                            <img src="../assets/notice/lapice.gif" alt="Calendario escolar" style="width:100%">
                        </div>
                        <div class="col l6 s12">
                            <h2>A crear se a dicho!</h2>
                            <p class="orange-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, amet sequi laborum, officiis quas dolor cumque debitis, sunt perspiciatis voluptatem ducimus sint quaerat doloremque qui velit molestiae? Omnis, quaerat vitae.</p>
                        </div>
                    </div>
                    <div class="carousel-item" href="#two!">
                        <div class="col l1 hide-on-med-and-down"></div>
                        <div class="col l6 s12">
                            <h2>Arte para todos!</h2>
                            <p class="blue-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, amet sequi laborum, officiis quas dolor cumque debitis, sunt perspiciatis voluptatem ducimus sint quaerat doloremque qui velit molestiae? Omnis, quaerat vitae.</p>
                        </div>
                        <div class="col l4 s12 hide-on-med-and-down" >
                            <img src="../assets/notice/manos.jpg" alt="Calendario escolar" style="width:60%; ">
                        </div>
                    </div>
                    <div class="carousel-item" href="#three!">
                        <div class="col l1 hide-on-med-and-down"></div>
                        <div class="col l6 s12">
                            <h2>Calendario Escolar</h2>
                            <p class="green-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, amet sequi laborum, officiis quas dolor cumque debitis, sunt perspiciatis voluptatem ducimus sint quaerat doloremque qui velit molestiae? Omnis, quaerat vitae.</p>
                        </div>
                        <div class="col l4 s12 hide-on-med-and-down" >
                            <img src="../assets/notice/calendar.jpg" alt="Calendario escolar" style="width:100%">
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
            
    </div>
</div>
    
</template>

<script>
export default {
    name: 'FeedNotice',
    props: {
        
    },
    mounted() {
        this.instanceCarousel = M.Carousel.init(this.$refs.carousel, {
        fullWidth: true,
        indicators: true,
        dist: 0
        });
        this.instanciaAutoPlay = M.Carousel.getInstance(this.$refs.carousel);
    },
    methods:{
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

a{
    color: rgb(133, 133, 133);
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
