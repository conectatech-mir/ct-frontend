import logo from "./logo.png";
import "./AsideLogo.css";

const AsideLogo = () => {
  return (
    <aside className="w-4/12">
      <div className="bg-gray-300 h-full py-40">
        <div className="imgContainer">
          <img src={logo} alt="Conectatech Logo" className="w-4/5 mx-auto" />
        </div>
        <h2 className="my-19.5 font-black conectatech">ConectaTech</h2>

        <p className="my-22 mx-auto w-4/5 frase">
          Cuanto más esperes en corregir un error, más costoso será arreglarlo
        </p>
      </div>
    </aside>
  );
};
export default AsideLogo;
