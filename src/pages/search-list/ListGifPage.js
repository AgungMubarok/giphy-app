import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './search-list.css';
import logo from '../../assets/giphy.gif'
import { Buttons } from '../../components/button/buttons';
import InputSearch from '../../components/search/inputSearch';
import { Link } from 'react-router-dom';
import LoadingTop from '../../components/loading/Loading';
import Modal from '../../components/modal/Modal';

const ListGifPage = () => {
  const [giphy, setGiphy] = useState([]);
  const [giphyS, setGiphyS] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [limit, setLimit] = useState(12);
  const [modal, setModal] = useState(false);

  const type = localStorage.getItem("type");

  const handleSearchChange = (input) => {
    setGiphyS(input.target.value)
  }

  const handleMore = (e) => {
    console.log(e);
    e.preventDefault();
    setLimit(limit + 6)
  }

  const handleModal = (e) => {
    localStorage.setItem("detail-gif", e.target.src)
    setModal(!modal);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    localStorage.setItem("type", giphyS)
    const url = `https://api.giphy.com/v1/gifs/search?q=${giphyS}&api_key=a71mivoEaiT0Ta1OSTNeAeRTH61Q6YJo&limit=${limit}`
    axios.get(url)
    .then(function(res) {
      console.log(res);
      setGiphy(res.data.data);
      setLoading(false);
    })
    .catch(function(err) {
      setError()
    })
  }
  
  useEffect(() => {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/search?q=${type}&api_key=a71mivoEaiT0Ta1OSTNeAeRTH61Q6YJo&limit=${limit}`;
    axios.get(url)
    .then(function (res) {
      setGiphy(res.data.data);
      setLoading(false);
    })
    .catch(function(err) {
      setError(true);
      setErrorMessage(err.message)
      setLoading(false);
    });
  }, [type, limit]);

  return (
    <section>
      {
        error ? (
          <div>{errorMessage}</div>
        ) : (
          <div>
            {loading && <LoadingTop />}
            <Link to="/">
              <div style={{padding: "2rem 0"}} className="logo-position">
                <img src={logo} className="logo" alt="logo" />
              </div>
            </Link>
            <h1 className="title">search your Giphy</h1>
            <form onSubmit={handleSubmit}>
              <InputSearch handleSearchChange={handleSearchChange} />
            </form>
            {loading ? null : (
              <div className="container">
                <div className="container-content">
                  <Modal handleClose={() => setModal(false)} show={modal} />
                  {giphy.map((item) => (
                    <div className="container-giphy" onClick={handleModal}>
                      <img src={item.images.original.url} alt="Giphy" className="giphy" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{display: 'flex', justifyContent:"center", paddingBottom: "2rem"}}>
              <Buttons onClick={handleMore} title="Search More Giphy" color="bg-blue" />
            </div>
          </div>
        )
      }
    </section>
  );
};

export default ListGifPage;