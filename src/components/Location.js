
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


const Location = () =>{
    return(
        <>
            <Nav></Nav>
            <section className="contact text-center">
                <h1>Location</h1>
                <div className="map container mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42350.58908432542!2d104.87953183601782!3d11.549819221810512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1674487077238!5m2!1sen!2skh"
                    width="1200" 
                    height="490" 
                    style={{border:0}} 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="map"></iframe>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}

export default Location;