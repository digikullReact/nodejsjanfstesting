function sum(a, b) {
    return a + b;
  }


  function loweCaseString(str){

    return str.toLowerCase();

  }

  function upperCaseString(str){

    return str.toUpperCase();

  }

  function testInArray(arra){
    

    return arra.map(ele=>ele.toUpperCase());

  }

  /// expect(new Set(shoppingList)).toContain('milk');

  //console.log(sum(2,3));
  module.exports = {
    sum,
    loweCaseString,
    upperCaseString,
    testInArray

  }