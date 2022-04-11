import logo from './logo.png'
import './AsideLogo.css'

const AsideLogo = ()=> {
  return(
    <aside className='w-4/12'>
      <div className='bg-gray-300 h-screen py-40'>
        <div className='imgContainer'>
          <img src={logo} alt='Conectatech Logo' className='w-4/5 mx-auto'/>
        </div>
        <h1 className='my-16 mx-auto w-4/10 frase'>
          Cuanto más esperes en corregir un error, 
          <br/>más costoso será arreglarlo.
       

          </h1>
      
      </div>
    </aside>
  );
}
export default AsideLogo;