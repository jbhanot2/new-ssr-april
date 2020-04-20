import React from 'react';
import {formAction} from './../redux/action';
import { connect } from 'react-redux';
import * as constants from './../redux/constant';
import { bindActionCreators } from 'redux';
import FormComponent from '../component/formComponent';
import {ContactInfoComponent} from '../component/contactInfo';
import { NavLink } from 'react-router-dom';

let reducerData = constants.ACTION_FORM;

class ContactUsContainer extends React.Component {

    render() {
        console.log("this.props[reducerData]", this.props[reducerData])
        return (
                <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">Contact</span>
                            <h2 className="mb-4">Contact Me</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                        </div>
                        {this.props[reducerData] && this.props[reducerData].name && 
                            <div className="row block-9">
                                <NavLink className="dt-new-link" to="/detail" >Form Detail Route</NavLink>
                            </div>}
                        <div className="row block-9">
                            <FormComponent/>
                            <ContactInfoComponent/>
                        </div>
                    </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    let mapToState = {};
    mapToState[reducerData] = state;
    return mapToState;
 };

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        formAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUsContainer);