import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>
        </div>
    );
};

export default CreatePoint;