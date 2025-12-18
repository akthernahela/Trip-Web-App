import { useState } from 'react'
import Header from './components/Header'
import TripListOn from './TripListOn'
import Footer from './components/Footer'
import NewTrip from './components/NewTrip'
import SingleTripCard from './components/SingleTripCard'
import NavPart from './components/NavPart'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewTrip = (trip) => {
    setSelectedTrip(trip);
    setCurrentPage('singleTrip');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
  };
  const handleBackToHome = () => {
    setSearchTerm('');
    setCurrentPage('home');
    setSelectedTrip(null);
  };

  return (
    <>

      <Header onNavigate={setCurrentPage} onSearch={handleSearch} />
      {currentPage === 'home' && <TripListOn onViewTrip={handleViewTrip} searchTerm={searchTerm} handleBackToHome={handleBackToHome} />}
      {currentPage === 'newTrip' && <NewTrip />}
      {currentPage === 'navPart' && <NavPart />}
      {currentPage === 'singleTrip' && selectedTrip && <SingleTripCard trip={selectedTrip} />}
      <Footer />


    </>
  )
}

export default App
