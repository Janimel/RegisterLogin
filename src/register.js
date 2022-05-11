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

    handleSubmit() {
        if (this.state.password === this.state.confirm) {
            localStorage.setItem('user', JSON.stringify(this.state))
            alert ('Your data is being saved')
        } else {
            alert('Password does not match')
        }
    }

    reset() {
        window.reload();
    }

    render() {
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3>Register</h3>
                    <div className="inputBox">
                        <span>Student ID Number</span>
                        <div className="box">
                            <input type="text" name="studentid" onChange={this.handleChange} placeholder = "i.e. 2017556891" pattern="[0-9]{10}" required/>
                        </div>
                    </div>

                    <div className="inputBox"> 
                        <div>
                            <span>Full Name</span>
                            <div className="box">
                                <input type="text" name="fname" onChange={this.handleChange} placeholder = "First Name" required/>
                                <input type="text" name="mname" onChange={this.handleChange} placeholder = "Middle Name" required/>
                                <input type="text" name="lname" onChange={this.handleChange} placeholder = "Last Name" required/>
                            </div>
                            
                        </div>

                    </div>


                    <div className="inputBox">
                        <div>
                            <span>College</span>
                            <div className="box">
                                <input type="text" name="college" onChange={this.handleChange}  placeholder = "University of Santo Tomas" required/>
                            </div>
                        </div>

                        <div>
                            <span>Program Enrolled</span>
                            <div className="box">
                                <input type="text" name="program" onChange={this.handleChange}  placeholder = "Bachelor of Science in Information Technology" required/>
                            </div>
                        </div>

                        <div>
                            <span>Year Level</span>
                            <div className="box">
                                <input type="text" name="yearlevel" onChange={this.handleChange}  placeholder = "First Year" required/>
                            </div>
                        </div>
                    </div>

                    <div className="inputBox">
                        <div>
                            <span>Password</span>
                            <div className="box">
                                <input type="password" name="password" onChange={this.handleChange}  placeholder = "At least 8 characters, 1 special character, 1 uppercase letter, and 1 number" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required/>
                            </div>
                        </div>

                        <div>
                            <span>Confirm Password</span>
                            <div className="box">
                                <input type="password" name="confirm" onChange={this.handleChange}  placeholder = "Confirm Password" required/>
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


