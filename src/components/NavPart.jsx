import { useState } from 'react';
import { trips } from '../Trips';

function NavPart() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedParticipant, setSearchedParticipant] = useState(null);


    const handleSearch = () => {

        let foundParticipant = null;
        trips.forEach(trip => {
            const participant = trip.participants.find(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (participant) {
                foundParticipant = participant;
            }
        });

        setSearchedParticipant(foundParticipant);
    };

    return (
        <>
            <div className='page-container container'>
                <div className='mt-5'>
                    <div className="card text-center shadow-lg">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="true" href="#">PARTECIPANTI</a>
                                </li>

                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="container-fluid">
                                {/* search bar */}
                                <div className="d-flex mb-3">
                                    <input
                                        className="form-control me-2"
                                        value={searchTerm}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                        type="search"
                                        placeholder="Cerca partecipante..."
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-outline-primary" onClick={handleSearch}>Cerca</button>
                                </div>
                            </div>

                            {/* dettagli del partecipante */}
                            {searchedParticipant ? (
                                <div className="container m-3">
                                    <div className="alert alert-primary">
                                        <h5>Dettagli partecipante trovato:</h5>
                                        <p><strong>Nome:</strong> {searchedParticipant.name}</p>
                                        <p><strong>Email:</strong> {searchedParticipant.email}</p>
                                        <p><strong>Telefono:</strong> {searchedParticipant.phone}</p>
                                        <p><strong>Codice Fiscale:</strong> {searchedParticipant.fiscalCode}</p>
                                    </div>
                                </div>
                            ) : (
                                searchTerm && (
                                    <div className="alert alert-info">
                                        Nessun partecipante trovato per "{searchTerm}"
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NavPart;