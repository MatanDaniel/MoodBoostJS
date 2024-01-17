import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
      <div>
        <p className='Title'>MoodBoost: Your daily boost of music</p>
        <p className='Explain'>Hiya, and welcome to MoodBoost!<br />
        Moodboost is a music player that wants to boost your morale and help to improve your mood throughout the day!<br />
        Both designers, Rahamim Ram Eliyaou and Matan Daniel have made this application in order to spread good emotion or good "vibes"<br />
        to help people in these trying times, and what better to effect a person's mood with music?<br />
        Feel free to sign up to the app or log in if you already have an account and we can get your MoodBoost started!
        </p>
      </div>
      <div className='buttons'>
          <Button variant='contained'>Login</Button> <Button variant='contained' color='secondary'>Sign up</Button>
      </div>
    </>
  );
}

export default App;
