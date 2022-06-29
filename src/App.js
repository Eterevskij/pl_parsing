import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Button, Modal } from 'antd';
import './App.css';
import './NewRow.css';

import TabSlider from './components/TabSlider';
import SelectSource from './components/SelectSource';
import SelectOne from './components/SelectOne';

import { ReactComponent as Yandex } from './icons/sourcesLogos/Yandex.svg';
import { ReactComponent as Avito } from './icons/sourcesLogos/Avito.svg';
import { ReactComponent as HandsToHands } from './icons/sourcesLogos/HandsToHands.svg';
import { ReactComponent as TrashBin } from './icons/TrashBin.svg';
import { ReactComponent as Filter } from './icons/Filter.svg';

const sources = [
  { name: 'Avito', Photo: Avito },
  { name: 'HandsToHands', Photo: HandsToHands },
  { name: 'Yandex', Photo: Yandex },
  { name: 'Avito2', Photo: Avito },
  { name: 'HandsToHands2', Photo: HandsToHands }
];

const elevator = [
  { name: 'Пассажирский', value: 'passenger' },
  { name: 'Грузовой', value: 'freight' },
]



function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="parsing">
          <p className="parsing__title">Парсинг объектов недвижимости</p>

          <div className="parsing__block">

            <TabSlider>
              <p tabName='Продажа'>Тут ниче нет</p>
              <Rent tabName='Аренда' />
              <p tabName='История парсинга'>Тут тоже</p>
            </TabSlider>
            

          </div>

        </div>
      </div>
    </div>
  );
}

const Rent = () => {
  const [isWarningModalVisible, setIsWarningModalVisible] = useState(false);
  const [isAllFiltersgModalVisible, setIsAllFiltersModalVisible] = useState(false);

  const handleWarningCancel = () => {
    setIsWarningModalVisible(false);
  };

  const handleAllFiltersCancel = () => {
    setIsAllFiltersModalVisible(false);
  };

  return (
    <>
      <Row className="parsing__filters">
        <Col span={24}>
          <SelectSource sources={sources} title='Выберите источник' />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xxl={6} xl={12} xs={24}>
          <SelectOne className='grey' content={elevator} />
        </Col>

        <Col xxl={6} xl={12} xs={24}>
          <SelectOne className='grey' content={elevator} />
        </Col>

        <Col xxl={6} xl={12} xs={24}>
          <SelectOne className='grey' content={elevator} />
        </Col>

        <Col xxl={6} xl={12} xs={24}>
          <SelectOne className='grey' content={elevator} />
        </Col>

      </Row>

      <div className="parsing__filterButtons">
        <Row className='parsing__filterButtons__wrapper' >
          <Col className='parsing__filterButtons__allFilters__col parsing__filterButtons__col' xxl={3} xl={3} lg={3} sm={24}>
            <Button className='parsing__filterButtons__allFilters'
                    onClick={() => setIsAllFiltersModalVisible(true)}
                    icon={<Filter />}>Все фильтры <span className="parsing__filterButtons__allFilters__num"><span>3</span></span></Button>
          </Col>

          <Col className='parsing__filterButtons__clear__col parsing__filterButtons__col'
               xxl={{ offset: 4, span: 6 }} xl={{ offset: 5, span: 6 }} lg={{ offset: 0, span: 4 }} sm={{ offset: 0, span: 24 }}>
            <Button icon={<TrashBin />} className='parsing__filterButtons__clear'>Сбросить фильтр</Button>
          </Col>

          <Col className='parsing__filterButtons__search__col parsing__filterButtons__col' xxl={{ offset: 4, span: 6 }} xl={{ offset: 4, span: 6 }} lg={{ offset: 0, span: 6 }} sm={{ offset: 0, span: 24 }}>
            <Button className='parsing__filterButtons__search'>Поиск</Button>
          </Col>

        </Row>
      </div>

      <div className="parsing__warning desktop">
            <h6 className="parsing__warning__title">По вашему запросу объявлений не найдено</h6>
            <p className="parsing__warning__subtitle">Мы не нашли объявлений по вашему запросу, попробуйте выбрать другие фильтры</p>
          </div>

          <Modal className='parsing__warning__modal' visible={isWarningModalVisible} onCancel={handleWarningCancel} footer={null}>
            <div className="parsing__warning mobile">
              <h6 className="parsing__warning__title">По вашему запросу объявлений не найдено</h6>
              <p className="parsing__warning__subtitle">Мы не нашли объявлений по вашему запросу, попробуйте выбрать другие фильтры</p>
            </div>
          </Modal>

          <button className='showWarningBtn' onClick={() => setIsWarningModalVisible(true)}>Показать мобильный Popup</button>

    </>
  )
}

export default App;