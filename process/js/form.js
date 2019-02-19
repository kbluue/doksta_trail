var React = require('react');

var Form = React.createClass({

    getInitialState: function(){
        return{
            product: [],
            imageRes: this.props.product.color
        }
    }, //getInitialState

    addImageRes: function(e){

        e.preventDefault();

        var image = {
            color: this.refs.color.value,
            imagePath: this.refs.img_path.value
        };

        console.log(image.color);
        var temp = this.state.imageRes;
        temp.push(image);

        this.setState({
            imageRes: temp
        });
    }, //addImageRes

    submitAction: function(e){

        if (this.state.imageRes.length < 1) return;

        var product = {
            id: this.refs.id.value,
            name: this.refs.name.value,
            category: this.refs.category.value,
            price: this.refs.price.value,
            desc: this.refs.desc.value
        };

        var temp = this.state.product;

        this.setState({
            product: temp
        });

        //add to db
        console.log("add to db done");
        e.preventDefault();
    }, //submitAction

    render: function(){

        var imageRes = this.state.imageRes.map(function(item, index){
            var alt = "image for color " + item.color;

            return (<img key = {index} 
                    src = {item.img_path} 
                    alt = {alt}/>)
        }.bind(this));

        return (
            <form onSubmit={this.submitAction}>
                <h2>Add New Item</h2>
                <input id="id" ref="id" placeholder="id" type="number" maxLength="4" required/>
                <input id="name" ref="name" placeholder="product name" type="text" maxLength="20" required/> <br/>
                <input id="category" ref="category" placeholder="category" type="text" maxLength="40" required/> <br/>
                <input id="price" ref="price" placeholder="price" type="number" maxLength="10" required/> <br/>
                <input id="desc" ref="desc" placeholder="description" type="text" maxLength="400" required/><br/>
                <input id="color" ref="color" placeholder="color" type="text" autoComplete="additional-name"/>
                <input id="img_path" ref="img_path" placeholder="image for selected color" type="file"/><br/>
                <button id="add_btn" onClick={this.addImageRes}>Add Image</button><br/>
                
                <div id="image_res">{imageRes}</div><br/>
                <button id="save" type="submit">SAVE</button>
            </form>)
    }
});//Form

module.exports = Form;