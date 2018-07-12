var recipies={};

Function
updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({object},{[key]:value})
}

Function
destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object
}
