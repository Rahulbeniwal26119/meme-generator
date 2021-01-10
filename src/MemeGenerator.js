import React, { Component} from 'react';
import './memegenerator.css';

class MemeGenerator extends Component {
    constructor()
    {
        super();
        this.state = {
            topText : "" , 
            bottomText : "",
            image : "",
            height : "" , 
            width : "" ,
            unit : ""
        }
    }
    onChangeHandler = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value,
})
    }
    onClickHandler = (e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form className="meme-form">
                    <input className="top" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.onChangeHandler}/>
                    <input className="bottoom" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.onChangeHandler}/>
                    <input className="image-link" name="image" placeholder="enter image url" value={this.state.image} onChange={this.onChangeHandler}/>
                    <div className="text">
                        <input type="text" className="small" name="height" placeholder="image height" value={this.state.height} onChange={this.onChangeHandler}/>
                        <input type="text" className="small" name="width" placeholder="image width" value={this.state.width} onChange={this.onChangeHandler}/>
                    </div> 
                    <div className="select">
                        <select name="unit" value={this.state.unit} onChange={this.onChangeHandler}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                        </select>
                    </div>
                <div>
                <button type="submit" onClick={this.onClickHandler}>Generate</button>
                </div>
                </form>
                <div className="output" style={{backgroundImage : `url("${this.state.image}")` , backgroundSize: `cover` ,backgroundRepeat : "no-repeat" ,  height : `${this.state.height}` , width: `${this.state.width}`}}>
                    <h2 className="top" style={{fontSize : `40${this.state.unit}`}}>{this.state.topText}</h2>
                    <h2 className="bottom" style={{fontSize : `40${this.state.unit}`}}>{this.state.bottomText}</h2>
                </div>

            </div>
        )
    }

}
export default MemeGenerator;