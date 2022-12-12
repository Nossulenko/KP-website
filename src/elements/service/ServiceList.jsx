import React ,{ Component }from "react";
import { FiCode, FiBriefcase, FiCast , FiLayers , FiUsers , FiMonitor, FiSmartphone, FiActivity, FiFigma, FiEdit2 } from "react-icons/fi";

const ServiceList = [
   
    {
        icon: <FiCode />,
        title: 'Custom application development',
        description: 'Custom application development services provide strategy, transformation, implementation and management of any custom or packaged application, easing the burden on your IT resources.'
    },
    {
        icon: < FiMonitor/>,
        title: 'Full-scale web development',
        description: 'Custom website development services for small and medium sized businesses. We have rich experience and creativity in producing phenomenal websites and CMS development for different clients worldwide.'
    },
    {
        icon: < FiSmartphone/>,
        title: 'Mobile application development',
        description: 'full-cycle mobile app development to fit your business domain and budget requirements'
    },
    {
        icon: <FiActivity />,
        title: 'Full-cycle Testing & QA',
        description: 'We offer quality assurance and software testing services for all software types, including any PPAs or custom developed software deployed to any environment.'
    },
    {
        icon: <FiEdit2 />,
        title: 'UI/UX Design',
        description: 'We invest time in bringing order to your requirements and understanding what were about to design. With the help of our UI-UX services, this results in a simple and coherent product experience.'
    },
    {
        icon: <FiUsers />,
        title: 'Dedicated Development Team',
        description: 'Our dedicated software development team follows the client’s corporate culture and rules, as well as adopts its existing methodologies, technical resources, and tools.'
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
