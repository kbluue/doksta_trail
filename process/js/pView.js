var React = require('react');

var PView = React.createClass({

    getInitialState: function(){
        return {
            visibleColor: ''
        }
    }, //getInitialState

    componentDidMount: function(){

        console.log("comDidMo");

        if (this.props.imageRes.length  > 0) {
            this.setState({
                visibleColor: this.props.imageRes[1].img_path
            });
        };
    }, //componentDidMOunt

    toggleColor: function(e){

        console.log('key ' + e.target.id + ' vC ' + this.state.visibleColor);

        var temp = this.props.imageRes[e.target.id].img_path;

        this.setState({
           visibleColor: temp
        });
    }, //toggleColor

    render: function(){
        
        var colorBox = this.props.imageRes.map(function(item, index){

            var style = {background: item.color};
            return (<button onClick = {this.toggleColor} key = {index} id={index} className="box" style={style}></button>)
        }.bind(this));

        return(
            <div className="preview">
                <img src = {this.state.visibleColor} id = "img" alt = {this.state.visibleColor.color}/>
                <div className="productProps">
                    <h2>{this.props.product.name}</h2><br/>
                    <h4>{this.props.product.category}</h4><br/>
                    <div className="price" id="price">{this.props.product.price}</div><br/>
                    <div className="desc" id="desc">{this.props.product.desc}</div><br/>
                    <div>{colorBox}</div>
                </div><br/>
                
            </div>
        )
    } //render
});

module.exports = PView;