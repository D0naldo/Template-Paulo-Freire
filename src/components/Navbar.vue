<template>
<div>
  <div class="navbar-fixed">
    <nav>
      <div class="container nav-wrapper left-align">
        <a href="#Home" class="brand-logo">Paulo Freire <span>Colegio</span></a>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="fas fa-bars fa-lg"></i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#Home">Inicio</a></li>
          <li><a href="#Oferta">Acerca</a></li>
          <li><a href="#Footer">Contacto</a></li>
          <li><a ref="Dropdown2" data-target="drop-equipos" href=""  class="dropdown-trigger">Oferta Educativa</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <!-- Dropdown Structure -->
  <ul id="drop-equipos" class="dropdown-content">
          <li><a class="black-word-drop" href="#Oferta_Educativa1">Maternal</a></li>
          <li><a class="black-word-drop" href="#Oferta_Educativa2">Preescolar</a></li>
          <li><a class="black-word-drop" href="#Oferta_Educativa3">Primaria</a></li>
          <li><a class="black-word-drop" href="#Oferta_Educativa4">Secundario</a></li>
  </ul>
  <ul id="drop-equipos2" class="dropdown-content">
          <li><a class="black-word-drop" href="#Oferta_Educativa1">Maternal</a></li>
          <li><a class="black-word-drop" href="#Oferta_Educativa2">Preescolar</a></li>
          <li><a class="black-word-drop" href="#Oferta_Educativa3">Primaria</a></li>
          <li><a class="black-word-drop" href="#Oferta_Educativa4">Secundario</a></li>
  </ul>
  
  <ul ref="SideNav" id="slide-out" class="sidenav left-align">
    <li><div class="user-view">
      <div class="background">
        <img src="https://media.istockphoto.com/photos/triangular-abstract-background-picture-id624878906?k=6&m=624878906&s=612x612&w=0&h=uDcbe038RdtiiHchahAbwOYfx0bkPVLfsn0NOjA0gTM=">
      </div>
      <a href="#user"><img class="circle" src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"></a>
      <a href="#name"><span class="black-text name ">Edwin Donaldo</span></a>
      <a href="#email"><span class="black-text email">edwindark@icloud.com</span></a>
    </div></li>
    <li><a href="#Home">Inicio</a></li>
    <li><a href="#Oferta">Acerca</a></li>
    <li><a href="#Footer">Contacto</a></li>
    <li><a ref="Dropdown" data-target="drop-equipos2" href=""  class="dropdown-trigger waves-effect">Oferta Educativa</a></li>
  </ul>
  
          
</div>

</template>

<script>
export default {
  name: 'Navbar',
  props: {
    
  },mounted(){
    this.instanceSideNav = M.Sidenav.init(this.$refs.SideNav, {
      inDuration: 190,
      outDuration: 190
    });

    this.instanceDropEquipos = M.Dropdown.init(this.$refs.Dropdown, {
      hover: false,
      constrainWidth: false,
      alignment: "left",
      coverTrigger: false,
      closeOnClick: true
    });

    this.instanceDropEquipos = M.Dropdown.init(this.$refs.Dropdown2, {
      hover: false,
      constrainWidth: false,
      alignment: "left",
      coverTrigger: false,
      closeOnClick: true
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Teko');


nav{
  background-color: black;
}

.brand-logo{
  font-family: 'Teko',Arial, Helvetica, sans-serif;
  font-size: 2em;
  color: #38b6ec;
}
.brand-logo span{
  color: white;
  font-size: .4em;
}
</style>
