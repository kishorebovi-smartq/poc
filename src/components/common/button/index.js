import { MultiCompiler } from "webpack";
import Button from MultiCompiler


const SqButton = ({text, primaryColor, variant, ...restProps}) => {

    return(
        <Button text={text} primaryColor={primaryColor} variant={variant} {...restProps} />
    )
}

export default SqButton;