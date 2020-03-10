import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Input, CheckBox, Button, Icon } from 'react-native-elements';
/* import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'; */
/* import { createBottomTabNavigator } from 'react-navigation';
import { baseUrl } from '../shared/baseUrl'; */

/* const required = val => val && val.length;   
const maxLength = len => val => !val || (val.length <= len);  
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); */

class CateringForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            phoneNum: '',
            email: '',
            agree: false,
            /* contactType: 'By Phone',
            comments: '', */
            /* touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            } */
        };


    }

handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // this.props.resetFeedbackForm();
//     this.props.postFeedback();
}


static navigationOptions = {
    title: 'Catering Request',
    tabBarIcon: ({tintColor}) => (
        <Icon
            name='user-plus'
            type='font-awesome'
            iconStyle={{color: tintColor}}
        />
    )
}

render() {
        /* copied from LoginComponent */
    return (
             
        <ScrollView>
                {/* <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{uri: this.state.imageUrl}} // to be replaced by a taken photo
                            loadingIndicatorSource={require('./images/logo.png')} 
                            style={styles.image}
                        />
                        <Button
                            title='Camera'
                            onPress={this.getImageFromCamera} 
                        />
                    </View> */}
                    
                    <Input
                        placeholder='First Name'
                        leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={firstname => this.setState({firstname})}
                        value={this.state.firstname}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Last Name'
                        leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={lastname => this.setState({lastname})}
                        value={this.state.lastname}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Phone'
                        leftIcon={{type: 'font-awesome', name: 'phone'}}
                        onChangeText={phoneNum=> this.setState({phoneNum})}
                        value={this.state.phoneNum}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Email'
                        leftIcon={{type: 'font-awesome', name: 'envelope-o'}}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <CheckBox
                        title='May we contact you?'
                        center
                        checked={this.state.agree}
                        onPress={() => this.setState({agree: !this.state.agree})}
                        containerStyle={styles.formCheckbox}
                    />

                    

                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleSubmit()}
                            title='Submit'
                            icon={
                                <Icon
                                    name='envelope'
                                    type='font-awesome'
                                    color='#fff'
                                    iconStyle={{marginRight: 10}}
                                />
                            }
                            buttonStyle={{backgroundColor: '#5637DD'}}
                        />
                    </View>
                

            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 8
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    },
    formButton: {
        margin: 20,
        marginRight: 40,
        marginLeft: 40
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    }
});

export default CateringForm;


























                {/* <div className="container">
                    <div className ='col-md-10'>
                        <LocalForm model="feedbackForm" onSubmit={values => this.handleSubmit(values)}> 
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched" // show error if user left the column wthout meeting unput equirements
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 4, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input"
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <Control.select model=".contactType" name="contactType" className="form-control">
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".feedback" id="feedback" name="feedback"
                                            rows="12"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                        </LocalForm>
                    </div>
                </div>
         
    );
}
} */}


