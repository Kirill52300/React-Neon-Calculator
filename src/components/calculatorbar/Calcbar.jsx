import Calcbutton from '../UI/calcbuttons/Calcbutton';
import Calcinput from '../UI/calcinput/Calcinput';
import cls from './Calcbar.module.css'

function Calcbar({ handleclick, inputvalue }) {
    return (

        <div className={cls.Calcbar}>
            <a style={{ fontSize: 23, color: '#201064' }} href="https://github.com/Kirill52300">
                @Github Link &ensp; Press Enter For Result
            </a>
            <Calcinput CalcInputValues={inputvalue} />
            <div>
                <Calcbutton clickhandler={handleclick} />
            </div>
        </div>
    );
}

export default Calcbar;