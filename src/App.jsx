import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store.js";
import RegistrationForm from "./pages/RegistrationForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <Provider store={store}>
            <RegistrationForm/>
        </Provider>
    );
};

export default App;