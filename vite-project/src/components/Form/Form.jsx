import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }

        this.submiteHandler=this.submiteHandler.bind(this)
        this.firstNameValidation=this.firstNameValidation.bind(this)
        this.lastNameValidation=this.lastNameValidation.bind(this)
        this.emailValidation=this.emailValidation.bind(this)
    }
    submiteHandler(event){
     event.preventDefault()
     this.setState({
        submitted:true
     })
     if(this.state.firstNameData.length!==0 && this.state.lastNameData.length!==0 && this.state.emailData.length!==0){
        this.setState({
            allValid:true
        })
        setTimeout(()=>{
          this.setState({
            allValid:false
          })
          
        },3000)
     }
    }
    firstNameValidation (event){
     this.setState({
          firstNameData:event.target.value
     })
      
     
    }
    lastNameValidation   (event){
         this.setState({
        lastNameData:event.target.value
     })

    }            
    emailValidation(event){
 this.setState({
          emailData:event.target.value
     })
    }



    render() {
        return (
            <div className="form-container">
                <form className="register-form" onSubmit={this.submiteHandler} autoComplete="off">
                 
                    {this.state.submitted && this.state.allValid &&(
                        <div className="success-message">Success! Thank you for registering</div>
                    )}
                    <input
                        onChange={this.firstNameValidation}
                         value={this.state.firstNameData}
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                    />
                    {this.state.submitted && this.state.firstNameData.length===0 &&(
                          <span id="last-name-error">Please enter a first name</span>
                    )}
                    <input

                        onChange={this.lastNameValidation}
                         value={this.state.lastNameData}
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                    />
                    {this.state.submitted && this.state.lastNameData.length===0 &&(
                          <span id="last-name-error">Please enter a last name</span>
                    )}
                  
                    <input

                        onChange={this.emailValidation}
                        value={this.state.emailData}
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    {this.state.submitted && this.state.emailData.length===0 &&(
                          <span id="last-name-error">Please enter an email address</span>
                    )}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
