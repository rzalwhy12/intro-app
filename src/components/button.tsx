interface IButton {
    title:string;
}

function Button(props : IButton) {
    return <button id="btn" className="bg-blue-200 md:bg-amber-500 lg:bg-amber-400 p-2 rounded-l-lg mx-1 shadow" >
        {props.title}
        </button>
}

export default Button;