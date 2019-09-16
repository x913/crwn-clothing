import React from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.components';

import { auth, createUserProfileDocuments } from './../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            // Creates a new user account with email and password
            // On successful creation of the user account this user will also be
            // signed in to your application

            // User account creation can fail if the account already exists or password is invalud
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocuments(user, { displayName });

            // clear our form on success
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.error(err.message);
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="displayName"
                        type="text"
                        value={displayName}
                        label="Name"
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        value={password}
                        label="Password"
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;