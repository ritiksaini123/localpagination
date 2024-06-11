import { Button } from "../Button"
import style from '../../Components/news.module.css'
export function Pagination(props) {
    return (
        <div className={style.pagination}>
            <div>

                <Button onClick={props.prePage} value='Back' style={props.currentPage===1?{opacity:0.5}:{}} />
                {
                    props.numbers.map((element, index) => (
                        <Button onClick={() => 
                            props.activeBtn(element)
                            
                        }
                            value={element}  
                            style={props.currentPage===element?
                                { backgroundColor: 'rgb(0,130,255)', color: '#fff' }:{} } 
                                  />
                    ))
                }
                <Button onClick={props.nextPage} value='next' style={props.currentPage===props.numbers.length?{opacity:0.5}:{}}/>
            </div>
            <div className={style.filter}>
                {/* <input type="number" value={props.noOfRecord}
                    onChange={(e) => {
                        props.filter(e.target.value)
                    }
                    }
                >
                </input>
                <span>items per page</span> */}
                
  <select name="records" id="records" onChange={(e)=>{props.filter(e.target.value)}}>
  <option value='10'>10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="50">50</option>
    <option value="70">70</option>
  </select>
  <label for="cars">items per page</label>
            </div>

        </div>

    )
}