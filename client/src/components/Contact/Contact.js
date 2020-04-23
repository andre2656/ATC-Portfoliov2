import React from 'react';
import axios from 'axios';
import validator from 'validator';
import NavBar from '../NavBar/NavBar'
import Footer from '../Navs/Footer'
class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    nameOnChange = (event) => {
        this.setState({ name: event.target.value.trim() })
    }
    emailOnChange = (event) => {
        this.setState({ email: event.target.value.trim() })
    }
    phoneOnChange = (event) => {
        this.setState({ phone: event.target.value.trim() })
    }
    messageOnChange = (event) => {
        this.setState({ message: event.target.value.trim() })
    }
    handleSubmit = () => {
        if (this.isFormValid()) {
            this.createMessage();
        } else {
            console.log('There was an error in your form please fill out the required feilds ')
        }
    }
    isFormValid = () => {
        if (this.state.name === '' || this.state.email === '' || !validator.isEmail(this.state.email) || this.state.message === '') {
            return false
        } else {
            return true
        }
    }
    createMessage = () => {
        axios.post('api/contact/send', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }).then((response) => {
            console.log(response);
            if (response.code === '400') {
                window.location.pathname = '/Home'
            } else {
                console.log(response.message);
            }
        }).catch((error) => {
            console.log(error)
        })
    };

    render() {
        return (
            <div style={{ backgroundColor: '#333333', width: '100%' }}>
                <div className='container'>
                    <NavBar />
                    <br />
                    <br />
                    <div className='row' id='formContact'>
                        <div className='col-md-12'>
                            <form id='form'>
                                <h3 id='formHeadingContact' style={{color: 'white'}}>Quick Contact</h3>
                                <br />
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <input className='col-md-4' id='inputContact' name='Name' type='text' placeholder='Name' onChange={this.nameOnChange} style={{ color: 'white' }} />
                                    <div className='col-md-2'></div>
                                    <input className='col-md-4' id='inputContact' name='Email' type='email' placeholder='Email' style={{ color: 'white' }}  onChange={this.emailOnChange} />
                                    <div className='col-md-1'></div>
                                </div>
                                <br /><br />
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <input className='col-md-4' id='inputContact' name='Name' type='text' placeholder='Company Name' style={{ color: 'white' }}  onChange={this.nameOnChange} />
                                    <div className='col-md-2'></div>
                                    <input className='col-md-4' id='inputContact' name='Phone' type='phone' placeholder='Phone (optional)' style={{ color: 'white' }}  onChange={this.phoneOnChange} />
                                    <div className='col-md-1'></div>
                                </div>
                                <br /><br /><br />
                                <div className='row'>
                                    <div className='col-md-1' />
                                    <textarea id='textareaContact' className='col-md-6' name='Message' type='text' placeholder='Message' style={{ color: 'white' }} onChange={this.messageOnChange} />
                                    <div className='col-md-1' />
                                    <div className='col-md-4'><button type='submit' id="submitContact" style={{ color: 'white' }}  onClick={this.handleSubmit}><h4 id='contactSubmit'>Submit</h4></button></div>
                                </div>
                                <br /><br />

                                <br /><br />
                            </form>
                        </div>
                    </div>
                    <div className='row' id="pagetitleContact">
                        <div className='col-md-1'></div>
                        <h3 id='pageTitleContact' className='col-md-2'><strong>Sites By Dre</strong></h3><br /><br />
                        <div className='col-md-5'></div>
                    </div>
                    <div className='row' id='CK_Contact'>
                        <div className='col-md-1'></div>
                        <div className='col-md-5'>
                            <h5 id='contactContact'>Contact- Andre Campbell</h5><br />
                            <h6 id='licensesContact'><strong>Address:</strong> <a href='https://goo.gl/maps/WpgBrZrXP4kefCYk7' target='_blank'> 44 Cipresso
                            Irvine, CA
                            92603-0105</a></h6><br />
                            <h6 id='licensesContact'><strong>Email:</strong> <a href='mailto:andre2656@gmail.com'>andre2656@gmail.com</a></h6><br />
                            <h6 id='licensesContact'><strong>Phone:</strong> (714) 803-2687</h6><br />
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                    <div className='ContactPadding'></div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Contact;