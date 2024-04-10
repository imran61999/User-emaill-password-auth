import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebese/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    // password show or unshow
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.required;
        console.log(email, password);



        if (password.length < 6) {
            setRegisterError(" Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must have at least one Uppercase Character.');
            return;
        }
        else if(!accepted){
            setRegisterError("please accepted our terms and conditions!");
            return;
        }

        // reset registerError

        setRegisterError('');
        setSuccess('');


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Successfully account create');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })


    }
    return (
        <div className="mx-auto px-3 w-1/2">
            <label className="text-3xl">Please Register Now</label>
            <form onSubmit={handleLogin}>

                <input className="border w-full mb-3" type="email" name="email" placeholder="Enter your email" required />
                <br />
                <div className="mb-4 relative">
                    <input className="border w-full mb-3" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" required />
                    <span className="absolute top-2 right-2" onClick={() => setShowPassword(!showPassword)}>

                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </span>
                </div>
                <br />
                <div className="mb-4">
                    <input type="checkbox" name="terms" id="terms"/>
                    <label className="ml-2" htmlFor="terms">Accept our <a href="">terms and condition</a></label>
                </div>
                <button className="btn  btn-secondary mb-3 w-full">Register</button>
            </form>
            {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
        </div>
    );
};

export default Login;