import Navbar from './ui/Navbar';
import MainContent from './ui/MainContent';
import Footer from './ui/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
