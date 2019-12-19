import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
<footer class="page-footer font-small unique-color-dark" style={{paddingBottom:40, backgroundColor:'rgba(0, 0, 190, 1)', background: '-webkit-linear-gradient(40deg, rgb(111, 177, 252), rgb(67, 100, 247), rgb(111, 177, 252))'}}> 
{/*
<div style={{backgroundColor: '#21d192', color:'white', height:50,display:'flex',  flexDirection:'row', paddingLeft:20,fontWeight:'bolder', fontFamily:'Montserrat'}}>

<div>
<h5 style={{ alignSelf:'center',fontFamily:'montserrat', fontWeight:'bold'}}>Connect With Us</h5>
</div>
<div style={{alignSelf:'center', backgroundColor:'red'}}>
  <i class="fab fa-facebook-f white-text mr-4"> </i>
  <i class="fab fa-twitter white-text mr-4"> </i>
  <i class="fab fa-google-plus-g white-text mr-4"> </i>
  <i class="fab fa-linkedin-in white-text mr-4"> </i>
  <i class="fab fa-instagram white-text"> </i>

</div>
</div>
*/}
      <div
                    style={{
                    backgroundColor: 'rgba(57, 106, 252, 0.9)'
                }}>
                    <center>
                        <div
                            style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingTop: 1,
                            paddingBottom: 1,
                            textAlign: 'center',
                            fontFamily: 'Montserrat',
                            boxShadow: '0px 0px 1px white',
                            fontSize: '17px',
                            color: 'white'
                        }}>

                            <div
                                style={{
                                paddingLeft: 30,
                                width: '70%',
                                alignSelf: 'flex-start',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between'
                            }}>

                                <div style={{fontWeight:'bold'}}>
                               </div>

</div>
                            <div
                                style={{
                                width: '30%',
                                alignSelf: 'center',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                paddingRight: 30,
                                paddingTop: 1,
                                justifyContent: 'flex-end'
                            }}>
                                <div
                                    style={{
                                    fontWeight: 'bold'
                                }}>
                                    Find Us On &nbsp;&nbsp;<i class="fab fa-facebook"></i>&nbsp;&nbsp;<i class="fab fa-twitter"></i>&nbsp;&nbsp;<i class="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>

  <div class="container text-center text-md-left mt-5" style={{paddingTop:20, width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

    <div class="row mt-3">

      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{lineHeight:1.5}}>



      <div style={{fontFamily:'montserrat', display:'flex', alignItems:'center', border:'5px solid white', justifyContent:'center', color:'white', paddingRight:15, paddingLeft:15, paddingTop:10, paddingBottom:10,  color:'white', display:'flex', }}>
                            <h1 style={{margin:0}}>EXPRESS</h1>
                           </div>







        <p style={{color:'white', paddingTop:20}}>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>

      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{lineHeight:1.5,}}>

        <h6 class="text-uppercase font-weight-bold" style={{color:'white'}}>Links</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", color:'white' }} />
        <p style={{color:'white'}}>
          Home
        </p>
        <p style={{color:'white'}}>
          Our Team 
        </p>
        <p style={{color:'white'}}>
          Contact Us
        </p>
        <p style={{color:'white'}}>
          F.A.Q
        </p>
        
      </div>
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{lineHeight:1.5, color:'white'}}>

<h6 class="text-uppercase font-weight-bold" style={{color:'white'}}>Contact</h6>
<hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px" }} />
<p>
  <i class="fas fa-map-marker-alt mr-3"></i> 3162 Plank Rd. Baton Rouge, LA 70805</p>
<p>
  <i class="fas fa-envelope mr-3"></i> spi@aol.com</p>
<p style={{textDecoration:'none',}}>
  <i class="fas fa-phone mr-3"></i> <a style={{color:'white', width:200}}> (225) 356-7363 </a></p>

</div>
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{lineHeight:1.5}}>

        <h6 class="text-uppercase font-weight-bold" style={{color:'white'}}>Message Us</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px" }} />
        <div class="form-group form-group--wide">
					<label class="sr-only" for="details">How Can We Help You?</label>
                    <textarea name="details" rows="1" id="details" class="form-control validate[required]" placeholder="Name" cols="30"></textarea>
                    <br />
                    <textarea name="details" rows="1" id="details" class="form-control validate[required]" placeholder="Phone Number" cols="30"></textarea>
					<br />
                    <textarea name="details" rows="4" id="details" class="form-control validate[required]" placeholder="Message" cols="30"></textarea>
				</div>
        <br />
        
<input class="btn btn-md" type="submit" style={{border:'2px solid white', backgroundColor:'rgba(57, 106, 252, 0.9)', color:'white',fontWeight:'bold'}} value="Send Message" />


      </div>

    </div>
  </div>
  <div class="footer-copyright text-center py-3 text-white" style={{marginTop:50, fontFamily:'roboto'}}>© 2018 Copyright Express Mobile Solutions. All Rights Reserved.
  </div>

</footer>        )
    }
}
