import React from 'react'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddClientModal from '../components/AddClientModal';

const Home = () => {
    return (
        <>
            <div className='flex justify-center gap-3 mb-4'>
                <AddClientModal />
            </div>
            <Projects />
            <Clients />
        </>
    )
}

export default Home