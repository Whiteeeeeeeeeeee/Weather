// components/Search.js
import { useState, useEffect } from 'react';
import { Select, AutoComplete, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search = ({ onSearch }) => {
    const [city, setCity] = useState();
    const [dataSource, setDataSource] = useState([]);

    // 当AutoComplete组件的值变化时，更新inputValue  
    const handleChange = (newValue) => {
        setCity(newValue);
    };

    const handleSearch = async () => {
        if (city) {
            let a = await onSearch(city)
            if (a == 1) {
                let cityArray = localStorage.getItem('cityArray')
                let citys = cityArray.split(',')
                let citysAll = [...new Set([...citys, city])]
                localStorage.setItem('cityArray', citysAll)
                setDataSource(citysAll)
            }
        }
    };

    useEffect(() => {
        if (!localStorage.getItem('cityArray')) return
        let cityArray = localStorage.getItem('cityArray')
        let citys = cityArray.split(',')
        setDataSource(citys)
    }, [])

    return (
        <div className="flex items-center justify-center p-4 w-4/5 mx-auto">
            <AutoComplete
                style={{ width: 200 }}
                dataSource={dataSource}
                value={city}
                onChange={handleChange}
                placeholder="请输入城市"
                filterOption={(inputValue, option) =>
                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            >
            </AutoComplete>
            <Button style={{ marginLeft: 5 }} onClick={handleSearch} shape="circle" icon={<SearchOutlined />} />
        </div>
    );
};

export default Search;