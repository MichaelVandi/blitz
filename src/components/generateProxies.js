import React, { useState, useEffect } from 'react';
import Title from './title';
import Button from './button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import { countries, countryInfo, stickyCountries } from './dummyData';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '100%',
          height: '100%',
          color: 'blue',
          backgroundColor: '#181819',
        },
    },
  }));

// create a component
function GenerateProxies () {
    const classes = useStyles();
    const [count, setCount] = React.useState(0);
    const [type, setProxyType] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [countryList, setCountryList] = React.useState('');
    // const [proxies, setProxies] = React.useState([]);
    const [proxyText, setProxyText] = React.useState('');
    const prevProxyTextRef = React.useRef();
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        prevProxyTextRef.current = proxyText;
        // What happens when we update stuff.
        // Update the country list
        console.log("was here: effect")
    })

    const handleProxyTypeChange = (event) => {
        setProxyType(event.target.value);
        // Update country type.
        if (event.target.value === 'Sticky' || event.target.value === 'Sticky2') {
            updateCountryList(stickyCountries);
        } else if (event.target.value === 'Rotate') {
            updateCountryList(countries);
        }
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    const updateCountryList = (list) => {
        console.log("was here to update country list")
        const countryElements = [];
        list.forEach((item, index) => {
            // For value we are passing the country cz we can get the code if we know the country
            // Add all countries to the country elements list
            countryElements.push(
                <option key={index} style={{color: '#292929'}}value={item}>{item}</option>
            )
        });
        // Set country elements to countries in state
        setCountryList(countryElements);
    }
    
    
    const handleProxyTextChange = (event) => {
        setProxyText(event.target.value);
    }
    const onClearClick = () => {
        setCount(0);
        setProxyText('');
    }
  
    const handleGenerate =(selectedCountry, quantity, type)=> {
        var quant = Number(quantity);
        if (type === null || type === 'Proxy Type' || type === '') {
            alert('Please Select Proxy Type');
            return;
        }
        if (selectedCountry === null || selectedCountry === 'Country' || selectedCountry === '') {
            alert('Please Select Country');
            return;
        }
        if (quantity === '' || quantity === null | quantity === undefined) {
            alert ('Selected Quantity Invalid');
            return;
        } else if (Number.isNaN(quant)) {
            alert ('Selected Quantity is not a number');
            return;
        }
        // alert("Quantity " + quantity + " Country " + selectedCountry + " Type: " + type);
        // Get complete url and hit the endpoint
        var data = countryInfo[selectedCountry];
        let username = 'Spleezy7381';
        let sessionId = Math.floor(99999999 * Math.random() + 1e8);
        let password = 'testPass';

        // The set ensures we do not have duplicate proxies for sticky sessions.
        const stickySet = new Set();
        
        let generatedProxies = [];
        for (var i = 0; i < quant; i++) {
            let newUrl;
            if(type === 'Sticky') {
                // Get sticky range for this country
                var stickyUrl = data.stickyUrl;
                var rangeString = stickyUrl.substring(stickyUrl.length - 13, stickyUrl.length).replace(/\s/g, '');
                var range = rangeString.split('-');
                console.log(range[0] + " : " + range[1]);
                var number = generateRandomNumberInRange(range[0], range[1]);
                while (stickySet.has(number)) {
                    // Keep Generating new number until we have something unique
                    var newNumber = generateRandomNumberInRange(range[0], range[1]);
                    number = newNumber;
                }

                console.log(number);
                newUrl = stickyUrl.substring(0, 16) + ':' + number + ':' + 
                    'customer-' + username + '-sessid-hw' + sessionId + ':' + password + '\n';

            } else if (type === 'Sticky2') {
                // Get country code
                var stickyUrl = data.stickyUrl;
                let countryCode = stickyUrl.substring(0, 2);
                newUrl = 'pr.oxylabs.io:7777' + ':' + 'customer-' + username + '-cc-' + countryCode + '-sessid-hw' + 
                    sessionId + ':' + password + '\n';
    
            } else if (type === 'Rotate') {
                newUrl = data.completeUrl + ':' + 'customer-' + username + '-sessid-hw' + sessionId + ':' + password + '\n';
                
            }
            generatedProxies.push(newUrl);
            // Update proxies text in the state
            const prevProxyText = prevProxyTextRef.current;
            var newlyGeneratedProxyText = generatedProxies.join('');
            setProxyText(prevProxyText + newlyGeneratedProxyText);
            // Update total number of proxies generated
            setCount(count + quant);
        }

    }
    const generateRandomNumberInRange = (min, max) => {
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    return (
        
        <div style ={styles.container}>

            <div style={styles.internalDiv1}>
                <Title text="Generate Proxies"/>
                <div style={{display: 'flex', flexDirection: 'column', 
                    height: '83%', justifyContent: 'space-around'}}>
                    

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
                        <option aria-label="None" style={{color: '#292929'}} value={'Proxy Type'}>Proxy Type</option>
                        <option style={{color: '#292929'}}value={'Sticky'}>Sticky</option>
                        <option style={{color: '#292929'}}value={'Sticky2'}>Sticky2</option>
                        <option style={{color: '#292929'}}value={'Rotate'}>Rotate</option>
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
                        {countryList}
                        
                        </NativeSelect>
                    </FormControl>

                   

                    <FormControl className={classes.margin} style={{padding: 0, margin: 0, marginTop: 5,}}>
                        {/* <InputLabel htmlFor="demo-customized-textbox">Quantity</InputLabel> */}
                        <BootstrapInput id="demo-customized-textbox" placeholder="Quantity" onChange={handleQuantityChange} />
                    </FormControl>

                    <Button onClick={() => handleGenerate(country, quantity, type)} 
                        text="Generate" color="red" fontSize={20} width="100%" marginTop={10}/>

                </div>
            </div>

            <div style={styles.internalDiv2}>
                <div style={styles.proxyListActionsDiv}>
                    <div style={styles.totalDiv}>
                        <p style={styles.totalText}>Total: {count} proxies</p>
                    </div>
                
                    <div style={styles.buttonDiv}>
                        <Button text="Copy" color="green" fontSize={20} width="25%"/>
                        <Button onClick={onClearClick} text="Clear" color="red" fontSize={20} width="25%" marginLeft={15}/>
                    </div>
                </div>

                <div style={styles.internalDiv3} className={classes.root}>
                    <textarea
                        style={styles.textField}
                        value={proxyText}
                        onChange={handleProxyTextChange}

                    />
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
        width: '93%', 
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        border: '1.5px solid #232426',
        padding: 5,
        borderRadius: 25,
        // borderColor: '#232426',
        // borderWidth: 1,
        // justifyContent: 'center', 
        backgroundColor: '#181819',
        alignItems: 'center'
    },
    textField: {
        width: '98%', 
        height: '99%', 
        resize: 'none',
        outline: 'none',
        padding: 10,
        border: 'none',
        // border: '1.5px solid #232426',
        // borderRadius: 25,
        color: 'white',
        backgroundColor: 'transparent',
    },
    buttonDiv: {
        // border: '1px solid blue',
        paddingRight: 30,
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 15,
        justifyContent: 'flex-end',
    },
    totalDiv: {
        // border: '1px  solid yellow',
        paddingLeft: 30,
        width: '30%'
    },
    totalText: {
        color: '#d1d1d1',
        fontSize: 24
    },
    proxyListActionsDiv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
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
