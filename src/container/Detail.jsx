import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataAyat: [],
            loading:false
        }
    }
    componentDidMount(){
        const nomor = this.props.match.params.nomor
        axios.get(`https://al-quran-8d642.firebaseio.com/surat/${nomor}.json?print=pretty`)
            .then(res => {
                this.setState({
                    dataAyat: res.data,
                    loading:true
                })
            })
    }
    handleArti = () => {
        this.setState({
            visible: true
        })
    }
    handleShow = () => {
        this.setState({
            visible: false
        })
    }
    render(){
        console.log(this.props)
        const { dataAyat } = this.state
        if(this.state.loading === false){
            return <h1>LOADING ....</h1>
        }
        return(
            <div>
                <Link to="/setting">SETTING</Link>
                {
                    dataAyat.map((data) => {
                        return(
                            <table class="responsive-table">
                                <tr>
                                    <td><font size={this.props.angka}>{data.ar}</font></td>
                                </tr>
                                <tr>
                                    <td className={this.props.visible ? "hide" : ""}>{data.id}</td>
                                </tr>
                            </table>
                        )
                })
                }
            </div>
        )
    }
}

const globalState = state => ({
    angka: state.angka,
    visible: state.visible
})


export default connect(globalState,null)(Detail);
