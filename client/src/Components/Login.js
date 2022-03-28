import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import loginImage from '../assets/Login.svg';
import { makeStyles } from '@material-ui/core/styles';
import "./Login.css"

const useStyles = makeStyles({
    resourceCards: {
        width: "75%",
        marginTop: "2.5%",
    },
    cardTitle: {
        color: "#d96f66",
        fontWeight: "bold",
        padding: "1% 0 1% 3%",
        letterSpacing: "1px",
        fontSize: "2rem",
        fontFamily: "Montserrat",
        paddingLeft: "0",
        paddingBottom: "0.3%"
    },
})


function Login(props) {
    document.title = "Login";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email != "" && password != "") {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }).then((response) => {
                if (response.status === 400) {
                    props.setUserDetails({});
                    alert("Invalid Credentials");
                }
                else if (response.status === 200) {
                    props.setIsLogin(true);
                    // console.log(response);
                    props.setUserDetails({
                        "email": email,
                        "password": password
                    });
                }
            });
        }
        else {
            alert("Enter Complete Credentials");
        }
    }

    return (
        <>
            <Container maxWidth="lg">
                <Grid direction='row' container spacing={1}>
                    <Grid container style={{ marginTop: "5rem" }} item sm={5} xs={12} spacing={0} direction="column" alignItems="center" justify="center">
                        <img className={useStyles().mainImg} src={loginImage} alt="resource img" />
                    </Grid>
                    <Grid container item sm={7} xs={12} spacing={0} direction="column">
                        <div style={{ marginTop: "15rem", paddingLeft: "4rem", paddingRight: "4rem" }}>
                            <form onSubmit={handleLogin}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                    </div>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="email" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="password" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="submit" defaultValue="Login" className="btn" id="hi" />
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
}

export default Login;