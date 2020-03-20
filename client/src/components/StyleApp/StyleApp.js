import React from 'react';
import Quizzes from './Quizzes';
import NavId from './NavId';
import Axios from 'axios';
import loginController from '../../controllers/LoginController'
import Wholesale from './WholesaleBusinessPlan/index'
import WholesaleSalesGoals from './WholesaleBusinessPlan/WholesaleSalesGoals';

class StyleApp extends React.Component {
        state = {
                premium: false,
                email: ''
        }

        componentDidMount() {
                loginController.addUserChangedListener(this.setUser);
                loginController.recheckLogin();
        }

        componentWillUnmount() {
                loginController.removeUserChangedListener(this.setUser);
        }

        setUser = (user) => {
                this.setState({ email: user.user.email })
        }
      
      
        render() {

                return (
                        <div>
                                <NavId />
                                <div className='row'>
                                  <Wholesale/>
                                </div>
                        </div>

                )
        }
}

export default StyleApp;
