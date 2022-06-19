import React,{useState} from 'react';
import InputTest from '../components/InputTest'
import ButtonTest from '../components/ButtonTest'
import SelectboxTest from '../components/SelectboxTest'
import CheckboxTest from '../components/CheckboxTest'

const optionData = [
    {key: 1, value: '내사랑'},
    {key: 2, value: '굥미니'},
    {key: 3, value: 'ㅋ케케'},
    {key: 4, value: '사랑해'},
    {key: 5, value: 'ㅋㅋㅋ'}
];
const categoryList = [
    {id : 0, data: '한국'},
    {id : 1, data: '태국'},
    {id : 2, data: '베트남'},
    {id : 3, data: '싱가폴'},
    {id : 4, data: '말레이시아'},
    {id : 5, data: '인도네시아'},
    {id : 6, data: '중국'},
    {id : 7, data: '런던'},
]

const Main = () => {
    const [form, setForm] = useState({
        currentPage  : 1,
        currentValue : "",
        checkValue : ""
    })
    const {currentPage,currentValue,checkValue} = form;

    const changeInput = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name] : value
        })
        console.dir(value);
    }


    return (
        <div>
            <InputTest value={currentPage} name="currentPage" onChange={changeInput} />
            <ButtonTest />
            <SelectboxTest value={currentValue} name="currentValue" optionData={optionData} onChange={changeInput}/>
            <CheckboxTest value={checkValue} name="checkValue" categoryList={categoryList} />
        </div>
    );
};

export default Main;