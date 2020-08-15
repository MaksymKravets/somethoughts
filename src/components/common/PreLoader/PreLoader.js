import React from 'react';
import preloader from '../../../assets/images/tail-spin.svg';
import s from './preloader.module.css'

const PreLoader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default PreLoader;