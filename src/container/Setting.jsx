import React from 'react';
import { connect } from 'react-redux';

class Setting extends React.Component{
    render(){
        return(
            <div>
                <h1>setting</h1>
                <h3>arabic size : {this.props.angka}</h3>
                <button onClick={this.props.handleTambah}>besar</button>
                <button onClick={this.props.handleKurang}>kecil</button>
                <button onClick={this.props.showTerjemahan}>hide terjemahan</button>
                <button onClick={this.props.hideTerjemahan}>show terjemahan</button>
            </div>
        )
    }
}

const globalState = state => ({
    angka: state.angka
})

const dispatch = dispatch => ({
    handleTambah: () => dispatch({type: 'TAMBAH_ANGKA'}),
    handleKurang: () => dispatch({type: 'KURANG_ANGKA'}),
    showTerjemahan: () => dispatch({type: 'TRUE_VISIBLE',value: true}),
    hideTerjemahan: () => dispatch({type: 'FALSE_VISIBLE',value: false})
})

export default connect(globalState,dispatch)(Setting);
