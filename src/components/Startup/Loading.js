import { useState, useEffect } from 'react';
import './Loading.scss';
import { boot1 } from './Startup';
export default function Loading(props) {
  const [boot, setBoot] = useState({
    boot1: false,
    boot2: false,
    boot3: false,
    boot4: false,
    boot5: false,
    boot6: false,
    boot7: false,
    boot8: false,
    boot9: false,
    boot10: false,
    boot11: false,
    boot12: false,
  });
  const bootlogs = (
    <>
      {[
        boot.boot1 ? (
          <div>
            {boot1[0]}
            <br />
          </div>
        ) : null,
        boot.boot2 ? (
          <div>
            {boot1[1]}
            <br />
          </div>
        ) : null,
        boot.boot3 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot4 ? (
          <div>
            {boot1[3]}
            <br />
          </div>
        ) : null,
        boot.boot5 ? (
          <div>
            {boot1[4]}
            <br />
          </div>
        ) : null,
        boot.boot6 ? (
          <div>
            {boot1[5]}
            <br />
          </div>
        ) : null,
        boot.boot7 ? (
          <div>
            {boot1[6]}
            <br />
          </div>
        ) : null,
        boot.boot8 ? (
          <div>
            {boot1[7]}
            <br />
          </div>
        ) : null,
        boot.boot9 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot10 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot11 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot12 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot13 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot14 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot15 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot16 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot17 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot18 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot19 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot20 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot21 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot22 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot23 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot24 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot25 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot26 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
        boot.boot27 ? (
          <div>
            {boot1[2]}
            <br />
          </div>
        ) : null,
      ]}
    </>
  );

  useEffect(() => {
    setTimeout(() => {
      setBoot({
        ...boot,
        boot1: true,
      });
    }, 100);
    setTimeout(() => {
      setBoot({
        ...boot,
        boot2: true,
      });
    }, 150);
    setTimeout(() => {
      setBoot({
        ...boot,
        boot3: true,
      });
    }, 200);
  }, []);
  return (
    <div className="loading">
      <div className="loading-container">{bootlogs}</div>
    </div>
  );
}
