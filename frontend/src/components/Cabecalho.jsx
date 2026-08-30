import styles from '../style.module.css';

export function Cabecalho() {
  return (
    <div className={styles.titulo}>
      <span>Melhor restaurante do mudno!</span>
      <h1>Paris 86 - Cozinha viva</h1>
      <p>
        Escolha um prato do cardápio ou monte o seu. A comanda mostra o
        equilíbrio nutricional, valor e nota do cliente em tempo real
      </p>
    </div>
  );
}

