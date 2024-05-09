import './Footer.css'; // Importing CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h5>Todo List App</h5>
                <p>&copy; 2024 Todo List App</p>
                <ul>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;