var React = require('react');

var Form = React.createClass({

    getInitialState: function(){
        return{
            imageRes: [],
            product: {}
        }
    }, //getInitialState

    componentDidUpdate(prevProps, prevState){
        var change = (this.state.imageRes != prevState.imageRes) || (this.state.product != prevState.product);
        if (change) this.props.updateProduct(this.state.product, this.state.imageRes);
    }, //componentDidUpdate

    refreshProduct(){
        var temp = {
            id: "#" + this.refs.id.value.trim(),
            name: (this.refs.name.value).trim(),
            category: this.refs.category.value.trim(),
            price: "$ " + this.refs.price.value.trim(),
            desc: this.refs.desc.value.trim()
        };

        var control = {
            id: temp.id === "" ? "----" : temp.id,
            name : temp.name === "" ? "Product Name" : temp.name,
            category: temp.category === "" ? "product category" : temp.category,
            price: temp.price === "" ? "$ ---" : temp.price,
            desc: temp.desc === "" ? "product description" : temp.desc
        };

        this.setState({
            product: control
        });
    }, //refreshProduct

    addImageRes: function(e){

        e.preventDefault();

        var image = {
            color: this.refs.color.value,
            img_path: this.refs.img_path.value
        };

        console.log(image.color + ' // ' + image.img_path);
        var temp = this.state.imageRes;
        temp.push(image);

        this.setState({
            imageRes: temp
        });
    }, //addImageRes

    submitAction: function(e){

        e.preventDefault();
        console.log("submit action");

        if (this.state.imageRes.length < 1) return;
        
        this.refreshProduct();

        //add to db ** disable form
        console.log("add to db done");
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
                <input id="id" ref="id" onChange = {this.refreshProduct} placeholder="id" type="number" maxLength="4" required/>
                <input id="name" ref="name" onChange = {this.refreshProduct} placeholder="product name" type="text" maxLength="20" required/> <br/>
                <input id="category" ref="category" onChange = {this.refreshProduct} placeholder="category" type="text" maxLength="40" required/> <br/>
                <input id="price" ref="price" onChange = {this.refreshProduct} placeholder="price" type="number" maxLength="10" required/> <br/>
                <input id="desc" ref="desc" onChange = {this.refreshProduct} placeholder="description" type="text" maxLength="400" required/><br/>
                <input id="color" ref="color" onChange = {this.refreshProduct} placeholder="color" type="text" autoComplete="additional-name"/>
                <input id="img_path" ref="img_path" placeholder="image for selected color" type="file"/><br/>
                <button id="add_btn" onClick={this.addImageRes}>Add Image</button><br/>
                
                <div id="image_res">{imageRes}</div><br/>
                <button id="save" type="submit">SAVE</button>
            </form>)
    }
});//Form

module.exports = Form;