import React from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

import { signInWithGoogle, auth } from './../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            console.log(result);
        } catch (err) {
            console.error(err.message);
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        required />
                    <FormInput
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        required />
                    <div className='buttons'>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;