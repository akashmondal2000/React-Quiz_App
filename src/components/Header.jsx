import headerLogo from '../assets/quiz-logo.png'

const Header = () => {
  return (
    <header>
        <img src={headerLogo} alt="Quiz-logo" />
        <h1> React Quiz App</h1>
    </header>
  )
}

export default Header