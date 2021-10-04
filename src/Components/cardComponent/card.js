import { makeStyles } from "@material-ui/core/styles";
let Card = (props)=>{
    let useStyles = makeStyles({
        card: {
            border: 'solid black 5px',
            width: '400px',
            alignSelf: 'center'

        }
    })
    let classes = useStyles();
    let {img, title, description, alt} = props
    return(
        <div class={classes.card}>
            <h4>Mobile Mechanic</h4>
            <img src="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="
            alt={{alt}}
            />
            <p>I am capable of working on a variety of cars</p>

        </div>
    )
}
export default Card;
