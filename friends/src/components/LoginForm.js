import React, { useState } from "react";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({});

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="username"
                />
                <input
                    type="password"
                    name="password"
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;
