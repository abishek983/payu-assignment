import styled from "styled-components"

export const Table = styled.table`
    font-family: arial, sans - serif;
    border-collapse: collapse;
    width: 100%;
    tr:nth-child(even) {
        background-color: #dddddd;
    }
`

export const TabelBody = styled.tbody`
`

export const Th = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`

export const Td = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`

export const Tr = styled.tr`
`

export const Ptag = styled.p`
    display: inline;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    align-items:center;
    margin: 20px auto;
`

export const ShowSelectedCheckBoxContainer = styled.div`
    margin-left: auto;
`