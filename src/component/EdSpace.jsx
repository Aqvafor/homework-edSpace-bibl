// import React, { useState, useEffect } from 'react';
// import { Row, Col, Typography, Button } from 'antd';
// import possibleFeaturesData from '../data/features.json';
// import image1 from '../img/image3.svg';
// import image2 from '../img/image1.svg';
// import image3 from '../img/image4.svg';
// import image4 from '../img/image2.svg';
// import image5 from '../img/image5s.svg';
// import image6 from '../img/image5.svg';

// import './EdSpace.css'; 

// const imagesMap = {
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
// };

// const { Title, Text } = Typography;

// const EdSpace = () => {
//   const [features, setFeatures] = useState([]);
//   useEffect(() => {
//     setFeatures(possibleFeaturesData);
//   }, []);
//   return (
//     <div className="possible-container">
//       <div className='content-container'> 
//         <Title className='h-2' level={2}>Возможности Ed Space</Title>
//         <Text className='possible-text'>Моменты перечислить корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточную поддержку.</Text>
//         <Row gutter={[30, 30]}>
//           {features.map((feature) => (
//             <Col key={feature.title} span={8}>
//               <div className="possible-item">
//                 <img src={imagesMap[feature.imageKey]} alt={feature.title} className="possible-image" />
//                 <div className="text-block">
//                   <Title level={3} className='possible-block-h3'>{feature.title}</Title>
//                   <Text className='possible-block-text'>{feature.text}</Text>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//         <div className="possible-button">
//           <Button className="button" type="primary">Попробовать бесплатно</Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EdSpace;


import React, { useState, useEffect } from 'react';
import { Typography, Button } from 'antd';
import possibleFeaturesData from '../data/features.json';
import image1 from '../img/image3.svg';
import image2 from '../img/image1.svg';
import image3 from '../img/image4.svg';
import image4 from '../img/image2.svg';
import image5 from '../img/image5s.svg';
import image6 from '../img/image5.svg';

import './EdSpace.css'; 

const imagesMap = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
};

const { Title, Text } = Typography;

const EdSpace = () => {
  const [features, setFeatures] = useState([]);
  
  useEffect(() => {
    setFeatures(possibleFeaturesData);
  }, []);

  return (
    <div className="possible-container">
      <div className='content-container'> 
        <Title className='h-2' level={2}>Возможности Ed Space</Title>
        <Text className='possible-text'>Моменты перечислить корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточную поддержку.</Text>
        
        <div className="possible-cards">
          {features.map((feature, index) => (
            <div key={feature.title} className="possible-item" style={{
              gridColumn: ((index % 3) + 1).toString(),
              gridRow: (Math.floor(index / 3) + 1).toString()
            }}>
              <img src={imagesMap[feature.imageKey]} alt={feature.title} className="possible-image" />
              <div className="text-block">
                <Title level={3} className='possible-block-h3'>{feature.title}</Title>
                <Text className='possible-block-text'>{feature.text}</Text>
              </div>
            </div>
          ))}
        </div>

        <div className="possible-button">
          <Button className="button" type="primary">Попробовать бесплатно</Button>
        </div>
      </div>
    </div>
  );
};
export default EdSpace;