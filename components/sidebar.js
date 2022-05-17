import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="
        fixed
        top-0
        left-0
        h-screen
        w-16
        m-0
        flex
        flex-col
        bg-primary
        text-secondary
        shadow-lg
        " >

            <SideBarIcon icon={<FaFire size="28" />} />

        </div>
    )
}

const SideBarIcon = ({ icon }) => {
    return (
        <div className="sidebar-icon">
            {icon}
        </div>
    )
}

export default SideBar