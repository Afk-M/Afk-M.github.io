import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Projects: React.FC = () => {
    return (
        <div>
            <div id="projectsGrid">
                <div className="projectItem">
                    <FontAwesomeIcon icon={faPython} />
                    <div className="projectItemContent"><a href="https://mattni-imdb-tv.streamlit.app/">IMDb Visualizer (Python)</a></div>
                </div>
                {/* <div className="projectItem">
                    <FontAwesomeIcon icon={faReact} />
                    <div className="projectItemContent"><a href="">IMDb Visualizer (React)</a></div>
                </div>
                <div className="projectItem">
                    <FontAwesomeIcon icon={faReact} /> + <FontAwesomeIcon icon={faDatabase} /> + <FontAwesomeIcon icon={faDocker} />
                    <div className="projectItemContent"><a href="">Containerized Website Guestbook</a></div>
                </div>
                <div className="projectItem">
                    <FontAwesomeIcon icon={faChartLine} />
                    <div className="projectItemContent"><a href="">Breast Cancer ML Analysis</a></div>
                </div>
                <div className="projectItem">
                    <FontAwesomeIcon icon={faPython} /> + <FontAwesomeIcon icon={faDatabase} />
                    <div className="projectItemContent"><a href="">ETL Pipeline</a></div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;
