export const searchId = (array, id) => {
  return array.findIndex((element, index) => {
    if (element.id === id){
      return index;
    }
    else{
      return false;
    }
  });
}
