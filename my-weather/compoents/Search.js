// components/Search.js
import { useState } from 'react';
import { Select, AutoComplete } from 'antd';

const Search = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

    // 当AutoComplete组件的值变化时，更新inputValue  
    const handleChange = (newValue) => {
        setCity(newValue);
    };

    const handleSearch = () => {
        console.log(city, '232');

        if (city) {
            onSearch(city);
            setCity('');
        }
        localStorage.setItem('addressArray', [1, 2, 3])
    };

    return (
        <div className="flex items-center justify-center p-4 w-4/5 mx-auto">
            <AutoComplete
                style={{ width: 200 }}
                dataSource={dataSource}
                value={city}
                onChange={handleChange}
                placeholder="请输入要搜索的城市"
                filterOption={(inputValue, option) =>
                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
            <button onClick={handleSearch} className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md">
                搜索
            </button>
        </div>
    );
};

export default Search;