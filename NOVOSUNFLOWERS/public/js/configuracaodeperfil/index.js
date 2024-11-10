function hasToken(){

    const token = localStorage.getItem('id')
    if(token){
      console.log('token')
    }else {
      window.location.replace('/PaginaInicial')
      console.log(' nao token')
    }
  }