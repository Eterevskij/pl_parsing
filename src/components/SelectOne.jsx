import { React, useState } from 'react';

import { Select } from 'antd';

import { ReactComponent as SelectMark } from '../icons/SelectMark.svg';
import { ReactComponent as SelectArrow } from '../icons/SelectArrow.svg';

const SelectOne = (props) => {

    const [value, setValue] = useState(null);

    const { content, title, placeholder, className } = props;

    const { Option } = Select;

    const isGrey = className?.includes('grey');


    const handleClick = ( selected ) => {

        if(selected === value) {
            setValue(null)
        } else {
            setValue(selected)
        }
    }


    return (
        <div className="selectOne__container">

            <div className="filterRange">

                { title && <p className='filterRange__title'>{title}</p> }

                <div className="selectOne__wrapper">

                    <SelectArrow className='selectOne__arrow' />

                    <Select
                        style={{ width: '100%' }}
                        placeholder={ placeholder ? placeholder : 'Выбрать'}
                        value={value}
                        optionLabelProp="label"
                        className={`selectOne ${isGrey ? 'grey' : ''}`}
                        dropdownClassName='selectOne__dropdown'
                        onSelect={handleClick}
                    >

                        {content.map(item => {
                            return (
                                <Option value={item.value} label={item.name} className="demo-option-label-item selectOne__item">
                                    <div className="selectOne__item__text">{item.name}</div>
                                    <div className="selectOne__item__icon"><SelectMark /></div>
                                </Option>
                            )
                        })}



                    </Select>


                </div>
            </div>
        </div>
    )

}

export default SelectOne;