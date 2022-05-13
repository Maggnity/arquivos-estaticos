import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type IOopcao = typeof filtros[0];

function Filtros() {
    function selecionarFiltro(opcao: IOopcao) {}
    
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    type='button'
                    className={styles.filtros__filtro} 
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}

export default Filtros