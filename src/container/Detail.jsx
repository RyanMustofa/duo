import React from 'react';
import axios from 'axios';

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
    render(){
        const { dataAyat } = this.state
        if(this.state.loading === false){
            return <h1>LOADING ....</h1>
        }
        return(
            <div>
                {
                    dataAyat.map((data) => {
                        return(
                            <table class="responsive-table">
                                <tr>
                                    <td>{data.ar}</td>
                                </tr>
                                <tr>
                                    <td>{data.id}</td>
                                </tr>
                            </table>
                        )
                })
                }
            </div>
        )
    }
}

export default Detail
