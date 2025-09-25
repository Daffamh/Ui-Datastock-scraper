import DataTable from "../components/DataTable.jsx";
import {fetchCattle} from "../repository/index.js";
import {useEffect, useState} from "react";
import React from "react";

function CattlePage() {
    const [data, setData] = useState([]);

    const displayKeys = ["rfid","import_date", "abattoir_arrive_date", "slaughter_date"]

    useEffect(() => {
        fetchCattle().then(response => {
                setData(response)
            }
        );
    }, [])

    return (React.createElement(DataTable,{
        dataSource: data,
        displayKeys: displayKeys,
    })

    );
}


export default CattlePage;