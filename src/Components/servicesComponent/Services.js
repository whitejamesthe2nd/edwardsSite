import React from 'react';
import Card from '../cardComponent/card';
import { makeStyles } from "@material-ui/core/styles";





let Services = ()=>{
    let useStyles = makeStyles({
        cardHolder:{
            border:'solid black 5px',
            display:'grid',
            gridTemplateColumns: '2',
            gridTemplateRows:'1fr 10fr'

        },
        card1:{
            gridColumnStart:'1',
            gridRowStart:'2'
        },
        card2:{
            gridColumnStart:'2',
            gridRowStart:'2'
        },
        header:{
            gridRowStart:'1',
        }

    })
    let classes = useStyles();
    // too be continued

    return(
        <div>
            <h2 className={classes.header}>Services</h2>

        <div className={classes.cardHolder}>
            <div className={classes.card1}>

            <Card
            title='Mobile Mechanic'
            img="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="
            description='I will meet you in an agreed upon
            location in order to work on your car'
            />
            <Card
            title='Tech Handy Man'
            img="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="
            description='I will meet you in an agreed upon
            location in order to work on your car'
            />
                </div>
            <div className={classes.card2}>
                <Card
                title='Fleet Service'
                img="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="
                description='I will meet you in an agreed upon
                location in order to work on your car'
                />
                <Card
                title='Roadside Assitance'
                img="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="
                description='I will meet you in an agreed upon
                location in order to work on your car'
                />
                <Card
                title='Stage One Repairs'
                img="https://media.istockphoto.com/photos/checking-oil-in-car-engine-picture-id1157179147?k=20&m=1157179147&s=612x612&w=0&h=UKbu3rdN-53cmKSO8NvuNl5Ve7Lh29rsUkVeARnE87M="
                description='I will meet you in an agreed upon
                location in order to work on your car'
                />

            </div>

        </div>
        </div>
    )
}

export default Services;
