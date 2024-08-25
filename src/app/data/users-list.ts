import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
  {
    "nome": "João Silva",
    "email": "joao.silva@teste.com",
    "senha": "senha-segura-123",
    "idade": 30,
    "endereco": {
      "rua": "Rua do Bairro",
      "numero": 42,
      "cidade": "São Paulo",
      "estado": "SP",
      "pais": "Brasil",
    },
    "telefone": "11985741452",
    "ativo": true,
    "funcao": "Motorista",
    "dataCadastro": "2022-08-01T09:00:00.000Z",
    "status": {
      "online": true,
      "verificado": true,
      "assinaturaAtiva": true,
      "ultimoAcesso": "2023-08-02T09:00:00.000Z",
    }
  },
  {
    "nome": "Danilo Ferraz",
    "email": "danilo.ferraz@teste.com",
    "senha": "senha-segura-200",
    "idade": 54,
    "endereco": {
      "rua": "Rua do Cardeiro",
      "numero": 968,
      "cidade": "Guarulhos",
      "estado": "SP",
      "pais": "Brasil",
    },
    "telefone": "11963524174",
    "ativo": true,
    "funcao": "Garí",
    "dataCadastro": "2020-06-23T10:00:00.000Z",
    "status": {
      "online": true,
      "verificado": true,
      "assinaturaAtiva": true,
      "ultimoAcesso": "2021-05-22T23:00:00.000Z",
    }
  },
  {
    "nome": "Bia Guimarães",
    "email": "bia.guimaraes@teste.com",
    "senha": "senha-segura-963",
    "idade": 47,
    "endereco": {
      "rua": "Rua do Colégio",
      "numero": 852,
      "cidade": "Osasco",
      "estado": "SP",
      "pais": "Brasil",
    },
    "telefone": "11974859636",
    "ativo": true,
    "funcao": "Vendedora",
    "dataCadastro": "2020-01-25T21:06:00.000Z",
    "status": {
      "online": true,
      "verificado": true,
      "assinaturaAtiva": true,
      "ultimoAcesso": "2022-10-22T05:45:00.000Z",
    }
  },
  {
    "nome": "Joana Paes",
    "email": "joana.paes@teste.com",
    "senha": "senha-segura-028",
    "idade": 30,
    "endereco": {
      "rua": "Rua do Bosque",
      "numero": 1582,
      "cidade": "Jacarei",
      "estado": "SP",
      "pais": "Brasil",
    },
    "telefone": "11985140269",
    "ativo": true,
    "funcao": "Publicitária",
    "dataCadastro": "2005-12-15T03:50:00.000Z",
    "status": {
      "online": true,
      "verificado": true,
      "assinaturaAtiva": true,
      "ultimoAcesso": "2008-11-19T02:20:00.000Z",
    }
  },
]