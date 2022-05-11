import React from "react";

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
        if(event.target.studentid.value===x.studentid && event.target.password.value===x.password){
            alert('Welcome ' + x.studentid)
        }else{
            alert('Password Incorrect')
        }
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
            </div>

            <div className="inputBox">
                <span>Password</span>
                <div className="box">
                <input onChange={this.handleChange} type="password" name="password"/>
                </div>
            </div>

            <div className="inputBox">
                <div className="box">
                    <input type='submit' value="Login"></input>
                    <input type='reset' value="Cancel" onClick={this.reset}></input>
                    <input type='button' value="Register" onClick={()=>this.props.setpage("register")}></input>
                </div>
            </div>

            </form>
            </div>
        )
    }
}

export default Login;

