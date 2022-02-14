import "../../css/Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div>&copy; {new Date().getFullYear()} Copyright </div>
            <a href="https://www.linkedin.com/in/mariel-cecilia-romeo/" target="_blank" rel="noreferrer"> Mariel Cecilia Romeo </a>
        </footer>
    )
}
