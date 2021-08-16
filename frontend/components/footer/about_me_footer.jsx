import React from 'react'

class AboutMeFooter extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="about-me-container">

                    <div className="footer-about">
                        <p className="footer-title">About Me</p>
                        <div className="about-links">
                            <div className="about-link">
                                <a href="https://github.com/taihuynh812" target="_blank">Github</a>
                            </div>
                            <div className="about-link">
                                <a href="https://angel.co/u/tai-huynh-7" target="_blank">AngelList</a>
                            </div>
                            <div className="about-link">
                                <a href="https://www.linkedin.com/in/tai-huynh-35934664/" target="_blank">LinkedIn</a>
                            </div>
                        </div> 
                    </div>

                    <div className="footer-about">
                        <p className="footer-title">Projects</p>
                        <div className="about-links">
                            <div className="about-link">
                                <a href="https://github.com/taihuynh812/TendiesScraper" target="_blank">TendiesScraper</a>
                            </div>
                            <div className="about-link">
                                <a href="https://github.com/huangs2022672/Asked-and-Answered" target="_blank">Asked & Answered</a>
                            </div>
                            <div className="about-link">
                                <a href="https://github.com/taihuynh812/Yupit" target="_blank">Yupit</a>
                            </div>
                        </div> 
                    </div>

                </div>

                <div>
                    <img className="footer-image" src={window.yelpFooter} />
                </div>
            </div>
        )
    }
}

export default AboutMeFooter