# App

GymPass style app

# RFs (Requisitos Funcionais)

- [ ] Cadastro;
- [ ] Autenticação;
- [ ] Obter perfil de usuário logado;
- [ ] Obter número de check-ins realizados pelo usuário logado;
- [ ] Usuário obter seu histórico de check-ins;
- [ ] Usuário buscar academias próximas;
- [ ] Usuário buscar academias pelo nome;
- [ ] Usuário realizar check-in em uma academia;
- [ ] Validar check-in de usuário;
- [ ] Cadastrar academia;

# RNs (Regras de Negócio)

- [ ] Não pode cadastrar e-mail duplicado;
- [ ] Não pode fazer 2 check-ins no mesmo dia;
- [ ] Não pode fazer check-in se não estiver perto da academia (100m);
- [ ] Só pode ser validado até 20 minutos após criado;
- [ ] Só pode ser validado por administradores;
- [ ] Academia só pode ser cadastrada por administradores;

# RNFs (Requisitos Não-Funcionais)

- [ ] Senha do usuário deve estar criptografada;
- [ ] Dados da aplicação precisam persistir em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas e com 20 itens por página;
- [ ] Usuário deve ser identificado por um JWT (JSON Web Token);