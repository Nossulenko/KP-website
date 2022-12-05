import React ,{ Component }from "react";
import { FiCode, FiBriefcase, FiCast , FiLayers , FiUsers , FiMonitor, FiSmartphone, FiActivity, FiFigma, FiEdit2 } from "react-icons/fi";

const ServiceList = [
   
    {
        icon: <FiCode />,
        title: 'Custom application development',
        description: 'Custom software development services for small and medium sized businesses.'
    },
    {
        icon: < FiMonitor/>,
        title: 'Web development',
        description: 'Custom website development services for small and medium sized businesses.'
    },
    {
        icon: < FiSmartphone/>,
        title: 'Mobile application development',
        description: 'Support for all your software development needs.'
    },
    {
        icon: <FiActivity />,
        title: 'Software Testing & QA',
        description: 'Support for all your software development needs.'
    },
    {
        icon: <FiEdit2 />,
        title: 'UI/UX Design',
        description: 'Support for all your software development needs.'
    },
    {
        icon: <FiUsers />,
        title: 'Dedicated Development Team',
        description: 'Support for all your software development needs.'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
