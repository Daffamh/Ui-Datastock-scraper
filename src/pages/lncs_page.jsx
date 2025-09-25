import DataTable from "../components/DataTable.jsx";
import {fetchlncs} from "../repository/index.js";
import {useEffect, useState} from "react";

function LncsPage() {
    const [data, setData] = useState([]);

    const displayKeys = ["name", "packing_list_number","actual_number"]

    useEffect(() => {
        fetchlncs().then(response =>
            setData(response)
        );
    }, [])

    return (
        <DataTable dataSource={data} displayKeys={displayKeys}/>
    );
}

export default LncsPage;