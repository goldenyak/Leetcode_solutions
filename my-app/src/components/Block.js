import React from 'react'
import BlockDescription from "./BlockDescription";

const Block = ({title}) => {

    const [showBlock, setShowBlock] = React.useState(false)
    const onClickToShow = () => {
        setShowBlock(!showBlock);
    }

    return (
        <div>
            <button className="accordion" onClick={onClickToShow }>{title}</button>
            {showBlock ? <BlockDescription title="Hello, World"/> : null}
        </div>
    )
}

export default Block;