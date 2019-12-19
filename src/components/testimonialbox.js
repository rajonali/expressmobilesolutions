import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class TestimonialBox extends Component {
    render() {

        return ( 
            <div class="card" style={{display:'flex', margin:20,width:'25%', height:500, borderRadius:10,display:'flex', flexDirection:'column'}}>
                <div class="card-body" style={{textAlign:'left',}}> 
                <i style={{fontSize:75, color: this.props.blockqcolor }} class="fas fa-quote-left"></i>
                <br />
                <br />
                <h3 style={{color:'#343a40', fontSize:25, textAlign:'left', fontFamily:'Montserrat', fontWeight:'thin'}}>{this.props.testimonial}</h3>
                <hr />
                <br />
                <div style={{display:'flex', flexDirection:'row'}}>
                <img
                                                            src={ this.props.pfp }
                                                            class="rounded-circle img-fluid"
                                                            alt="First sample avatar image"
                                                            
                                                            style={{
                                                            border: '10px solid rgba(255, 255, 255,0.7)',
                                                            height:100,
                                                            width:100,
                                                        }}/>
                                                        <div style={{ alignSelf:'center', padding:10,display:'flex', flexDirection:'column'}}>
                                                        <h5 style={{fontFamily:'Roboto', fontWeight:'bold'}}>{this.props.name}</h5>
                                                        <h6 style={{fontFamily:'Roboto', fontWeight:'thin'}}>Customer</h6>
                                                        </div>
                                                        </div>

                </div>
            </div>
        )
    }
}
