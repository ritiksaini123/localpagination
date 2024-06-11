import { useEffect, useState, useR } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './news.module.css'
import { DotLoader } from "react-spinners";
import { getdata } from "../redux/newsAction";
import { Pagination } from "./Pagination";
export const News = () => {
    const inputs = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getdata())
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [noOfRecord, setnoOfRecords] = useState(10);
    const lastindex = currentPage * noOfRecord;
    const firstindex = lastindex - noOfRecord
    const records = inputs.data.slice(firstindex, lastindex);
    const noOfPages = Math.ceil(inputs.data.length / noOfRecord);
    const numbers = []
    // const [activeLink,setActiveLink]=useState(false)
    for (let i = 1; i <= noOfPages; i++) {
        numbers.push(i)
    }
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage() {
        if (currentPage !== noOfPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const filterData = (e) => {
        if (e > 5) {
            setnoOfRecords(e);
            setCurrentPage(1);
        } else {
            setnoOfRecords(5);
        }
    };
    const activeBtn=(element)=>{
        setCurrentPage(element) 
                               
    }


    return (
        <div className={style.container}>
            <div>
            {inputs.loading ?
                <DotLoader color="#36d7b7" speedMultiplier='2' />
                : inputs.data.length > 0 ? <table>
                    <thead><tr><th>userId</th><th>Id</th>
                        <th>title</th></tr></thead>
                    <tbody>  {records.map((element, id) => (
                        <tr key={id}>
                            <td>{element.userId}</td>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                        </tr>
                    ))}</tbody></table> : <h3>something wrong</h3>
            }
            <div className={style.paginationContainer}>
            <Pagination prePage={prePage} nextPage={nextPage} numbers={numbers}
                 activeBtn={activeBtn}
                noOfRecord={noOfRecord} currentPage={currentPage} filter={filterData} />
</div>
        </div>
        </div>
    )
}