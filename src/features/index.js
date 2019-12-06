import React, {Component} from 'react'
import './style.css'
class SelectBox extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            ...props,
            country: props.country,
            showItems: false,
            selectedItems: props.country.length>0 && props.country[0]
        }
        this.dropDown = this.dropDown.bind(this);
        this.selectItem = this.selectItem.bind(this)
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.country.length !== prevProps.country.length) {
            this.setState({
                country: this.props.country,
                selectedItems: this.props.country.length>0 && this.props.country[0]
            })
        }
    }
    dropDown= () => {
     this.setState(preState=> ({
         showItems: !preState.showItems
     }))
    }
    selectItem = (item) => this.setState({
        selectedItems: item,
        showItems: false
    })
    render(){
        return(
            <div>
                <div className="select-box--box">
                    <div className="select-box--container">
                        <div className="select-box--selected-item" onClick={this.dropDown}>
                            { this.state.selectedItems.name }
                        </div>

                        <div className="select-box--arrow"  onClick={this.dropDown}>
                            <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down' }`}/>
                        </div>
                        <div style={{display: this.state.showItems ? 'block': 'none'}} className="select-box--items">
                            {/*<input type="text"/>*/}
                            {
                                this.state.country.map(item =>
                                    <div
                                        key={item.name}
                                        onClick={() => this.selectItem(item)}
                                        className={this.state.selectedItems.name===item.name ? 'selected select-item-list': 'select-item-list'}
                                    >
                                        {item.name}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <input type="hidden" name={this.state.name} value={this.state.selectedItems.name}/>
                <input type="hidden" name={this.state.code} value={this.state.selectedItems.cioc}/>
            </div>

        )
    }
}
export default SelectBox;