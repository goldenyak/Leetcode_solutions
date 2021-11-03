import React from 'react'
import BlockDescription from "./BlockDescription";

const Block = (props) => {

    const [showBlock, setShowBlock] = React.useState(false)
    const onClickToShow = () => {
        setShowBlock(!showBlock);
        console.log(showBlock);
    }

    return (
        <div>
            <button className="accordion" onClick={onClickToShow}>{props.title}</button>
            {showBlock ? <BlockDescription/> : null}
        </div>
    )
}

export default Block