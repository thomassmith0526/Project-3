import { useState, useEffect } from 'react';
import '../PlantInfo/PlantInfo.css';


const PlantInfo = () => {
    const [plant, setPlant] = useState([]);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const res = await fetch('https://perenual.com/api/species-list?key=sk-hjux66ef51ce55fd36940');
                const data = await res.json();
                console.log(data);

                setPlant(data);
            }   catch (error) {
                console.log('Error fetching data', error);
            };
        };

        fetchPlants();
    }, []);

    useEffect(() => {
        console.log(plant);
    }, [plant]);

    return (
        <>
        <div className='wrapper'>
            <header className='header'>
                <h1>The Plant 411</h1></header>

                <article className='main'>
                    <div className='plantimage'>Image of plant goes in this div.  
                    </div>
                    <div className='plantname'>
                        <h2>Plant Name</h2>
                        <div>Name: {plant[0].common_name } `${plant[0].common_name}`</div>
                            
                    </div>
                </article>

                <article className='secondary'>
                    <div id='plantcare'>information regarding sun exposure, types of fertilizer needed, soil type and watering in this div</div>
                </article>

                <article className='third'>
                    <div id='propagation'>Information regarding growth rate, propagation and toxicity safety levels in this div.</div>
                </article>

                <aside className='aside aside-1'>
                    <div id='zoning'>Zoning area information in this div. Maybe an image of a zone number</div>
                </aside>

                <aside className='aside aside-2'>
                    <div id='native'>Native area information goes in this div</div>
                </aside>

                <footer className='footer'>
                    <h4>Made with ❤️ by Group 1</h4>
                    <h5>Josh, Crystal, Thomas, Miranda, Cesar, Sunny</h5>
                </footer>
        </div>
        </>
    );
};

export default PlantInfo;