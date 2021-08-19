import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
   
    <div class="container">
      
    <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

    
        <div class="controls-top">
            <div class="float-right">
                <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-angle-left"
                          ></i></a>
                <a class="btn-floating" href="#multi-item-example" data-slide="next">
                    <i class="fa fa-angle-right"   ></i></a>
            </div>
        </div>

        <ol class="carousel-indicators">
            <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>

        </ol>
    
        <div class="carousel-inner" role="listbox">

            <div class="carousel-item active">

                <div class="col-md-4" >
                    <div class="card mb-2">
                        <img class="card-img-top" src="image.png" alt="Card image cap" />
                        <div class="grad1" id="inline">
                            <i class="material-icons" >access_time</i>
                            <p> 5 days left to enroll </p>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">IBPS PO & SBI PO Live Coaching in English Batch..</h4>
                            <p class="card-text">
                                <div id="inline1">
                                    <i class="fa fa-caret-square-o-right" ></i>
                                        <p style={{color:"gray"}}>240+ Live Classes</p>
                                    
                                </div>
                                
                                <div id="inline">
                                    <div id="inline1">
                                        <i class="material-icons" id="book" >bookmark_border</i>
                                        <p  style={{color:"gray"}}>9000+ Questions</p>
                                    
                                    </div><div id="inline1">
                                        <i class='far fa-sticky-note' ></i>
                                        <p  style={{color:"gray"}}>120+ Notes</p></div></div></p>

                        </div>
                    </div>
                </div>


                <div class="col-md-4" >
                    <div class="card mb-2">
                        <img class="card-img-top" src="image.png" alt="Card image cap" />
                        <div class="grad1" id="inline">
                            <i class="material-icons" >access_time</i>
                            <p>Starts in 15 days</p>


                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Civil Junior Engineer Live Coaching Batch 2</h4>
                            <p class="card-text">
                                <div id="inline1">
                                    <i class="fa fa-caret-square-o-right" ></i>
                                        <p style={{color:"gray"}}>240+ Live Classes</p>
                                    
                                </div>  <div id="inline">
                                    <div id="inline1">
                                        <i class="material-icons" id="book"  >bookmark_border</i>
                                        <p  style={{color:"gray"}}>9000+ Questions</p>
                                    
                                    </div><div id="inline1">
                                        <i class='far fa-sticky-note' ></i>
                                        <p  style={{color:"gray"}}>120+ Notes</p></div></div>

                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4" >
                    <div class="card mb-2">
                        <img class="card-img-top" src="image.png" alt="Card image cap" />
                        <div class="grad2" id="inline">
                            <i class="material-icons">access_time</i>
                            <p> Batch closes in 2 days </p></div>
                        <div class="card-body">
                            <h4 class="card-title">UPSC CDS- 2 2021 Live Coaching Batch 3</h4>
                            <p class="card-text">
                                <div id="inline1">
                                    <i class="fa fa-caret-square-o-right" ></i>
                                    <p style={{color:"gray"}}>240+ Live Classes</p>
                                    
                                </div>  <div id="inline">
                                    <div id="inline1">
                                        <i class="material-icons" id="book" >bookmark_border</i>
                                        <p  style={{color:"gray"}}>9000+ Questions</p>
                                    
                                    </div><div id="inline1">
                                        <i class='far fa-sticky-note' ></i>
                                        <p  style={{color:"gray"}}>120+ Notes</p></div></div>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
         
            <div class="carousel-item">

                <div class="col-md-4" >
                    <div class="card mb-2">
                        <img class="card-img-top" src="image.png" alt="Card image cap"  />
                        <div class="grad1" id="inline">
                            <i class="material-icons" >access_time</i>
                            <p> 5 days left to enroll </p></div>
                        <div class="card-body">
                            <h4 class="card-title">IBPS PO & SBI PO Live Coaching in English Batch..</h4>
                            <p class="card-text">
                            <div id="inline1">
                                <i class="fa fa-caret-square-o-right" ></i>
                                <p style={{color:"gray"}}>240+ Live Classes</p>
                                    
                            </div>  <div id="inline">
                                <div id="inline1">
                                    <i class="material-icons" id="book" >bookmark_border</i>
                                    <p  style={{color:"gray"}}>9000+ Questions</p>
                                
                                </div><div id="inline1">
                                    <i class='far fa-sticky-note' ></i>
                                    <p  style={{color:"gray"}}>120+ Notes</p></div></div></p>

                        </div>
                    </div>
                </div>



                <div class="col-md-4" >
                    <div class="card mb-2">
                        <img class="card-img-top" src="image.png" alt="Card image cap"   />  
                        <div class="grad1" id="inline">
                            <i class="material-icons" >access_time</i>
                            <p>Starts in 15 days</p> </div>
                        <div class="card-body">
                            <h4 class="card-title">Civil Junior Engineer Live Coaching Batch 2</h4>
                            <p class="card-text">
                             <div id="inline1">
                                <i class="fa fa-caret-square-o-right" ></i>
                                <p style={{color:"gray"}}>240+ Live Classes</p>
                                
                            </div>  <div id="inline">
                                <div id="inline1">
                                    <i class="material-icons" id="book"  >bookmark_border</i>
                                    <p  style={{color:"gray"}}>9000+ Questions</p>
                                
                                </div><div id="inline1">
                                    <i class='far fa-sticky-note' ></i>
                                    <p  style={{color:"gray"}}>120+ Notes</p></div></div>

                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4" >
                    <div class="card mb-2">
                        <img class="card-img-top" src="image.png" alt="Card image cap"   />
                        <div class="grad2" id="inline">
                            <i class="material-icons" >access_time</i>
                            <p> Batch closes in 2 days </p>

                        </div>
                        <div class="card-body">
                            <h4 class="card-title">UPSC CDS- 2 2021 Live Coaching Batch 3</h4>
                            <p class="card-text">
                                 <div id="inline1">
                                    <i class="fa fa-caret-square-o-right" ></i>
                                    <p style={{color:"gray"}}>240+ Live Classes</p>
                                
                            </div>
                            <div id="inline">
                                <div id="inline1">
                                    <i class="material-icons" id="book"   >bookmark_border</i>
                                    <p  style={{color:"gray"}}>9000+ Questions</p>
                                
                                </div><div id="inline1">
                                    <i class='far fa-sticky-note' ></i>
                                    <p  style={{color:"gray"}}>120+ Notes</p></div></div>
                
                            </p>
                        </div>
                    </div>
                </div>
       

        </div>



    </div>


</div>
</div>

  );
}
