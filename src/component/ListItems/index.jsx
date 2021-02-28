import React from 'react';
import * as LLSTyles from "../ListingLayout/styles"

const ListItems = ({ data, index, handleCheckCLicked, checkedstatus }) => {
    return (
        <LLSTyles.Tr key={index}>
            <LLSTyles.Td>
                <input
                    type="checkbox"
                    checked={checkedstatus}
                    onChange={() => handleCheckCLicked()}
                />
                {data.key}
            </LLSTyles.Td>
            <LLSTyles.Td>
                {!data.field.options ? <input type="text" value={data.field.defaultValue} /> :
                    <select id="select" name="select-field">
                        {
                            data.field.options.map(val =>
                                <option value={val}>{val}</option>
                            )
                        }
                    </select>
                }
            </LLSTyles.Td>
            <LLSTyles.Td>
                {data.description}
            </LLSTyles.Td>
        </LLSTyles.Tr>
    );
}

export default ListItems;
