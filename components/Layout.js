import Navbar from '../components/navbar'

export default function Layout({ children }) {
    return(
        <>  
            <Navbar />
            <main className="mt-16"> {children} </main>
        </>
    )
}