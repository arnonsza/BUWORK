import React from "react";

class Test extends React.Component{

    //for(var i = 0; i < 10; i++){
        //console.log(i);
    //}

    state = {
        email: "",
        password: "",
    };

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    onTestClick = (e) => {
        alert(this.state.email + " " + this.state.password)
    }

    render() {
        return(
            <div>
                <input value={this.state.email} onChange={this.onEmailChange} />
                <input value={this.state.password} onChange={this.onPasswordChange}  />
                <button onClick={this.onTestClick} >Test</button>
            </div>
        );
    }
}
export default Test;