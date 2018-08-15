class game {
  constructor (white, black, result, moves){
    this._white = white;
    this._black = black;
    this._result = result;
    this._moves = moves;
  }

get white(){
  return this._white
}
set white(white){
  this._white = white
}
get black(){
  return this._black
}
set black(black){
  this._black = black
}
get result(){
  return this._result
}
set result(result){
  this._result = result
}
get moves(){
  return this._moves
}
set moves(moves){
  this._moves = moves
}
}