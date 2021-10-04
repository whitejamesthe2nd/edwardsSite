import { makeStyles } from "@material-ui/core/styles";
let Card = (props)=>{
    let useStyles = makeStyles({})
    let classes = useStyles();
    let {img, title, description} = props
    return(
        <div>
            <img src="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="></img>

        </div>
    )
}
export default Card;
