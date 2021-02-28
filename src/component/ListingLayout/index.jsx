import { React, useEffect, useState } from 'react';
import * as S from "./styles"
import ListItems from "../ListItems/"

const ListingLayout = () => {
    const [data, setData] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [showSelected, setShowSelected] = useState(false)
    useEffect(() => {
        //can be used once cors issue is fixed
        // fetch('https://lpcontent.s3.ap-south-1.amazonaws.com/Test/API.json')
        //     .then(res => res.json())
        //     .then(res => setData(res))
        //     .catch(err => console.log("couldn't fetch data"))
        getData()
    }, [])

    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(res => res.json())
            .then(res => {
                setSelectedItems(new Array(res.config.length).fill(false))
                setData(res.config)
            })
    }

    const handleCheckCLicked = (index) => {
        const duplicateArr = selectedItems.map((val, key) => key === index ? !val : val);
        setSelectedItems([...duplicateArr])
    }

    return (
        <>
            <input
                type="checkbox"
                checked={showSelected}
                onChange={() => setShowSelected(!showSelected)}
            />
            <p>Show Selected</p>
            <S.Table>
                <S.TabelBody>
                    <S.Tr>
                        <S.Th>
                            Key
                </S.Th>
                        <S.Th>
                            Value
                </S.Th>
                        <S.Th>
                            Description
                </S.Th>
                    </S.Tr>
                    {!showSelected && data && data.map((data, key) => {
                        return <ListItems data={data} handleCheckCLicked={() => handleCheckCLicked(key)} checkedstatus={selectedItems[key]} index={key} key={key} />
                    })}
                    {
                        showSelected && data.map((data, key) => {
                            return selectedItems[key] && <ListItems data={data} handleCheckCLicked={() => handleCheckCLicked(key)} checkedstatus={selectedItems[key]} index={key} key={key} />
                        })
                    }
                </S.TabelBody>
            </S.Table>
        </>
    );
}

export default ListingLayout;
