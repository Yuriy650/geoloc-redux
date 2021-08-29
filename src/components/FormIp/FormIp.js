import React, {Component} from 'react';
import './formIp.scss'
import addIp from "../../redux/actions/add-ip-action";
import {connect} from "react-redux";
import getIpDataAction from "../../redux/actions/get-ip-data-action";
import "@fontsource/roboto";
class FormIp extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        // eslint-disable-next-line
        fetch(`https://ipapi.co/` + `${this.props.ip}` + `/json/`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                    this.props.getIpDataAction(json)
                },
                (error) => {
                    console.log(error.message)
                })
    }

    render() {
        return (
            <div className="container">
                <div className="container__form-title">
                    <div className="container__image">

                    </div>
                    <p className="container__title">Find My IP</p>
                </div>
                <form className="form-items">
                    <input
                        type="text"
                        className="container__form-input"
                        placeholder="IP"
                        name="comment"
                        onChange={(e) => this.props.addIp(e.currentTarget.value)}/>
                    <button type="button" className="container__form-btn" onClick={this.fetchData}>Search
                    </button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ip: state.addIpReducer,
        data: state.getIpDataReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addIp: e => dispatch(addIp(e)),
        getIpDataAction: data=>dispatch(getIpDataAction(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormIp);
