import React from 'react'
import Axios from 'axios';
import { urlApi } from '../support/urlApi';
import { connect} from 'react-redux';
import { onLogin } from './../1.actions'

class ProductDetail extends React.Component{
    state = {product : {}, proteksi2 : ""}
    componentDidMount(){
        this.getDataApi()
    }
    getDataApi = () => {
        var idUrl = this.props.match.params.id // id mengikuti sesuai yg di app.js
        Axios.get(urlApi+'/products/' + idUrl)
        .then((res) => {
            this.setState({product : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    proteksi = () => {
        var input = this.refs.jumlah.value
        if(input < 1){
           this.refs.jumlah.value = 1
        }
    }
    
    render(){
        var  {nama,harga,discount,deskripsi,img} = this.state.product
        return(
            <div className='container'>
               <div className='row'>
                    <div className='col-md-4'>
                        <div className="card" style={{width: '100%'}}>
                            <img className="card-img-top" src={img} alt="Card image cap" />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <h1 style={{color:'#4c4c4c'}}>  {nama} </h1>
                        <div style={{backgroundColor:'#d50000',
                                     width:'50px',
                                     height: '22px',
                                     color : 'white',
                                     textAlign : 'center',
                                     display :'inline-block'}}>
                            {discount}%
                        </div>
                        <span style={{fontSize:'12px',
                                      fontWeight:'600',
                                      color:"#606060",
                                      textDecoration:'line-through',
                                      marginLeft: '10px'}}>
                            {harga}
                        </span>
                        <div style={{fontSize : '24px',
                                     fontWeight : '700',
                                     color : '#FF5722',
                                     marginTop : '10px'}}>
                            {harga - (harga *discount/100)}
                        </div>

                        <div className='row'>
                            <div className='col-md-2'>
                                <div style={{marginTop: '10px',
                                     fontSize:'14px',
                                     fontWeight:'700',
                                     color: '#606060'}}>
                                    Jumlah
                                </div>
                                <input ref='jumlah' type='number' onChange={this.proteksi}  min={1} className='form-control' style={{width : '70px', marginTop : '10px'}} />
                                {this.renderProteksi}                                                            
                            </div>
                            <div className='col-md-6'>
                                <div style={{marginTop: '10px',
                                     fontSize:'14px',
                                     fontWeight:'700',
                                     color: '#606060'}}>
                                     Catatan untuk penjual(Opsional)
                                </div>
                                <input type='text' className='form-control' placeholder='Contoh Warna Putih, Ukuran XL, Edisi ke-2' style={{marginTop : '10px'}}/>                                                                           </div>
                                
                        </div>
                        <div className='row mt-4'>
                            <div className='col-md-8'>
                                <p style={{color: '#606060', fontStyle:'italic'}}>
                                {deskripsi}
                                </p>
                            </div>
                        </div>
                        {
                        this.props.username === "" ?
                        <div className='row mt-4'>
                            <input type='button' className='btn border-secondary col-md-2' value='Add To Wishlist' disabled />
                            <input type='button' className='btn btn-primary col-md-3' value='Beli Sekarang' disabled />
                            <input type='button' className='btn btn-success col-md-3' value='Masukan ke Keranjang' disabled />
                        </div> : 
                        <div className='row mt-4'>
                        <input type='button' className='btn border-secondary col-md-2' value='Add To Wishlist' />
                        <input type='button' className='btn btn-primary col-md-3' value='Beli Sekarang' />
                        <input type='button' className='btn btn-success col-md-3' value='Masukan ke Keranjang' />
                        </div>
                        }
                        
                    </div>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username
    }
}
export default connect (mapStateToProps,{onLogin})(ProductDetail)

