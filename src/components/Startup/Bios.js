import { useState, useEffect } from 'react';
import './Bios.scss';

export default function Bios(props) {
  const [bios, setBios] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setBios(168);
    }, 200);
    setTimeout(() => {
      setBios(372);
    }, 300);
    setTimeout(() => {
      setBios(964);
    }, 400);
    setTimeout(() => {
      setBios(1280);
    }, 500);
    setTimeout(() => {
      setBios(1678);
    }, 600);
    setTimeout(() => {
      setBios(1920);
    }, 700);
    setTimeout(() => {
      setBios(4068);
    }, 800);
    setTimeout(() => {
      setBios(8072);
    }, 900);
    setTimeout(() => {
      setBios(10024);
    }, 1000);
    setTimeout(() => {
      setBios(12216);
    }, 1100);
    setTimeout(() => {
      setBios(16768);
    }, 1200);
    setTimeout(() => {
      setBios(18464);
    }, 1300);
    setTimeout(() => {
      setBios(20024);
    }, 1400);
    setTimeout(() => {
      setBios(22256);
    }, 1500);
    setTimeout(() => {
      setBios(24768);
    }, 1600);
    setTimeout(() => {
      setBios(26024);
    }, 1700);
    setTimeout(() => {
      setBios(28966);
    }, 1800);
    setTimeout(() => {
      setBios(30056);
    }, 1900);
    setTimeout(() => {
      setBios(32768 + '   OK');
    }, 2000);
  }, []);

  return (
    <div className="bios-body">
      <div className="bios-container">
        <img alt="blue-logo" className="blue-logo" src="/img/logo2.png"></img>
        <img
          alt="energy-star"
          className="energy-star-logo"
          src="/img/energystar.png"
        ></img>
        <p className="bios-top-text">
          Award Modular BIOS v4.50PG, An Energy Star Ally
          <br />
          Copyright (C) 1984-1995, Award Software Inc.
          <br />
        </p>
        <p className="cpu-model">
          486API0, Rev 1.0
          <br />
          <br />
          80486DX2 CPU at 66MHz
          <br />
          Memory Test : {bios}
        </p>
        <p className="bios-extension">
          Award Plug and Play BIOS Extension v1.0A
          <br />
          Copyright (C) 1995, Award Software, Inc.
          <br />
          Detecting HDD Primary Master ...None
        </p>
        <p className="bios-bottom">
          Press <b className="highlight">F1</b> to continue,{' '}
          <b className="highlight">DEL</b> to enter{' '}
          <b className="highlight">SETUP</b>
          <br />
          08/16/95-ALI-1487-2A4KDE3HC-00
        </p>
      </div>
    </div>
  );
}
