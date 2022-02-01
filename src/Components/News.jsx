import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card, Input } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loading from './Loading';
// import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImageUrl = 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Crypto_News_Ethereum_Bitcoin_Kurs_Rekord_Hoch.jpg';


const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data} = useGetCryptosQuery(100);
  const { data : cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return <Loading/>;

  return (
    <Row gutter={[24, 24]}>
      {!simplified &&  (
        <Col span={24}>
        <Select
        showSearch
        className='select-news'
        placeholder="select a crypto"
        optionFilterProp='children'
        onChange={(value)=>setNewsCategory(value)}
        filterOption={(input,option )=>option.children.toLowerCase().indexOf(input.toLocaleLowerCase())>= 0}
        >
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
        </Select>
        </Col>
      )}
      {cryptoNews.value.map((news)=>(
       <Col xs={24} sm={12} lg={8} >
         <Card hoverable className='news-card'>
             <a href={news.url} target="_blank" rel="noreferrer">
                 <div className='news-image-container'>
                      <Title className='news-title' level={4}>{news.name}</Title>
                      <img style={{maxWidth:"200px" , maxHeight:"100px" , objectFit:"contain"}} src={news?.image?.thumbnail?.contentUrl || demoImageUrl} alt='news'></img>
                 </div>
                 <p>
                   {news.description >100 ? `${news.description.substring(0, 100)}...`:
                   news.description}
                 </p>
                 <div>
                   <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl} alt="news"/>
                   <Text className='provider-name'>{news.provider[0]?.name}</Text>
                 </div>
                 <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
             </a>
         </Card>
       </Col>
      ))}
    </Row>
  );
};

export default News;