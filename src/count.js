// import React, {useState} from 'react';
// function Count() {
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <button onClick={() =>{ setCount(count+1)}}>Count {count}</button>
//         </div>
//     )
// }
// export default Count;

import React, {Component} from 'react'

class Count extends Component{
    constructor(props){
        super();
        this.state ={
            count: 0,
            siteData: {}
        }
    }
    componentDidMount() {
        fetch("https://zozor54-whois-lookup-v1.p.rapidapi.com/?format=json&domain=sendrank.com", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "zozor54-whois-lookup-v1.p.rapidapi.com",
                "x-rapidapi-key": "df57048eb4mshe1e76b7288a2b5cp1bb9c2jsnc33a27ad18ac"
            }
        }).then(response => {
                console.log(response);
                this.setState({
                    siteData: response.json()
                })
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return(
            <div>
                <p>Your total click count {this.state.count}</p>
                <button onClick={() => {
                   this.setState({
                       count: this.state.count+1
                   })
                }}>Click me
                </button>
                
            </div>
        )
    }
}
export default Count;