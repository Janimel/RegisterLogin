import React from "react";
import passwordicon from "./images/password.png"
import usernameicon from "./images/username.jpg"

const x = JSON.parse(localStorage.getItem('user'))
class Login extends React.Component{

    constructor(props){
    super(props);

    this.state={
        studentid:'',
        password:''

    };
    this.handleChange= this.handleChange.bind(this);
}

    handleChange(event){
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;
    this.setState({...this.state,[name]: value});
    console.log (this.state)
}
    reset(){
        window.location.reload(false);
    }

    submit(event){
        // console.log(event.target.studentid.value)
        // const id= x.studentid
        if(event.target.studentid.value === x.studentid && event.target.password.value === x.password){
            alert('Welcome ' + x.fn + " " + x.ln)
        }else{
            alert('Password Incorrect')
        }
    }

    route(){
        console.log(x)
        alert('Hello ' + x.fn + " " + x.ln)
    }
    render(){
        return(

            <div className="container">
            <form onSubmit={this.submit}>
            <h3>Log In</h3>
            <div className="inputBox">
                <span>Student ID Number</span>
                    <div className="box">
                    <input onChange={this.handleChange} type="text" name="studentid"/>
                    </div>

                {/* <div className="box">
                <div className="icon">
                    <img src={usernameicon} alt="Username Icon" width={30} height={30}/>
                </div>
                <input onChange={this.handleChange} type="text" name="studentid"/>
                </div> */}
            </div>

            <div className="inputBox">
                <span>Password</span>
                <div className="box">
                <input onChange={this.handleChange} type="password" name="password"/>
                </div>
                
                {/* <div className="box">
                <div className="icon">
                    <img src={passwordicon} alt="Password Icon" width={30} height={30}/>
                </div>
                <input onChange={this.handleChange} type="password" name="password"/>
                </div> */}
            </div>

            <label>
                <input type="checkbox"/>Remember me
            </label>

            <div className="inputBox">
                <div className="box">
                    <input type='submit' value="Login"></input>
                    <input type='button' value="Cancel" onClick={this.reset}></input>
                    <input type='button' value="Register" onClick={()=>this.props.setpage("register")}></input>
                </div>
            </div>

            <a className="forgot">Forgot Password?</a>


            </form>
            </div>
        )
    }
}

export default Login;

