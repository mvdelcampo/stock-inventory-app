/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import { Client, generateClient, GraphQLResult } from "aws-amplify/api";
import { Observable } from "rxjs";

export type __SubscriptionContainer = {
  onCreatePedido: OnCreatePedidoSubscription;
  onUpdatePedido: OnUpdatePedidoSubscription;
  onDeletePedido: OnDeletePedidoSubscription;
};

export type CreatePedidoInput = {
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type Pedido = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type UpdatePedidoInput = {
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type DeletePedidoInput = {
  Codigo: number;
};

export type TablePedidoFilterInput = {
  Codigo?: TableIntFilterInput | null;
  Empresa?: TableStringFilterInput | null;
  Estado?: TableStringFilterInput | null;
  Fecha?: TableStringFilterInput | null;
  Precio?: TableIntFilterInput | null;
};

export type TableIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type PedidoConnection = {
  __typename: "PedidoConnection";
  items?: Array<Pedido | null> | null;
  nextToken?: string | null;
};

export type CreatePedidoMutation = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type UpdatePedidoMutation = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type DeletePedidoMutation = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type GetPedidoQuery = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type ListPedidosQuery = {
  __typename: "PedidoConnection";
  items?: Array<{
    __typename: "Pedido";
    Codigo: number;
    Empresa?: string | null;
    Estado?: string | null;
    Fecha?: string | null;
    Precio?: number | null;
    Productos?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePedidoSubscription = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type OnUpdatePedidoSubscription = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

export type OnDeletePedidoSubscription = {
  __typename: "Pedido";
  Codigo: number;
  Empresa?: string | null;
  Estado?: string | null;
  Fecha?: string | null;
  Precio?: number | null;
  Productos?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  public client: Client;
  constructor() {
    this.client = generateClient();
  }
  async CreatePedido(input: CreatePedidoInput): Promise<CreatePedidoMutation> {
    const statement = `mutation CreatePedido($input: CreatePedidoInput!) {
        createPedido(input: $input) {
          __typename
          Codigo
          Empresa
          Estado
          Fecha
          Precio
          Productos
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <CreatePedidoMutation>response.data.createPedido;
  }
  async UpdatePedido(input: UpdatePedidoInput): Promise<UpdatePedidoMutation> {
    const statement = `mutation UpdatePedido($input: UpdatePedidoInput!) {
        updatePedido(input: $input) {
          __typename
          Codigo
          Empresa
          Estado
          Fecha
          Precio
          Productos
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <UpdatePedidoMutation>response.data.updatePedido;
  }
  async DeletePedido(input: DeletePedidoInput): Promise<DeletePedidoMutation> {
    const statement = `mutation DeletePedido($input: DeletePedidoInput!) {
        deletePedido(input: $input) {
          __typename
          Codigo
          Empresa
          Estado
          Fecha
          Precio
          Productos
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <DeletePedidoMutation>response.data.deletePedido;
  }
  async GetPedido(Codigo: number): Promise<GetPedidoQuery> {
    const statement = `query GetPedido($Codigo: Int!) {
        getPedido(Codigo: $Codigo) {
          __typename
          Codigo
          Empresa
          Estado
          Fecha
          Precio
          Productos
        }
      }`;
    const gqlAPIServiceArguments: any = {
      Codigo
    };
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <GetPedidoQuery>response.data.getPedido;
  }
  async ListPedidos(
    filter?: TablePedidoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPedidosQuery> {
    const statement = `query ListPedidos($filter: TablePedidoFilterInput, $limit: Int, $nextToken: String) {
        listPedidos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            Codigo
            Empresa
            Estado
            Fecha
            Precio
            Productos
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <ListPedidosQuery>response.data.listPedidos;
  }
  OnCreatePedidoListener(
    Codigo?: number,
    Empresa?: string,
    Estado?: string,
    Fecha?: string,
    Precio?: number
  ): Observable<
    GraphQLResult<Pick<__SubscriptionContainer, "onCreatePedido">>
  > {
    const statement = `subscription OnCreatePedido($Codigo: Int, $Empresa: String, $Estado: String, $Fecha: String, $Precio: Int) {
        onCreatePedido(
          Codigo: $Codigo
          Empresa: $Empresa
          Estado: $Estado
          Fecha: $Fecha
          Precio: $Precio
        ) {
          __typename
          Codigo
          Empresa
          Estado
          Fecha
          Precio
          Productos
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (Codigo) {
      gqlAPIServiceArguments.Codigo = Codigo;
    }
    if (Empresa) {
      gqlAPIServiceArguments.Empresa = Empresa;
    }
    if (Estado) {
      gqlAPIServiceArguments.Estado = Estado;
    }
    if (Fecha) {
      gqlAPIServiceArguments.Fecha = Fecha;
    }
    if (Precio) {
      gqlAPIServiceArguments.Precio = Precio;
    }
    return this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    }) as any;
  }

  OnUpdatePedidoListener(
    Codigo?: number,
    Empresa?: string,
    Estado?: string,
    Fecha?: string,
    Precio?: number
  ): Observable<
    GraphQLResult<Pick<__SubscriptionContainer, "onUpdatePedido">>
  > {
    const statement = `subscription OnUpdatePedido($Codigo: Int, $Empresa: String, $Estado: String, $Fecha: String, $Precio: Int) {
        onUpdatePedido(
          Codigo: $Codigo
          Empresa: $Empresa
          Estado: $Estado
          Fecha: $Fecha
          Precio: $Precio
        ) {
          __typename
          Codigo
          Empresa
          Estado
          Fecha
          Precio
          Productos
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (Codigo) {
      gqlAPIServiceArguments.Codigo = Codigo;
    }
    if (Empresa) {
      gqlAPIServiceArguments.Empresa = Empresa;
    }
    if (Estado) {
      gqlAPIServiceArguments.Estado = Estado;
    }
    if (Fecha) {
      gqlAPIServiceArguments.Fecha = Fecha;
    }
    if (Precio) {
      gqlAPIServiceArguments.Precio = Precio;
    }
    return this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    }) as any;
  }

  OnDeletePedidoListener(
    Codigo?: number,
    Empresa?: string,
    Estado?: string,
    Fecha?: string,
    Precio?: number
  ): Observable<
    GraphQLResult<Pick<__SubscriptionContainer, "onDeletePedido">>
  > {
    const statement = `subscription OnDeletePedido($Codigo: Int, $Empresa: String, $Estado: String, $Fecha: String, $Precio: Int) {
        onDeletePedido(
          Codigo: $Codigo
          Empresa: $Empresa
          Estado: $Estado
          Fecha: $Fecha
          Precio: $Precio
        ) {
          __typename
          Codigo
          Empresa
          Estado
          Fecha
          Precio
          Productos
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (Codigo) {
      gqlAPIServiceArguments.Codigo = Codigo;
    }
    if (Empresa) {
      gqlAPIServiceArguments.Empresa = Empresa;
    }
    if (Estado) {
      gqlAPIServiceArguments.Estado = Estado;
    }
    if (Fecha) {
      gqlAPIServiceArguments.Fecha = Fecha;
    }
    if (Precio) {
      gqlAPIServiceArguments.Precio = Precio;
    }
    return this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    }) as any;
  }
}
