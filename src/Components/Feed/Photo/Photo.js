import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTOPAGE_GET } from '../../../api';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from './PhotoContent';
import styles from './Photo.module.css';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTOPAGE_GET(id);

    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
