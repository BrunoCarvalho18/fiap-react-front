const ApiService ={

    CriarParceiro: parceiro =>{
       return fetch("http://localhost:8082/api/v2/parceiros", {method: 'POST', headers: {'content-type': 'application/json'}, body: parceiro})
       .then(res=> ApiService.TrataErros(res))
       .then(res => res.json());
    },

    CriarCustomer: customer=>{
    return fetch("http://localhost:8080/api/v1/clientes", {method: 'POST', headers: {'content-type': 'application/json'}, body: customer})
       .then(res=> ApiService.TrataErros(res))
       .then(res => res.json());
    },


    TrataErros: res =>{
        if(!res.ok){
            throw Error(res.responseText);
        }
        return res;
    }

}


export default ApiService;