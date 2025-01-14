import React, { useState } from 'react';
import styles from "./SignUp.module.css"

const SignUp = ({ toogleFunc }) => {
    return (
    <div className={styles.form}>
    <div className={styles.container}>
        <div className={styles.SignUp}>
            <h1>SignUp</h1>
                    <p>
                        Already have an account?
                        <a href="#"> Login here</a>
                    </p>
                    <br />
                    <br />
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        style={{ marginLeft: "3px" }}
                        className={styles.inp}
                        type="text"
                        id="name"
                        placeholder="Enter your Name here"
                    />
                    <br />
                    <br />
                    <label htmlFor="email" className={styles.label}>Email ID</label>
                    <input
                        style={{ marginLeft: "3px" }}
                        className={styles.inp}
                        type="text"
                        id="email"
                        placeholder="Enter your email id here"
                    />
                    <br />
                    <br />
                    <label htmlFor="pass" className={styles.label}>Password</label>
                    <input
                        className={styles.inp}
                        type="password"
                        id="pass"
                        placeholder="Enter your password here"
                    />
                    <br />
                    <br />
                    <button className={styles.btn} onClick={toogleFunc}>Submit</button>
                </div>
            </div>
        </div>
    );
};
export default SignUp;