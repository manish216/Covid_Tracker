import React from 'react';

import{Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {

    state ={
        data:{},
        country:'',
    }


    async componentDidMount(){

        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
       // console.log(fetchedData);
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        //console.log(country); // this will display the country name in the console but we still need to use the country name to fetch the data from the api
        //fetch the data
        console.log(fetchedData);
        // set the state
        this.setState({data: fetchedData,country:country});
    }
    render() {

        const {data,country} = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;