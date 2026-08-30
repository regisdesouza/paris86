import styles from '../style.module.css';

export function Cabecalho() {
  return (
    <div className={styles.cabecalhoTitulo}>
      <span>Melhor restaurante do mundo!</span>
      <h1>Paris 86 - Cozinha viva</h1>
      <p>
        Escolha um prato do cardápio ou monte o seu. 
      </p>
    </div>
  );
}