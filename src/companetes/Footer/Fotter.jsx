import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="flex flex-col">
                <main className="flex-grow"></main>
                <footer className="bg-black text-white py-4">
                    <div className="container mx-auto text-center">
                        <div className="flex justify-center space-x-5">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} />
                            </a>
                        </div>
                        <p>&copy; todos os direitos reservados equipe timao.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;
