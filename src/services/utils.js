export const fetchRequest =  (endp) => fetch(endp)
    .then(response => 
      response.json()
    );