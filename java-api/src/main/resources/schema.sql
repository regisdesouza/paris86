CREATE TABLE cardapio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emote VARCHAR(10) NOT NULL,
    prato VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE comanda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_prato VARCHAR(100) NOT NULL,
    carboidrato_id INT,
    proteina_id INT,
    vegetal_id INT,
    gordura_id INT,
    tempero_id INT,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'EM PREPARO',
    FOREIGN KEY (carboidrato_id) REFERENCES ingredientes(id),
    FOREIGN KEY (proteina_id) REFERENCES ingredientes(id),
    FOREIGN KEY (vegetal_id) REFERENCES ingredientes(id),
    FOREIGN KEY (gordura_id) REFERENCES ingredientes(id),
    FOREIGN KEY (tempero_id) REFERENCES ingredientes(id)
);

INSERT INTO ingredientes (nome, categoria, preco) VALUES
    ('Arroz integral', 'carboidrato', 4.50),
    ('Batata doce', 'carboidrato', 5.00),
    ('Quinoa', 'carboidrato', 6.50),
    ('Macarrão', 'carboidrato', 4.00),
    ('Frango grelhado', 'proteina', 12.00),
    ('Tofu', 'proteina', 9.50),
    ('Carne magra', 'proteina', 14.00),
    ('Ovo', 'proteina', 5.00),
    ('Brócolis', 'vegetal', 3.50),
    ('Salada verde', 'vegetal', 3.00),
    ('Cenoura', 'vegetal', 2.50),
    ('Espinafre', 'vegetal', 3.50),
    ('Azeite', 'gordura', 2.00),
    ('Abacate', 'gordura', 4.50),
    ('Castanhas', 'gordura', 5.50),
    ('Queijo', 'gordura', 4.00),
    ('Ervas finas', 'tempero', 1.00),
    ('Limão', 'tempero', 1.00),
    ('Pimenta', 'tempero', 1.00),
    ('Molho shoyu', 'tempero', 1.50);

INSERT INTO cardapio (emote, prato, descricao, preco) VALUES
('🥗', 'Bowl do Chef', 'Quinoa, frango grelhado e brócolis no azeite.', 25.00),
('🌱', 'Prato Fitness', 'Batata doce, tofu e espinafre com abacate.', 23.50),
('🍖', 'Clássico da Casa', 'Arroz integral, carne magra e cenoura no queijo.', 26.00),
('🌿', 'Vegano Zen', 'Quinoa, tofu e salada verde com castanhas.', 25.50);