import React from "react";
import PropTypes from "prop-types";

class ContactSection extends React.Component {
    render() {
        return (
            <div className="container contact-us-main-container">
                <section>
                    <div className="row" id="contactus">
                        <div className="col-md-4 address-wrapper">
                            <p>New to The Blockchain Industry?</p>
                            <p>Or got any queries?</p>
                            <p>We are just one click away!</p>
                        </div>
                        <div className="col-md-8 contact_form">
                            <div className="page-header" id="is" >
                                <h2 className="text-center">Contact Us</h2>
                                <p className="text-center">How can we help you?</p>
                            </div>
                            <form
                            >
                                <div className="form-group">
                                    <div className="col-lg-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-10">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="userEmail"
                                            name="cuemail"
                                            placeholder="Your email address"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cusubject"
                                            name="cusubject"
                                            placeholder="Company"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cusubject"
                                            name="cusubject"
                                            placeholder="Your Subjects "
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-10">
                                        <textarea
                                            name="usermessage"
                                            id="usermessage"
                                            className="form-control"
                                            cols="10"
                                            rows="4"
                                            placeholder="Your Message...."
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-10 col-lg-offset-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

class Contactus extends React.Component {

    componentDidMount() {
        console.log("ContactPage::componentDidMount");
    }
    render() {

        return (
            <ContactSection />
        );
    }
}

Contactus.propTypes = {
    title: PropTypes.string
};

export default Contactus;
