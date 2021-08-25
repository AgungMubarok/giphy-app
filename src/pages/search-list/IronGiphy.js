import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './search-list.css';
import logo from '../../assets/giphy.gif'
import { Buttons } from '../../components/button/buttons';
import { Link, useHistory } from 'react-router-dom';
import LoadingTop from '../../components/loading/Loading';
import Modal from '../../components/modal/Modal';

const GiphyIron = () => {
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [modal, setModal] = useState(false);

  const history = useHistory();

  const handleModal = (e) => {
    localStorage.setItem("detail-gif", e.target.src)
    setModal(!modal);
  }

  const handleSearchMore = () => {
    localStorage.setItem("type", "all");
    history.push("/search-giphy")
  }
  
  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?q=iron-man&api_key=a71mivoEaiT0Ta1OSTNeAeRTH61Q6YJo&limit=12`;
    axios.get(url)
    .then(function (result) {
      console.log(result.data.data)
      setGiphy(result.data.data);
      setLoading(false);
    })
    .catch(function(error) {
      setError(true);
      console.log(error.message)
      setErrorMessage(error.message)
      setLoading(false);
    });
  }, []);

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
            <h1 className="title">Iron Man Giphy</h1>
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
              <Buttons onClick={handleSearchMore} title="Search More Giphy" color="bg-blue" />
            </div>
          </div>
        )
      }
    </section>
  );
};

export default GiphyIron;