var React = require('react');
var RFR = require('react-file-reader').default;

var Form = React.createClass({

    getInitialState: function(){
        return{
            imageRes: [],
            product: {}
        }
    }, //getInitialState

    componentDidMount(){
        console.log("form.compMount");
        this.refreshProduct();
    }, //componentDidMount

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

        console.log

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

        var reader = new FileReader();
        var temp = "";
        reader.addEventListener("load", function(){
            temp = reader.result;
            console.log("afterwards temp:// " + temp);
        },false);

        if (this.refs.img_path.value === "") {
            console.log("kindly include img_path");
            return;
        } //log error

        console.log("temp:// " + temp);
        var image = {
            color: this.refs.color.value,
            img_path: this.refs.img_path.value
            // img_path: temp
        };

        console.log(image.color + ' // ' + image.img_path);
        var temp = this.state.imageRes;
        temp.push(image);

        this.setState({
            imageRes: temp
        });

        this.refs.color.value = "";
        this.refs.img_path.value = "";
    }, //addImageRes

    submitAction: function(e){

        e.preventDefault();
        console.log("submit action");

        if (this.state.imageRes.length < 1) return;
        
        this.refreshProduct();

        //add to db ** disable form
        console.log("add to db done");
    }, //submitAction

    RFRTest: function(files){
        console.log(files)
    }, //RFRTest

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
                #<input id="id" ref="id" onChange = {this.refreshProduct} placeholder="id" type="number" maxLength="4" required/>
                <input id="name" ref="name" onChange = {this.refreshProduct} placeholder="product name" type="text" maxLength="20" required/> <br/>
                <input id="category" ref="category" onChange = {this.refreshProduct} placeholder="category" type="text" maxLength="40" required/> <br/>
                $ <input id="price" ref="price" onChange = {this.refreshProduct} placeholder="price" type="number" maxLength="10" required/> <br/>
                <input id="desc" ref="desc" onChange = {this.refreshProduct} placeholder="description" type="text" maxLength="400" required/><br/>
                <input id="color" ref="color" onChange = {this.refreshProduct} placeholder="color" type="text" autoComplete="additional-name"/>
                <RFR handleFiles = {this.RFRTest}><input id="img_path" ref="img_path" type="file"/><br/></RFR>
                <button id="add_btn" onClick={this.addImageRes}>Add Image</button><br/>
                
                <div id="image_res">{imageRes}</div><br/>
                <button id="save" type="submit">SAVE</button>
            </form>)
    }
});//Form

module.exports = Form;