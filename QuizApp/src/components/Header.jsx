import logoImg from '../assets/quiz-logo.png';

function Header() {
    return (
        <header>
            {
                <img
                    src={logoImg}
                    alt='QuizLogo'
                />
            }
            <h1> ReactQuizz</h1>
        </header>
    );
}

export default Header;
