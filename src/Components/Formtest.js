import React from 'react'

class Formtest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           value:null
          
        };
    
        
      }

      handleSubmit(){
        const raw = JSON.stringify({"message":"amani "});
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
         
  fetch("https://graph.facebook.com/105700664948995/feed?access_token=EAADtuD3xgEIBANRcLqNLPZCvEheVCkWZCiw2Q0HPwqR7ZCu0xDC4rQ16z0jJzVCW9eHSTdqrtL9bnBZClrdZBwdZAChfKqmm2tuIxzXLr7OTVdZBXlypsPgOT45OXEVEg5ttDWnA4oGhYKTaFq9ajQjJUZCUAU1Mz4FifFZAEfjDxFk9pwHUnfyTl9UzALCkHeE8ZD",
  requestOptions).then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });   
      }

      handleChange = (e)=>{
          this.setState({value:e.target.value})  
      }

    render(){
        console.log(this.state.value);
        return(
            <div>
            <form>
            <label>
              message :
              <input type="text" name="message" value={this.state.value} onChange={this.handleChange}  />
            </label>
            <input type="submit" value="Envoyer" onClick={this.handleSubmit}  />
          </form>
            </div>
        )
    }
}
export default Formtest