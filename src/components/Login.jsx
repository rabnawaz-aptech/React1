import React from 'react'

export default function Login() {
    return (
        <>
            <div className="Login">
                <br /><br /><br /><br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-0 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-1 col-md-2"></div>
                                <div className="col-10 col-md-8">
                                    <div className="login-box border border-white">
                                        <h2 class="h2-1">Login:</h2>
                                        <br />
                                        <form>
                                            <label>Email:</label>
                                            <input type="email" className="form-control login-form" name="email" placeholder="email@example.com" required />
                                            <br />
                                            <label>Password:</label>
                                            <input type="password" className="form-control login-form" name="password" placeholder="Password" required />
                                            <br />
                                            <input type="submit" value="Login" name="login" className="form-control my-btn" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
