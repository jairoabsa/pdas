import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);

function App(){
    return(
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistants</p>
                </div>
            </section>

{/*
            //adding the image by this way won't be the correct way
            <img src={AlexaImage}/>
            <img src={SiriImage}/>
            //The correct way is adding the image in the props directly 
*/}
            <div className='container'>
                <div className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                        <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage}
                            description="Alexa was created by Amazon and helps you buy things." />
                    </div>
                    <div className='column is-4'>
                        <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            description="Cortana was made by Microsoft. Who knows what it does?" />
                        </div>
                    <div className='column is-4'>
                        <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImage}
                            description="Siri was made by Apple and is being phased out" />
                        </div>
                    </div>  
                </div>
            </div>          
        </div>
    );
}

export default App;
