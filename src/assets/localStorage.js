export const CreateLocalStore = ()=>{

   const createLocalStorage = localStorage.setItem('myHeroes','[]')

    return createLocalStorage;
  
}

export const GetLocalStore = ()=>{
   
   const getLocalStorage = localStorage.getItem('myHeroes')

   return getLocalStorage;
}

export const setFavorite = (item)=>{
  var previousData = JSON.parse(localStorage.getItem('myHeroes'))
  previousData.push(item)
  localStorage.setItem('myHeroes',JSON.stringify(previousData))
}

export const unsetFavorite = (item)=>{
  var previousData = JSON.parse(localStorage.getItem('myHeroes'))
  var firstElement = previousData[0]
  var lastElement = previousData.pop()

  if(firstElement===lastElement){
    localStorage.setItem('myHeroes','[]')
    
  }else if(JSON.stringify(item)===JSON.stringify(lastElement)){
    localStorage.setItem('myHeroes',localStorage.getItem('myHeroes').replace(','+JSON.stringify(item),''))
  }
  else{
    localStorage.setItem('myHeroes',localStorage.getItem('myHeroes').replace(JSON.stringify(item)+',',''))
  }
}