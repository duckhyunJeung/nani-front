import React, {useEffect, useState, useRef} from 'react';
import Masonry from 'react-masonry-css';
import Layout from '../components/layout';
import styled from 'styled-components';

const Container = styled.div`
  .masonry-container {
    width: 98%;
    margin: auto;
    margin-top: 10px;

  }

  .masonry {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    width: 100%;
    margin: auto;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    flex-grow: 1;
  }

  .tile {
    img {
      margin-bottom: 5px;
      width: 100%;
    }
  }


  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;     
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px;
    background-clip: padding-box;
  }
  
`;

const Index = () => {
  const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643,1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
  const [imageList, setImgList] = useState([]);

  useEffect(() => {
    let images = [];
    if(imageList.length <= 0) {
      for (let i = 0; i < imgId.length; i++) {
        const ih = 200 + Math.floor(Math.random() * 10) * 15;
        images.push('https://unsplash.it/250/' + ih + '?image=' + imgId[i]);
      }
      setImgList(images);
    }

  }, [imageList]);


  return (
    <Layout>
      <Container>
        <div className="masonry-container">
          <Masonry
            breakpointCols={5}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imageList && imageList.map((image, id) => {
              return <Tile src={image} />;
            })}
          </Masonry>
        </div>
      </Container>
    </Layout>
  );
};

export default Index;

const Tile = ({src}) => {
  return (
    <div className="tile">
      <img src={src} />
    </div>
  );
};

