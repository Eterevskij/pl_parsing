import React from 'react';
import { Select } from 'antd';
import { ReactComponent as SelectArrow } from '../icons/SelectArrow.svg';

const { Option } = Select;

const SelectSource = (props) => {

    const { title, sources } = props;

    return (
        <div className="selectSource__wrapper">

            <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder={title}
                dropdownClassName='selectSource__droprown'
                showSearch={false}>

                {
                    sources.map(s => {
                        let { Photo } = s;
                        return (
                            <Option className="selectSource__option" value={s.name} label={s.name}>
                                <Photo />
                            </Option>
                        )
                    })
                }

            </Select>

            <div className="selectSource__arrow">
                <SelectArrow />
            </div>

        </div>
    )
}

export default SelectSource; 