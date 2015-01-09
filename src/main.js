function Jogador(){
	var pontuacao = 0;
	var nJogosGanhos = 0;
	var vantagem = 0;

  this.getPontuacao = function() {
    return pontuacao;
  };

  this.pontuar = function() {
    if(pontuacao < 30) {
      pontuacao += 15;
    } else if(pontuacao == 30) {
      pontuacao += 10;
    }
  };


  this.getJogosGanhos=function(){
    return nJogosGanhos;
  };

  this.setJogosGanhos=function(njogos){
    nJogosGanhos=njogos;
  };

  this.getVantagem=function(){
    return vantagem;
  };

  this.setVantagem=function(vant){
    vantagem=vant;
  };

  this.setPontuacao=function(pont){
    pontuacao=pont;
  };
}

function Jogo() {
	this.jogador1 = new Jogador();
	this.jogador2 = new Jogador();

  this.ganhouJogo = function() {
    if(this.jogador1.getPontuacao() == 40 && this.jogador2.getPontuacao()<40) {
        this.jogador1.setJogosGanhos(this.jogador1.getJogosGanhos()+1);
        this.zerar();
    }
    else if(this.jogador2.getPontuacao() == 40 && this.jogador1.getPontuacao()<40) {
        this.jogador2.setJogosGanhos(this.jogador2.getJogosGanhos()+1);
        this.zerar();
    }

  };


  this.pontuarJogador = function(numeroJogador) {
    if(this.getEmpate()) {
      if(numeroJogador == 1) {
        this.jogador1.setVantagem(this.jogador1.getVantagem()+1);  
      }
      
      else if(numeroJogador == 2) {
        this.jogador2.setVantagem(this.jogador2.getVantagem()+1);
      }
    }

    else {
      if(numeroJogador == 1) {
        this.jogador1.pontuar();
      }

      else if(numeroJogador == 2) {
        this.jogador2.pontuar();
      }
    }

    this.ganhouJogo();
  };

  this.zerar=function(){
    this.jogador1.setPontuacao(0);
    this.jogador2.setPontuacao(0);
    this.jogador1.setVantagem(0);
    this.jogador2.setVantagem(0);
  };

  this.getEmpate = function() {
    if (this.jogador1.getPontuacao() == 40 && this.jogador2.getPontuacao() == 40) {
      if (this.jogador1.getVantagem() == 1 && this.jogador2.getVantagem() == 1){
          this.jogador1.setVantagem(0);
          this.jogador2.setVantagem(0);
        }

        return true;
      }
    
    else {
      return false;
    }
  };
}