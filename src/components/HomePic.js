import { render } from "@testing-library/react";
import React from "react";

const styles = {
    homeImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "url('https://www.vasa.org.uk/site-content/uploads/2018/07/web-in-development.jpg')no-repeat center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,.27)",
        backgroundBlendMode: "multiply",
        backgroundAttachment: "fixed",
        animation: "5s both",
        animationDuration: "5s",
        animationTimingFunction: "ease",
        animationDelay: "0s",
        animationIterationCount: "1",
        animationDirection: "normal",
        animationFillMode: "both",
        animationPlayState: "running",
        animationName: "bg-pan-top",
        height: "100vh",
        width: "100%"
    },
    pStyle: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        fontSize: "3em"
    }
};

function HomePic() {
    return (
        <section style={styles.homeImage}>
            <div>
                <p style={styles.pStyle}>MATTHEW <span style={{color: "#38b09a", marginLeft: "1rem"}}> ROGERS</span></p>
                <p style={styles.pStyle}><span style={{color: "#38b09a", marginRight: "1rem"}}>Full Stack</span> Web Developer</p>
            </div>
        </section >
    );
};

export default HomePic;