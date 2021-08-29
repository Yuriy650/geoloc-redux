import React, { Component } from 'react';
import './content.scss';
import {connect} from "react-redux";
import "@fontsource/roboto"

class Content extends Component{
    render() {
        return(
            <div className="content-container">
                {this.props.ipData.map((item)=>(
                    <ul key={item.ip} className="content-container__list">
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>ip: <span className="content-container__string">{item.ip}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>version:<span className="content-container__string">{item.version}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>city: <span className="content-container__string">{item.city}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>region: <span className="content-container__string">{item.region}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>region_code: <span className="content-container__string">{item.region_code}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>country_code: <span className="content-container__string">{item.country_code}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>country_name: <span className="content-container__string">{item.country_name}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>country_capital: <span className="content-container__string">{item.country_capital}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>country_tld: <span className="content-container__string">{item.country_tld}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>continent_code: <span className="content-container__string">{item.continent_code}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-boolean">tf</button>
                            <p>in_eu: <span className="content-container__boolean">{String(item.in_eu)}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>postal: <span className="content-container__string">{item.postal}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-number">#</button>
                            <p>latitude: <span className="content-container__number">{item.latitude}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-number">#</button>
                            <p>longitude: <span className="content-container__number">{item.longitude}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>timezone: <span className="content-container__string">{item.timezone}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>utc_offset: <span className="content-container__string">{item.utc_offset}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>country_calling_code: <span className="content-container__string">{item.country_calling_code}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>currency: <span className="content-container__string">{item.currency}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>currency_name: <span className="content-container__string">{item.currency_name}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>languages: <span className="content-container__string">{item.languages}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-number">#</button>
                            <p>country_area: <span className="content-container__number">{item.country_area}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-number">#</button>
                            <p>country_population: <span className="content-container__number">{item.country_population}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>asn: <span className="content-container__string">{item.asn}</span></p>
                        </li>
                        <li>
                            <button className="content-container__btn-string">“</button>
                            <p>org: <span className="content-container__string">{item.org}</span></p>
                        </li>
                    </ul>
                ))}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ipData: state.getIpDataReducer
    }
}
export default connect(mapStateToProps)(Content);
