import React from "react";
import "./App.css";

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Usuario</label>
                <input
                    title="usuario"
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    title="Contraseña"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Ingresar</button>
                            <p>No tiene una cuenta ? <span onClick={()=>{
                                setHasAccount(!hasAccount)
                            }}>Registrarse</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Registrarse</button>
                            <p>Tiene una cuenta? <span onClick={()=>{
                                setHasAccount(!hasAccount)
                            }}>Ingresar</span></p>
                        </>

                    )};
                </div>
            </div>
        </section>
    )

}

export default Login