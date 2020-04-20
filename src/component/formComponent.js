import React from 'react';
import {formAction} from './../redux/action';
import { connect } from 'react-redux';
import * as constants from './../redux/constant';
import { bindActionCreators } from 'redux';

class FormComponent extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        let temp = new Object;
        temp = {
            name: this.name.value,
            email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        }
        this.props.formAction({
            payload: temp
        })
    }

    render() {
        return (
                <div className="col-md-7 order-md-last d-flex">
                    <form className="bg-light p-4 p-md-5 contact-form" onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name"
                                 ref={(element) => { this.name = element }} 
                                size="30" required
                                 />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your Email" 
                                    ref={(element) => { this.email = element }} 
                                    size="30" required 
                                />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject"
                                    ref={(element) => { this.subject = element }} 
                                    size="30" required
                              />
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message" 
                                    ref={(element) => { this.message = element }} 
                                    size="80" required
                                />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send Message" 
                                    className="btn btn-primary py-3 px-5"
                              />
                        </div>
                    </form>                        
                </div>        
        )
    }
}

const mapStateToProps = (state) => {
    let mapToState = {};
    mapToState[constants.ACTION_FORM] = state;
    console.log("state", state)
    return mapToState;
 };

 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        formAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);