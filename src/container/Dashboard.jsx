import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSurat: [],
            loading: false
        };
    }
    componentDidMount() {
        axios
            .get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
            .then(res => {
                console.log(res);
                this.setState({
                    dataSurat: res.data,
                    loading: true,
                    connection: true
                });
            })
            .catch(res => {
                this.setState({
                    connection: false
                });
            });
    }
    handleClick = nomor => {
        this.props.history.push(`/${nomor}`);
    };
    render() {
        if (this.state.loading === false) {
            return <h1>LOAIDNG...</h1>;
        }
        if(this.state.connection === false){
            return <h1>CHECK YOUR INTERNET</h1>
        }
        if (this.state.connection) {
            return (
                <div>
                    <table className="responsive-table">
                        {this.state.dataSurat.map(data => {
                            return (
                                <tr>
                                    <td
                                        onClick={() =>
                                            this.handleClick(data.nomor)
                                        }
                                    >
                                        {data.asma}
                                    </td>
                                    <td
                                        onClick={() =>
                                            this.handleClick(data.nomor)
                                        }
                                    >
                                        {data.nama}
                                    </td>
                                    <td
                                        onClick={() =>
                                            this.handleClick(data.nomor)
                                        }
                                    >
                                        {data.arti}
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            );
        }
    }
}

export default Dashboard;
