import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQEkyeofIROdDg/profile-displaybackgroundimage-shrink_350_1400/0/1668658888418?e=1674086400&v=beta&t=U8emQl1ks3HpjROedRK-guWDHUP6enpYEt3-vqOGUAk"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Martin Olague</h2>
        <h4>martin.olague@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
