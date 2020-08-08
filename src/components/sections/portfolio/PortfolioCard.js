import React, { useState } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import PortfolioCardModal from './PortfolioCardModal';

const propTypes = {
  title: PropTypes.string
};
const PortfolioCard = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    debugger;
    setVisible(true);
  };
  const closeModal = () => {
    debugger;
    setVisible(false);
  };
  return (
    <div className="tiles-item-inner">
      <Card
        onClick={openModal}
        hoverable
        cover={
          <div className="portfolio-img-container">
            <img
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              alt="Avatar"
              class="portfolio-img"
            />
            <div class="portfolio-img-overlay">
              <div class="portfolio-img-text">Görseller</div>
            </div>
          </div>
        }
      >
        <Card.Meta title={title} />
      </Card>
      {visible && <PortfolioCardModal visible={visible} close={closeModal} />}
    </div>
  );
};
PortfolioCard.propTypes = propTypes;

export default PortfolioCard;
