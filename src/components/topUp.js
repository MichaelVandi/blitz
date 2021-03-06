import Title from './title';
import React, { useState, useEffect } from 'react';
// import ReactSlider from 'react-slider';
import Button from './button';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));


  const PrettoSlider = withStyles({
    root: {
      color: '#9d0b0b',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#9d0b0b',
      border: '2px solid grey',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
      color: 'white',
    },
    rail: {
      height: 8,
      borderRadius: 4,
      color: 'white',
    },
  })(Slider);
  

function TopUp () {
    const [selectedValue, setSelectedValue] = React.useState(20);
    const handleValueChange = (event, newValue) => {
      // console.log('Current Value ' + newValue);
      setSelectedValue(newValue);
    }
    const onPurchaseClick = () => {
      alert('Purchasing ' + selectedValue + ' GB');
    }
    return (
        <div style ={styles.container}>
            <Title text="Top Up Data"/>
            
            <div style={{width: "90%"}}>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" 
                defaultValue={20}  onChange={handleValueChange}/>
            </div>
            
             <Button onClick={onPurchaseClick} text="Purchase" color="red" fontSize={20} width="90%"/>

        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 25,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}


//make this component available to the app
export default TopUp;
