import React, { useState } from 'react';
import { Segmented } from 'antd';
import useSlider from '../hooks/UseSlider';

const TabSlider = (props) => {

    const ref = React.createRef();
    useSlider(ref, 'ant-segmented-group');

    const tabs = props.children.map(tab => {
        return tab.props.tabName;
    })

    const [currentTabId, setCurrentTabId] = useState(0);

    const changeTabHandler = (tab) => {
        setCurrentTabId(tabs.indexOf(tab));
    }

    return (
        <div className="tabSlider">
            <Segmented defaultValue={tabs[0]}
                       options={tabs}
                       ref={ref}
                       className='tabSlider__slider'
                       value={tabs[currentTabId]}
                       onChange={changeTabHandler} />

            <div className="tabSlider__content">
                {props.children[currentTabId]}
            </div>
        </div>
    )
}

export default TabSlider; 