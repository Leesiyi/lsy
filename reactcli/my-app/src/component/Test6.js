import React, { Component } from 'react'
import axios from 'axios'

export default class Test6 extends Component {
    componentDidMount(){
        let url="https://api.myjson.com/bins/d4zq5"

        axios.get(url).then((res)=>{
            console.log(res);
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
