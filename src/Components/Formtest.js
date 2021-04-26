// import axios from 'axios';
// import React from 'react'

// class Formtest extends React.Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//            value:null
          
//         };
    
        
//       }



//       handleClick= ()=>{
      
      
//     axios
//     .post("https://graph.facebook.com/105700664948995/feed?", {
     
//      message:this.state.value,
//      access_token:
//      "EAADtuD3xgEIBAGkmek1ISerJGi8DdMEQqH6amTFjqIoL2KFdAC6IfQKLg0Qyyz0QPcUQW9wRlbelZBSWqEMYi5RwbL9ASXUSYddHxvbf8ug457kcFh8fm7xm398ctz8YgXik5bW5S0xBMqFZA7ZBO2AnEWNlIqM3hu8CFt6YvhrhfeBszt4kmkG2sJVDKaqjHYKJZBWohgZDZD"
//    } )
//    .then(
//     res => {
//       const result = res.data;
//       console.log(result);
//       alert("Success!");
//     },
//     error => {
//       console.log(error);
//     }
//   );
     
    

//   }

//       handleChange = (e)=>{
//           this.setState({value:e.target.value})  
//       }

//     render(){
        
//         return(
//           <div class="center">
//           <div class="container">
//               <textarea required id="text-area" name="message" value={this.state.value} onChange={this.handleChange} placeholder="facebook post..."></textarea>
              
//                  <div>
//                  <button onClick={() => this.handleClick()}>Post</button>
//                  </div>
             
//           </div>
//           </div>
//         )
//     }
// }
// export default Formtest


