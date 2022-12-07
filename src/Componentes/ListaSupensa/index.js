import "./ListaSupensa.css"

const ListaSupensa = (props) => {

    return (

        <div className="listasuspensa">
            <label className="listasuspensa">{props.label}</label>
            
            <select  onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
               <option value={''}></option>
                {props.itens.map(item =>
                    <option key={item}>{item}</option>)}
            </select>
        
        </div>

    )

} 

export default ListaSupensa