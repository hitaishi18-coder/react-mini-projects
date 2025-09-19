import { useEffect , useState } from "react";


function CurrencyConverterInfo() {
    const [data,setData] = useState(null); // initially null
 
    useEffect(() => {
        fetch("https://api.exchangerate-api.com/v4/latest/EUR")
        .then((res) => res.json())
        .then((res) => {
            console.log("fetched currency converter data:" , res.rates);
            setData(res.rates); 
        })
        .catch((error) => console.error("Api fetch erroe" , error));

    },[]);
    return data;
}

export default CurrencyConverterInfo;