import './Header.css'
import Logo from './../../assets/src/assets/book.svg'

function Header(){
return(
    <header className='w-full p-3 bg-sky-400 flex justify-beetween'>
        <img src={Logo} />
     <h1>OI</h1>
     <a href='#'>HOME</a>
    </header>
  )
}

export default App