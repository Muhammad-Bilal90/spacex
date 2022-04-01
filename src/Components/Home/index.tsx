import { useState, useEffect } from 'react';
import { useCompanyInfoQuery } from '../../generated/graphql';
import Home from './home';

const HomeContainer = () => {
    const { data, error, loading } = useCompanyInfoQuery();
    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        // console.log("HOME DATA: ", data);

        if(data !== null && data !== undefined){
            localStorage.setItem('Home',JSON.stringify(data));
            setUpdateData(true);
        }
    },[data]);

    let collection = localStorage.getItem('Home');

    if(collection !== null && collection !== undefined){
        let jsonData = JSON.parse(collection);

        if(updateData === true){
            console.log('Data Updated');
            return(<Home data={data!} />);
        }

        return(<Home data={jsonData} />)
    }

    if(loading){
        return(<div>Loading...</div>)
    }

    if(error || !data){
        return(<div>Error</div>)
    }

    return(<Home data={data} />)
}

export default HomeContainer;