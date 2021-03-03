import React from 'react';
import Title from './title';
import Button from './button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { countries, countryInfo } from './dummyData';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
const countryElements = [];
// create a component
function GenerateProxies () {
    const classes = useStyles();
    const [type, setProxyType] = React.useState('');
    const [country, setCountry] = React.useState('');
    const handleProxyTypeChange = (event) => {
        setProxyType(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    // Add all countries to the country elements list
    countries.forEach((item, index) => {
        // For value we are passing the country cz we can get the code if we know the country
        countryElements.push(
            <option style={{color: '#292929'}}value={item}>{item}</option>
        )
    });

    const handleGenerate =(selectedCountry)=> {
        // Get complete url and hit the endpoint

        var data = countryInfo[selectedCountry];
        let username = 'Spleezy7381';
        let sessionId = Math.floor(99999999 * Math.random() + 1e8);
        let password = 'testPass';
        // let url = 'https://customer-'+username + ':' + password + '@' + data.completeUrl;
        let newUrl = data.completeUrl + ':' + 'customer-' + username + '-sessid-hw' + sessionId + ':' + password;

        alert(newUrl);

    }
    return (
        
        <div style ={styles.container}>

            <div style={styles.internalDiv1}>
                <Title text="Generate Proxies"/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    
                    
                    <FormControl className={classes.margin} style={{padding: 0, margin: 0, marginTop: 5,}}>
                        {/* <InputLabel htmlFor="demo-customized-select-native">Proxy Type</InputLabel> */}
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={type}
                        onChange={handleProxyTypeChange}
                        input={<BootstrapInput />}
                        >
                        {/* <option aria-label="None" value="Proxy Type"/> */}
                        <option aria-label="None" style={{color: '#292929'}} value={10}>Proxy Type</option>
                        <option style={{color: '#292929'}}value={20}>Static</option>
                        <option style={{color: '#292929'}}value={30}>Dynamic</option>
                        </NativeSelect>
                    </FormControl>

                    {/* Static IP */}
                    <FormControl className={classes.margin} style={{padding: 0, margin: 0, marginTop: 5,}}>
                        {/* <InputLabel htmlFor="demo-customized-select-native">Proxy Type</InputLabel> */}
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={type}
                        onChange={handleProxyTypeChange}
                        input={<BootstrapInput />}
                        >
                        {/* <option aria-label="None" value="Proxy Type"/> */}
                        <option aria-label="None" style={{color: '#292929'}} value={10}>Proxy Type</option>
                        <option style={{color: '#292929'}}value={20}>Static</option>
                        <option style={{color: '#292929'}}value={30}>Dynamic</option>
                        </NativeSelect>
                    </FormControl>

                    {/* Country */}
                    <FormControl className={classes.margin} style={{padding: 0, margin: 0, marginTop: 5,}}>
                        {/* <InputLabel htmlFor="demo-customized-select-native">Proxy Type</InputLabel> */}
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={country}
                        onChange={handleCountryChange}
                        input={<BootstrapInput />}
                        >
                        {/* <option aria-label="None" value="Proxy Type"/> */}
                        <option aria-label="None" style={{color: '#292929'}} value={10}>Country</option>
                        {countryElements}
                        
                        </NativeSelect>
                    </FormControl>

                    {/* City */}
                    <FormControl className={classes.margin} style={{padding: 0, margin: 0, marginTop: 5,}}>
                        {/* <InputLabel htmlFor="demo-customized-select-native">Proxy Type</InputLabel> */}
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={type}
                        onChange={handleProxyTypeChange}
                        input={<BootstrapInput />}
                        >
                        {/* <option aria-label="None" value="Proxy Type"/> */}
                        <option aria-label="None" style={{color: '#292929'}} value={10}>City</option>
                        <option style={{color: '#292929'}}value={20}>Static</option>
                        <option style={{color: '#292929'}}value={30}>Dynamic</option>
                        </NativeSelect>
                    </FormControl>

                    <FormControl className={classes.margin} style={{padding: 0, margin: 0, marginTop: 5,}}>
                        {/* <InputLabel htmlFor="demo-customized-textbox">Quantity</InputLabel> */}
                        <BootstrapInput id="demo-customized-textbox" placeholder="Quantity" />
                    </FormControl>

                    <Button onClick={() => handleGenerate(country)} text="Generate" color="red" fontSize={20} width="100%" marginTop={10}/>

                </div>
            </div>

            <div style={styles.internalDiv2}>
                <div style={styles.buttonDiv}>
                    <Button text="Copy" color="green" fontSize={20} width="25%"/>
                    <Button text="Clear" color="red" fontSize={20} width="25%" marginLeft={15}/>
                </div>

                <div style={styles.internalDiv3}>

                </div>
            </div>
            

        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        // justifyContent: 'space-between',
    },
    internalDiv1: {
        width: '30%', 
        display: 'flex',
        flexDirection: 'column',
        height: '100%', 
        // justifyContent: 'center', 
        alignItems: 'center'
    },
    internalDiv2: {
        width: '70%', 
        display: 'flex',
        flexDirection: 'column',
        height: '100%', 
        // justifyContent: 'center', 
        alignItems: 'center'
    },
    internalDiv3: {
        backgroundColor: '#181819',
        width: '93%', 
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#232426',
        borderWidth: 1,
        borderRadius: 25,
        // justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonDiv: {
        paddingRight: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 15,
        justifyContent: 'flex-end',
    }
}

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: '#292929',
      color: 'white',
      fontSize: 20,
      padding: '7px 30px 7px 10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 8,
        borderColor: '#d1d1d1',
        boxShadow: '0 0 0 0.2rem rgba(209,209,209,1)',
      },
    },
  }))(InputBase);


//make this component available to the app
export default GenerateProxies;
