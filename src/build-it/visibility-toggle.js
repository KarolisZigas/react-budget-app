class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility,
            }
        })
    }
    render(){
        return(
            <div>
                <h1>VISIBILITY TOGGLE</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details":"Show details"}</button>
                {this.state.visibility && <p>This is a hidden text</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));





// let visibility = false;

// const handleClick = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={handleClick}>{visibility ? "Hide details" : "Show details"}</button>
//             {visibility && <p>Hello, this is the hidden text</p>}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// }

// render();