import {useStore} from "./reduxProvider";
import {useEffect} from "react";
import useDispatch from "./reduxProvider/useDispatch";


function App(){
    const store = useStore();
    const dispatch = useDispatch();
    useEffect( () => {
        console.log(store, 'STORE')
    }, [store] );
    return (
        <div>
            App
            <button onClick={ () => {
                // qanzi reducer um chenq nshel te inch tesak action ic incha linum zut grelenq reeturn state + 1,
                // ayd isk patcharov karevor chi inch action enq dispatch anum inqe meka aneluya return state + 1;
                dispatch({  })
            } } >
                Imitate state update
                store value is {store}
            </button>
        </div>
    )
}

export default App;
