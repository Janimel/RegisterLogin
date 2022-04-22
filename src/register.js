import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentid: '',
            lname: '',
            fname: '',
            mname: '',
            college: '',
            program: '',
            yearlevel: '',
            password: '',
            confirm: ''

        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {

        if (this.state.password === this.state.cpassword) {
            localStorage.setItem('user', JSON.stringify(this.state))
        } else {
            alert('Password not match!!!')
        }
    }
    reset() {
        window.reload();
    }
    render() {
        return (

            <div className="container">
                <form onSubmit={this.submit}>
                    <h3>Register</h3>
                    <div className="inputBox">
                        <span>Student ID Number</span>
                        <div className="box">
                            <input type="text" name="studentid" onChange={this.handleChange}  placeholder = "i.e. 2017556891"/>
                        </div>
                    </div>

                    <div className="inputBox"> 
                        <div>
                            <span>Full Name</span>
                            <div className="box">
                                <input type="text" name="fname" onChange={this.handleChange} placeholder = "First Name"/>
                                <input type="text" name="mname" onChange={this.handleChange} placeholder = "Middle Name"/>
                                <input type="text" name="lname" onChange={this.handleChange} placeholder = "Last Name"/>
                            </div>
                            
                        </div>

                    </div>


                    <div className="inputBox">
                        <div>
                            <span>College</span>
                            <div className="box">
                                <input type="text" name="college" onChange={this.handleChange}  placeholder = "University of Santo Tomas"/>
                            </div>
                        </div>

                        <div>
                            <span>Program Enrolled</span>
                            <div className="box">
                                <input type="text" name="program" onChange={this.handleChange}  placeholder = "Bachelor of Science in Information Technology"/>
                            </div>
                        </div>

                        <div>
                            <span>Year Level</span>
                            <div className="box">
                                <input type="text" name="yearlevel" onChange={this.handleChange}  placeholder = "First Year"/>
                            </div>
                        </div>
                    </div>

                    <div className="inputBox">
                        <div>
                            <span>Password</span>
                            <div className="box">
                                <input type="password" name="password" onChange={this.handleChange}  placeholder = "Must have atleast 10 characters" />
                            </div>
                        </div>

                        <div>
                            <span>Confirm Password</span>
                            <div className="box">
                                <input type="password" name="confirm" onChange={this.handleChange}  placeholder = "Confirm Password"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="inputBox">
                        <div className="box">
                            <input type='submit' value="Register"></input>
                        </div>
                    </div>

                    <div className="inputBox">
                        <div className="box">
                            <input type='reset' value="Cancel"></input>
                            <input type='button' value="Login" onClick={()=>this.props.setpage("login")}></input>
                        </div>
                    </div>


                </form>
            </div>
        )
    }
}

export default Register


