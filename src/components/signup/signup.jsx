import React from "react";
import '../css/bootstrap.min.css';
import '../css/signup.css';

export default class Signup extends React.PureComponent {

    onBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="signup-page">
                <div className="status-bar" />
                {/* ======= Start Back Button Section =======  */}
                <div className="container back-icon signup-container">
                    <div className="frame-20">
                        <button className="back-button" onClick={this.onBack}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M12.4999 17.225C12.3416 17.225 12.1832 17.1667 12.0582 17.0417L6.6249 11.6083C5.74157 10.725 5.74157 9.27501 6.6249 8.39168L12.0582 2.95835C12.2999 2.71668 12.6999 2.71668 12.9416 2.95835C13.1832 3.20002 13.1832 3.60002 12.9416 3.84168L7.50824 9.27502C7.10824 9.67502 7.10824 10.325 7.50824 10.725L12.9416 16.1583C13.1832 16.4 13.1832 16.8 12.9416 17.0417C12.8166 17.1583 12.6582 17.225 12.4999 17.225Z"
                                    fill="#1A1E25"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* ======= End Back Button Section =======  */}
                {/* ======= Start Text Section =======  */}
                <div className="container top-text signup-container">
                    <p className="top-text-title">Let's explore together!</p>
                    <p className="top-text-text">
                        Create your Placoo account to explore your dream place to live across the
                        whole world!
                    </p>
                </div>
                {/* ======= End Text Section =======  */}
                {/* ======= Start Form Section =======  */}
                <div className="container form-container signup-container">
                    <form action="/" method="post">
                        <div className="form-field">
                            <div className="frame-23">
                                <label className="username-label" htmlFor="userName">
                                    Username
                                </label>
                                <input
                                    className="username"
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    placeholder="Insert your username here"
                                />
                            </div>
                            <div className="frame-24">
                                <label className="password-label" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="password"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Insert your password here"
                                />
                            </div>
                            <div className="frame-25">
                                <label className="phone-label" htmlFor="phone">
                                    Phone number
                                </label>
                                <input
                                    className="phone"
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                        <div className="cta">
                            <div className="frame-32">
                                <button className="form-submit-btn" type="submit" value="Log in">
                                    Create account
                                </button>
                                <button className="hide-btn">
                                    <p className="hide-btn-text">Create account</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* ======= End Form Section =======  */}
                <div className="container divider-or signup-container">
                    <div className="divider" />
                    <div className="chip">
                        <p className="chip-or">OR</p>
                    </div>
                </div>
                {/* ======= Start Social Button Section =======  */}
                <div className="container social-cta signup-container">
                    <button className="apple">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12.7822 5.51071C12.6542 5.53998 12.5391 5.55727 12.4398 5.567C12.446 5.39651 12.4641 5.18578 12.5063 4.95086C12.6183 4.32626 12.8961 3.55083 13.5537 2.89326C14.2392 2.20771 14.9516 1.85948 15.4876 1.68208C15.62 1.63828 15.7415 1.60493 15.849 1.57956C15.8411 1.7538 15.8218 1.96254 15.7812 2.19261C15.6629 2.86392 15.3681 3.69482 14.6692 4.39369C13.9462 5.11666 13.2639 5.40054 12.7822 5.51071Z"
                                fill="white"
                                stroke="white"
                            />
                            <path
                                d="M12.1245 7.33961C11.0188 7.33205 10.3396 6.37735 8.4566 6.37735C6.76225 6.37735 5.06373 7.47053 4.34151 8.52829C3.62264 9.58112 3 10.7358 3 13.0792C3 15.4226 4.12832 19.4528 6.90285 22.1811C7.378 22.6483 8.00698 22.9996 8.72454 23.0213C10.0151 23.0604 10.8076 22.0943 12.4377 22.0943C14.0679 22.0943 14.5585 23.0213 16.0302 23.0213C16.6994 23.0213 17.4626 22.7165 18.2038 21.9283C19.1547 20.917 20.3347 18.9909 20.9358 17.1434C20.9358 17.1434 17.9258 15.9809 17.9622 12.6302C17.9924 9.85282 20.3509 8.48677 20.3509 8.48677C20.3509 8.48677 18.9735 6.29054 16.0453 6.29054C14.0226 6.30567 13.1169 7.34641 12.1245 7.33961Z"
                                fill="white"
                            />
                        </svg>
                        <p className="apple-signin">Sign in with Apple</p>
                    </button>
                    <button className="google">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_80_1787)">
                                <path
                                    d="M23.7135 12.2762C23.7135 11.4605 23.6474 10.6403 23.5063 9.83783H12.1875V14.4588H18.6692C18.4003 15.9492 17.536 17.2676 16.2705 18.1053V21.1037H20.1375C22.4083 19.0137 23.7135 15.9271 23.7135 12.2762Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12.1879 24.0008C15.4243 24.0008 18.1537 22.9382 20.1423 21.1039L16.2753 18.1055C15.1994 18.8375 13.8105 19.252 12.1923 19.252C9.06164 19.252 6.40722 17.1399 5.4548 14.3003H1.46436V17.3912C3.50147 21.4434 7.65065 24.0008 12.1879 24.0008Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.45004 14.3004C4.94737 12.81 4.94737 11.1962 5.45004 9.70587V6.61493H1.464C-0.238001 10.0057 -0.238001 14.0006 1.464 17.3913L5.45004 14.3004Z"
                                    fill="#FBBC04"
                                />
                                <path
                                    d="M12.1879 4.74966C13.8987 4.7232 15.5522 5.36697 16.7912 6.54867L20.2172 3.12262C18.0479 1.0855 15.1686 -0.034466 12.1879 0.000808666C7.65065 0.000808666 3.50147 2.55822 1.46436 6.61481L5.45039 9.70575C6.3984 6.86173 9.05723 4.74966 12.1879 4.74966Z"
                                    fill="#EA4335"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_80_1787">
                                    <rect width={24} height={24} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="google-signin">Sign in with Google</p>
                    </button>
                </div>
                {/* ======= End Social Button Section =======  */}
                <div className="container native-bar signup-container" />
            </div>
        )
    }
}
