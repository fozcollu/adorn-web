import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Entry = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'entry section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'entry-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div>
        <img
          src="https://storage.needpix.com/rsynced_images/wedding-3372884_1280.jpg"
          style={{ width: '100%', height: '650px' }}
          alt=""
        />
        <div class="entry-image-centered">
          <div className="container-sm">
            <div className={innerClasses}>
              <div className="entry-content">
                <h1
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  Merhaba, tanıştığımıza memnun olduk
                </h1>
                <div className="container-xs">
                  <p
                    className="m-0 mb-32 reveal-from-bottom"
                    data-reveal-delay="400"
                  >
                    Adorn Events olarak sizinle birlikte çalışarak, özel
                    günlerinizi daha özel kılmak için çalışıyoruz.
                  </p>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" wideMobile>
                        Hakkımızda
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Entry.propTypes = propTypes;
Entry.defaultProps = defaultProps;

export default Entry;
