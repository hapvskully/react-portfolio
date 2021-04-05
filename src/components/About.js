import React from "react";
function About(){
return (
   <>
   {/* style={{ borderRadius: "0px", backgroundImage: "url( ....)" }} */}
   <div class="container text-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80);", backgroundRepeat: "repeat;", backgroundColor: "whitesmoke;", backgroundSize: "100%;", border: "lightgrey solid 2px;", borderRadius: "5px;"}}>
    <div class="row">
      <div class="col-12">
      </div>
    </div>
  <br/>
  <div class="row">
   <div class="col-12">
    <div class="card text-center" style={{borderRadius: "0px;", backgroundImage: "url(https://t4.ftcdn.net/jpg/03/57/79/15/360_F_357791527_M5zTOEvGAFZhNsBKtWX0JI2kCuL9CLNP.jpg);"}}>
    <div class="card-body" style={{background: "whitesmoke;"}}>
      <h3 class="card-title">About Me</h3>
    </div>
  </div>
  
   <br/>
   <p></p>
 <div class="container">
  <div class="row">
    <div class="col-3">
       <img src="https://picsum.photos/200/?grayscale&random=1" alt="" id="img1"/>
    </div>
    <div class="col-3">
        <img src="https://picsum.photos/200/?grayscale&random=2" alt="" id="img2"/>
    </div>
    <div class="col-3">
        <img src="https://picsum.photos/200/?blue&random=3" alt="" id="img3"/>
    </div>
    <div class="col-3">
        <img src="https://picsum.photos/200/?grayscale&random=4" alt="" id="img4"/>
    </div>
  </div>
  <p></p>
 </div>
 </div>

 <br/> 

 <div class="container">
 <div class="row">
   <div class="col-12">
 <div class="card text-center" style={{borderRadius: "0px;", backgroundImage: "url(https://t4.ftcdn.net/jpg/03/57/79/15/360_F_357791527_M5zTOEvGAFZhNsBKtWX0JI2kCuL9CLNP.jpg);"}}>
  <div class="card-body" style={{background: "whitesmoke;"}}>
    <p class="card-text">
      <p class="card-text">I'm from Port Hope, a small town about an hour from Toronto. I spend my spare time usually either playing video games or at work.
        I love art as well as Cars I started highschool in an automotive mechanics course, and then in art classes, but decided I should expand my horizons by looking into many other opportunities when I started to hear a lot about Web Development and got inspired to learn and find a career in Web Development.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda minus quis tempore, explicabo illum, exercitationem alias officia, eveniet rerum architecto sed iste? Alias dolores sit molestiae, sed inventore minus.</p></p>
  </div>
</div>
  </div>
 </div>
</div>
</div>
</div>


   </>
   )
}
export default About;