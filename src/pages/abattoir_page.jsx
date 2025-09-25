import DataTable from "../components/DataTable.jsx";
import {fetchAbattoirs} from "../repository/index.js";
import {useEffect, useState} from "react";

function AbattoirPage() {
    const [data, setData] = useState([]);

    const displayKeys = ["name", "address","latitude", "longitude"]

    useEffect(() => {
        fetchAbattoirs().then(response =>
            setData(response)
        );
    }, [])

    return (
        <DataTable dataSource={data} displayKeys={displayKeys}/>
    );
}

export default AbattoirPage;