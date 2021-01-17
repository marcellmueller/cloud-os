import './Desktop.scss';
import { Rnd } from 'react-rnd';
import Window from './Window';

export default function Home(props) {
  const toggle = () => {
    props.setState({ showMenu: false });
  };
  return (
    <div
      className="desktop"
      onClick={toggle}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 500,
          height: 190,
        }}
        minWidth={500}
        minHeight={420}
        bounds="window"
      >
        <Window></Window>
      </Rnd>
    </div>
  );
}
