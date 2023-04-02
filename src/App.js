import React from 'react';
import './App.css';
import image from "./IMG 3.jpeg"

class App extends React.Component {
 
    state = {
      person: {
        fullName: 'Baki Juniors',
        bio : 'Ceo of JlionWears',
        imgSrc: image,
        profession : 'Software Developer',
      },
      Show: 'true',
      mountTime : null,
      intervalId: null
    };

    componentDidMount() {
      this.setState({
        mountTime: Date.now(),
        intervalId: setInterval(() => this.forceUpdate(), 1000)
      });
    }
  
    componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }
    



  render (){
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows } = this.state;

    return (
      <div>
        <div className='inner'>
           <button onClick={() => this.setState({ shows: !shows })}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt="Luxury Hoodie" style={{width : 200, height : 200}}/>
            <p><strong>Bio</strong> : {bio}</p>
            <p><strong>Profession: </strong>{profession} </p>
          </div>
        )}
          {this.state.mountTime && (
          <p>Component mounted {Math.round((Date.now() - this.state.mountTime) / 1000)} seconds ago.</p>
        )}
        </div>
       
      </div>
    );
  }
 
}

export default App;
