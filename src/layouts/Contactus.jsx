import React from "react";
import PropTypes from "prop-types";
class ContactSection extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            company: "",
            subject: "",
            message: ""
        };
    }

    nameChange = evt => {
        this.setState({ name: evt.target.value });
    };
    emailChange = evt => {
        this.setState({ email: evt.target.value });
    };
    companyChange = evt => {
        this.setState({ company: evt.target.value });
    };
    subjectChange = evt => {
        this.setState({ subject: evt.target.value });
    };
    messageChange = evt => {
        this.setState({ message: evt.target.value });
    };

    canBeSubmitted() {
        const { name, email, company, subject, message } = this.state;
        return (
            name.length > 0 &&
            email.length > 0 &&
            company.length > 0 &&
            subject.length > 0 &&
            message.length > 0
        );
    }

    handleSubmit = (evt) => {
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        if (this.handleSubmit()) {
            alert("Thank you for Contacting us. We will get back to you soon.");
        }
        else {
            alert("Form has errors.");
        }
        // actual submit logic...
    };

    render() {
        const isEnabled = this.canBeSubmitted();

        return (
            <div className="container contact-us-main-container">
                <section>
                    <div className="row" id="contactus">
                        <div className="col-md-4 address-wrapper">
                            <p>New to The Blockchain Industry?</p>
                            <p>Or got any queries?</p>
                            <p>We are just one click away!</p>
                        </div>
                        <div className="col-md-8 contact_form " style={{ backgroundColor: "white", width: 150 }}>
                            <div className="page-header" id="is" >
                                <h2 className="text-center">Contact Us</h2>
                                <p className="text-center">How can we help you?</p>
                            </div>
                            <form onSubmit={this.handleSubmit}
                            >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.nameChange}
                                        className="form-control border border-dark"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.emailChange}

                                        className="form-control border border-dark"
                                        placeholder="Your email address"
                                        required
                                    />
                                </div>
                                <div className="form-group ">
                                    <input
                                        type="text"
                                        value={this.state.company}
                                        onChange={this.companyChange}
                                        className="form-control border border-dark"
                                        placeholder="Company"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={this.state.subject}
                                        onChange={this.subjectChange}
                                        className="form-control border border-dark"
                                        placeholder="Your Subjects "
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="usermessage"
                                        id="usermessage"
                                        value={this.state.message}

                                        onChange={this.messageChange}
                                        className="form-control border border-dark"
                                        cols="10"
                                        rows="4"
                                        placeholder="Your Message...."
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="text-center">
                                        <button disabled={!isEnabled}
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
