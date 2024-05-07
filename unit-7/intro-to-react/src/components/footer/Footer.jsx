function Footer() {

    const currentYear = new Date().getFullYear();

    return(
        <h6>Copyright {currentYear} &copy;</h6>
    )
}

export default Footer;