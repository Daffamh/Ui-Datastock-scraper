import DataTable from "../components/DataTable.jsx";
import {fetchFeedlots} from "../repository/index.js";
import {useEffect, useState} from "react";

function FeedlotPage() {
    const [data, setData] = useState([]);

    const displayKeys = ["name", "address","latitude", "longitude"]

    useEffect(() => {
        fetchFeedlots().then(response =>
            setData(response)
        );
    }, [])

    return (
        <DataTable dataSource={data} displayKeys={displayKeys}/>
    );
}

export default FeedlotPage;