import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Notification from './components/Notification';
import SideSection from './components/SideSection';

function App() {

  const NotificationData = [
    {
      topic: 'KULTTUURI',
      body: 'Nirvanan Lepakko-keikan peruuntumisesta joulukuussa 1991 löytyi uutta tietoa – myös nämä peruutukset ovat ikimuistoisia'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Ismo Alanko onnistui lopettamaan juomisen, kun lääkäri kertoi madonluvut'
    },
    {
      topic: 'MAINOS',
      body: 'Lunasta kaksi viikkoa maksutonta lukuaikaa!'
    },
  ];
  return (
    <div>
      <Header />
      {
        NotificationData.map(element => <Notification topic={ element.topic } body={ element.body } />)
      }
    
      <MainSection />
      <SideSection />
    </div>
  );
}

export default App;
