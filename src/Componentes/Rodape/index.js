 
import "./Rodape.css" 
import instagram from "../../img/instagram.png"
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import organo from "../../img/organo.png"
import alura from "../../img/alura.png"
 
const Rodape = ( ) => {
    return (
        <footer className="rodape"> 
            <ul className="rodape__lista">
                <li className="rodape__itens rodape__itens--facebook"><a target="_blank" href="https://github.com/matheuscassioli"><img src={facebook} /></a></li>
                <li className="rodape__itens rodape__itens--twitter"><a target="_blank" href="https://github.com/matheuscassioli"><img src={twitter} /></a></li>
                <li className="rodape__itens rodape__itens--instagram"><a target="_blank" href="https://github.com/matheuscassioli"><img src={instagram} /></a></li> 
            </ul>
            <div className="rodape__organo"><a target="_blank" href="https://www.alura.com.br/"><img src={organo}/></a></div>
            <div className="rodape__dev"><a target="_blank" href="https://www.alura.com.br/"><img src={alura}/></a></div>
        </footer>
    )
}

export default Rodape;