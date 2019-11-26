import React,{Fragment} from 'react';
import store from '../store/index'
import {connect} from 'react-redux'
import axios from 'axios'
import '../asstes/css/Home/Home.css'
class Home extends React.Component{
    render(){
        return(
            <div>
                <header>
                    头部
                </header>
            <section>
             首页：中部

            </section>
            </div>
        )
    }

}
function mapStateToProps(state,props) {
    return {

    }
}
function mapDispatchToProps(dispacth) {
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)