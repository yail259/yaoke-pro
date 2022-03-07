import { BsVectorPen } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi'

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">                    
        <SideBarIcon icon={<FaFire size="28" />} text="home"  />
        <Divider />
        <SideBarIcon icon={<HiDesktopComputer size="32"/>} text="programming"/>
        <SideBarIcon icon={<BsVectorPen size="20" />} text="blog" />
      </div>
    </div>    
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;