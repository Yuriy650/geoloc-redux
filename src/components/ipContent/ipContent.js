import React, {Component} from 'react';
import {connect} from "react-redux";
import FormIp from "../FormIp/FormIp";
import Content from "../Content/Content";
import "@fontsource/roboto";
class IpContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <FormIp/>
                <Content/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ip: state.addIpReducer
    }
}
export default connect(mapStateToProps)(IpContent);
