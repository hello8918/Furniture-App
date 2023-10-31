function UserLogin(props){
    const loginStatus=props.loggedin;
    if(loginStatus){
        return (<Home />);
    }
    return (<LoginForm />);
}

function Home (){
    return (
        <div> 
            <h1>Welcome to home page </h1>
        </div>
    );
}

function LoginForm(){

    return (
        <div>
            <div> 
                Enter Email <br />
                <input type="email" name="email" /> 
            </div>
            <div> 
                Enter Password <br />
                <input type="password" name="pass" />
            </div>
            <div>
            <button>Submit</button>
            </div>
        </div>
    );

}

export default UserLogin;