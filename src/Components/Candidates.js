
import { Slide } from 'react-slideshow-image';
import { cards } from "../Data/Data";

import React, { Component } from 'react'
import { Candidate } from './Candidate';
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };
export class Candidates extends Component {
    state ={
        data: cards
    }
    ListAllData =()=>{
        const allData = this.state.data.map((items,index)=>{
            
                return(
                    <div>
                     <Slide {...properties}>
                        {items.map((each, i) => 
                            (
                                <div key={i} className="each-slide">
                                    <Candidate
                                            title = {each.title}
                                    />
                                </div>
                            )
                        )}
                        </Slide>
                        </div>
                        )
                    })
        return allData;      
    }

    render() {
        return(
            <div>
                {this.ListAllData}
            </div>
        )
    }
}
