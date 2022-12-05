import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet bodyAttributes={{style: 'background-color : #000000'}}>
                    <title>{this.props.pageTitle} ||  </title>
                    <meta name="description" content="w" />
                   
                    

                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
