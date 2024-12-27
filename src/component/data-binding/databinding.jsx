import { useEffect, useState } from "react";
import moment from "moment";
export function DataBinding() {
    const [title, setTitle] = useState("");
    useEffect(() => {
        setTitle("User Details");
    }, []);

    const [userId, setUserId] = useState("");
    useEffect(() => {
        setUserId("Deepak@gmail.com");
    }, []);

    const [password, setPassword] = useState("");
    useEffect(() => {
        setPassword("Deepak@123");
    }, []);

    const [price, setPrice] = useState(570800.33);
    const [code, setCode] = useState();
    useEffect(() => {
        setCode((Math.random()+1)*100);
    }, []);

    const[stock,setStock]= useState();
   useEffect(()=>{
    setStock(true);
   },[])

   const[stringValue,setStringValue]=useState();
   useEffect(()=>{
    setStringValue('bg-dark');
   },[])

   const[mfd,setMfd]= useState();
   useEffect(()=>{
    setMfd(Date());
   },[])

   const [regExp,setRegExp]=useState(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/);
   const[panCardRegExp,setPanCardRegExp]=useState(/(^[A-Z]{5}[0-9]{4}[A-Z])$/);

   const [catagories]=useState(['all','fashion','village','school']);

    return (
        <div>
            {/* here i put String in class as backtick with binding */}
            <h1 className={`text-center container-fluid text-warning ${stringValue}`}>Data Binding:{title}</h1>
            <strong> Userid:</strong> {userId}
            <br></br>
            <strong> Password: </strong>
            {password} <br />
            <strong> Price: </strong>
            {/* here i use String and String features */}
            {price.toLocaleString("en-in", { style: "currency", currency: "INR" })}
            <br></br>
            {/* Here i use Number datatype */}
            <strong>Price: </strong>
            {price.toPrecision(9)}
            <br></br>
            <strong>Price: </strong>
            {price.toFixed(1)}
            <br></br>
            <strong>Code: </strong>
            {code}
            <br></br>
            {/* Here i use Boolean DataType */}
            <strong>Stock: </strong>
            {(stock)?"true":"false"}
            <br />
            {/* Here i Use Date Feature but in React local Date formate not allowed */}
            {/* to want to dynemic date we have to install moment library from terminal Command-->npm i moment --save */}
           <strong>Date: </strong>{moment(mfd).format('DD/MM/YY dddd')}
           <br />
           <strong>Expression Validater: </strong>{('David123@'.match(regExp))?"Varified":"Invalid"}
           {/* this tell me the perfect validating in PanCard No */}
           <br />
           <strong>PanCard No: </strong>{('CFNPR8983P'.match(panCardRegExp))?"Correct":"Incorrect"}

           {/* here i use Array and How to iterate Array (this will return a list)*/}
           <br />
           <strong><oi>{catagories.map((catagory,index)=><li key={index}>{catagory}</li>)}</oi></strong>
           {/* in this i use array in option form */}
           <br />
           {/* this is with out key and value<br />
           <strong><select>{catagories.map(catagory=><option>{catagory}</option>)}</select></strong> */}

           {/* but we will not iterate array like this becouse each element have unique key  so we have to write like this */}
           <br />
            but this is with key and value <br />
           <strong><select>{catagories.map((catagory,index)=><option key={index}>{catagory}</option>)}</select></strong>
        </div>
    );
}
