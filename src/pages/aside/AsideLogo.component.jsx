import logo from './logo.png'
import './AsideLogo.css'

const AsideLogo = ()=> {
  return(
    <aside className='w-4/12'>
      <div className='bg-gray-300 h-screen py-40'>
        <div className='imgContainer'>
          <img src={logo} alt='Conectatech Logo' className='w-4/5 mx-auto'/>
        </div>
        <p className='my-10 mx-auto w-4/5 frase'>
          Cuanto más esperes en corregir un error, más costoso será arreglarlo
        </p>
        <h2 className='my-20 font-black conectatech'>
          ConectaTech
        </h2>
      </div>
    </aside>
  );
}
export default AsideLogo;