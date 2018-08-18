'use strict';
class serie {
    constructor (name,episodes,genre){
      this._name = name;
      this._episodes = episodes;
      this._genre = genre;
    }
  
  get name(){
    return this._name
  }
  set name(name){
    this._name = name
  }
  get episodes(){
    return this._episodes
  }
  set episodes(episodes){
    this._episodes = episodes
  }
  get genre(){
    return this._genre
  }
  set genre(genre){
    this._genre = genre
  }
  }