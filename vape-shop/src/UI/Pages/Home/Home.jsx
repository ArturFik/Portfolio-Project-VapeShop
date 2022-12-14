import React from 'react';
import Heading from '../../Form/content/Heading';
import Catalog from '../../Form/content/catalog';
import scrollHeading from "../../../JavaScript/scrollHeading";

const Home = () => {
    return (
        <content>    
            <Heading/>   
            <Catalog/>
            <script src={scrollHeading}></script>
        </content>
    );
};

export default Home;
