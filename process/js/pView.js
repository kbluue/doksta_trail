var React = require('react');

var PView = React.createClass({

    getInitialState: function(){
        return {
            visibleColor: this.props.product.colors
        }
    }, //getInitialState

    toggleColor: function(e){
        var selected = e.target.id;

        this.setState({
            visibleColor: selected
        });
    }, //toggleColor

    render: function(){

        var colorBox = this.props.product.colors.map(function(item, index){
            return <div id={item.color} className="box" style="background: {item.color}" onClick={this.toggleColor}></div>
        }.bind(this));

        return(
            <div>
                <img src = {this.state.visibleColor.img_path} id = "img" alt = {this.state.visibleColor.color}/>
                <div></div><br/>
                <h2>{this.props.product.name}</h2><br/>
                <h4>{this.props.product.category}</h4><br/>
                <div className="price" id="price">{this.props.product.price}</div><br/>
                <div className="desc" id="desc">{this.props.product.desc}</div><br/>
                <div>{colorBox}</div>
            </div>
        )
    } //render
});

module.exports = PView;