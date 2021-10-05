import { makeStyles } from "@material-ui/core/styles";
let Card = (props)=>{
    let useStyles = makeStyles({
        card: {
            border: 'solid grey 3px',
            width: '330px',
            alignSelf: 'center',
            borderRadius:'5px',
            backgroundColor: '#F0FFFF',
            margin: '10px'


        }, image:{
            width: '20rem',
            borderRadius:'5px'
        }
    })
    let classes = useStyles();
    let {img, title, description, alt} = props
    return(
        <div class={classes.card}>
            <h4>{title}</h4>
            <img className={classes.image} src={img}
            alt={{alt}}
            />
            <p>{description}</p>

        </div>
    )
}
export default Card;
