import React, {Component} from 'react'
import {connect} from 'react-redux'


class Index extends Component{
    componentDidMount = () => {
        this.props.ListDecorationLWorkOrder(this.props.data)
    }
    btnClick = () => {
        this.props.SET_STATE({
            obj: {...this.props.obj, a:3}
        })
    }
    render () {
        return (
            <div>
                <button onClick={this.btnClick.bind(this)}>按钮</button>
                <div>{this.props.obj.a}</div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    const {obj,data} = state.indexPage
    return {obj,data}
}

const mapDispatchToProps = (dispatch) => {
    const {SET_STATE,ListDecorationLWorkOrder} = dispatch.indexPage
    return {SET_STATE,ListDecorationLWorkOrder}
}

export default connect(mapStateToProps,mapDispatchToProps) (Index)