import { useEffect } from 'react';
import './Open.scss';
import OpenItem from './OpenItem';

export default function UserList(props) {
  const openApps = props.state.openApps;
  let mapApps;
  if (openApps.length !== -1) {
    mapApps = openApps.map((app, index) => {
      return (
        <OpenItem
          key={index}
          name={openApps[index]}
          state={props.state}
          setState={props.setState}
        />
      );
    });
  }

  return <div className="open-apps">{mapApps}</div>;
}
