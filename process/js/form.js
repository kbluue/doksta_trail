var React = require('react');

var Form = React.createClass({

    getInitialState: function(){
        return{
            imageRes: []
        }
    }, //getInitialState

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

        this.props.updateProduct(this.props.product, this.state.imageRes);
    }, //addImageRes

    submitAction: function(e){

        e.preventDefault();
        console.log("submit action");

        if (this.state.imageRes.length < 1) return;

        var product = {
            id: this.refs.id.value,
            name: this.refs.name.value,
            category: this.refs.category.value,
            price: this.refs.price.value,
            desc: this.refs.desc.value
        };

        var imageRes = this.state.imageRes;

        console.log(product);
        console.log(imageRes);

        this.props.updateProduct(product, imageRes);

        //add to db
        console.log("add to db done");
    }, //submitAction

    changeTriggerAction: function(e){
        console.log(e.target.id);
        console.log('dfbgiuhsfrg sdfiuhgsfg');

        var temp = {
            id: this.refs.id.value,
            name: this.refs.name.value,
            category: this.refs.category.value,
            price: this.refs.price.value,
            desc: this.refs.desc.value
        };

        this.props.updateProduct(temp, this.state.imageRes);
    }, //changeTriggerAction

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
                <input id="id" ref="id" onChange = {this.changeTriggerAction} placeholder="id" type="number" maxLength="4" required/>
                <input id="name" ref="name" onChange = {this.changeTriggerAction} placeholder="product name" type="text" maxLength="20" required/> <br/>
                <input id="category" ref="category" onChange = {this.changeTriggerAction} placeholder="category" type="text" maxLength="40" required/> <br/>
                <input id="price" ref="price" onChange = {this.changeTriggerAction} placeholder="price" type="number" maxLength="10" required/> <br/>
                <input id="desc" ref="desc" onChange = {this.changeTriggerAction} placeholder="description" type="text" maxLength="400" required/><br/>
                <input id="color" ref="color" onChange = {this.changeTriggerAction} placeholder="color" type="text" autoComplete="additional-name"/>
                <input id="img_path" ref="img_path" placeholder="image for selected color" type="file"/><br/>
                <button id="add_btn" onClick={this.addImageRes}>Add Image</button><br/>
                
                <div id="image_res">{imageRes}</div><br/>
                <button id="save" type="submit">SAVE</button>
            </form>)
    }
});//Form

module.exports = Form;