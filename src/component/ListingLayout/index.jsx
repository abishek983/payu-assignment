import { React, useEffect, useState } from 'react';
import * as S from "./styles"
import ListItems from "../ListItems"
import Search from "../Search"

const ListingLayout = () => {
    const [data, setData] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [searchedItems, setSearchedItems] = useState([])
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
                setSearchedItems(res.config)
                setData(res.config)
            })
    }

    const handleCheckCLicked = (index) => {
        const duplicateArr = selectedItems.map((val, key) => key === index ? !val : val);
        setSelectedItems([...duplicateArr])
    }


    return (
        <>
            <S.FlexContainer>
                <Search data={data} updatedValue={(items) => setSearchedItems(items)} />
                <S.ShowSelectedCheckBoxContainer>
                    <input
                        type="checkbox"
                        checked={showSelected}
                        onChange={() => setShowSelected(!showSelected)}
                    />
                    <S.Ptag>Show Selected</S.Ptag>
                </S.ShowSelectedCheckBoxContainer>
            </S.FlexContainer>
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

                    {!showSelected && searchedItems && searchedItems.map((data, key) => {
                        return <ListItems data={data} handleCheckCLicked={() => handleCheckCLicked(key)} checkedstatus={selectedItems[key]} index={key} key={key} />
                    })
                    }
                    {
                        showSelected && searchedItems.map((data, key) => {
                            return selectedItems[key] && <ListItems data={data} handleCheckCLicked={() => handleCheckCLicked(key)} checkedstatus={selectedItems[key]} index={key} key={key} />
                        })
                    }

                </S.TabelBody>
            </S.Table>
        </>
    );
}

export default ListingLayout;
