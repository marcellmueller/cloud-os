import './System.scss';

export default function System(props) {
  return (
    <div className="system-tab">
      <h1>
        <b>CPU: </b>Intel 80486DX2{' '}
      </h1>
      <h1>
        <b>RAM: </b>32768k
      </h1>
      <h1>
        <b>DISK SPACE: </b>
        <br />
        <b>TOTAL: </b>512MB
        <br />
        <b>REMAINING: </b>472MB
      </h1>
      <h1>
        <b>SOUND CARD: </b>SOUND BLASTER AWE32
      </h1>
    </div>
  );
}
