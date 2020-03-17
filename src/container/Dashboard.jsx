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
                console.log(res)
                this.setState({
                    dataSurat: res.data,
                    loading: true
                });
            });
    }
    handleClick = (nomor) => {
        this.props.history.push(`/${nomor}`)
    }
    render() {
        if(this.state.loading === false){
            return <h1>LOAIDNG...</h1>
        }
        return (
            <div>
                {this.state.dataSurat.map(data => {
                    return (
                        <table className="responsive-table">
                            <tr>
                                <td onClick={() => this.handleClick(data.nomor)}>{data.asma}</td>
                            </tr>
                        </table>
                    );
                })}
            </div>
        );
    }
}

export default Dashboard;
