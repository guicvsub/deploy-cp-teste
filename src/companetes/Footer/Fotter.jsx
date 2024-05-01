
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {



    return (
      <>
       
       <div className="flex flex-col ">
    <main className="flex-grow">
   
    </main>
    <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
        <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />

        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <FaLinkedin size={30}/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram  size={30}/>
        </a>
      
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={30}/>
        </a>
    </div>
            <p>&copy; todos os diretos reservados equipe timao.</p>
        </div>
    </footer>
</div>
        
    
      </>
    )
  }
  
  export default Footer