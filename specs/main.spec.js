describe("tenis", function() {
	  var jogo = new Jogo();
	  beforeEach(function(){
	  	jogo = new Jogo();
	 
	  });
	  it("zerar deve colocar 0", function() {
	  	jogo.pontuarJogador(1);
	    jogo.pontuarJogador(2);
	    jogo.zerar();
	    expect(jogo.jogador1.getPontuacao()).toBe(0);
	    expect(jogo.jogador2.getPontuacao()).toBe(0);
	  });
	  it("O jogo deve comecar com 0 0", function() {
	    expect(jogo.jogador1.getPontuacao()).toBe(0);
	    expect(jogo.jogador2.getPontuacao()).toBe(0);
	  });

	  it("O jogador 1 pontua e fica 15 0", function() {
	    jogo.pontuarJogador(1);
	    expect(jogo.jogador1.getPontuacao()).toBe(15);
	    expect(jogo.jogador2.getPontuacao()).toBe(0);
	  });

	  it("O jogador 2 pontua e fica 15 15", function() {
	    jogo.pontuarJogador(1);
	    jogo.pontuarJogador(2);
	    expect(jogo.jogador1.getPontuacao()).toBe(15);
	    expect(jogo.jogador2.getPontuacao()).toBe(15);
	  });
	  it("O jog 1 pontua 4x e ganha", function() {
	    jogo.pontuarJogador(1);
	    jogo.pontuarJogador(1);
	    jogo.pontuarJogador(1);
	    jogo.pontuarJogador(1);
	    expect(jogo.jogador1.getJogosGanhos()).toBe(1);
	    expect(jogo.jogador2.getJogosGanhos()).toBe(0);
	  });		  	

	  it("O jogador 1 pontua e fica vant 1 0", function() {
	    jogo.jogador1.setPontuacao(40);
	    jogo.jogador2.setPontuacao(40);
	    jogo.pontuarJogador(1);
	    expect(jogo.jogador1.getVantagem()).toBe(1);
	    expect(jogo.jogador2.getVantagem()).toBe(0);
	  });
		it("O jogador 2 pontua e fica vant 0 1", function() {
	    jogo.jogador1.setPontuacao(40);
	    jogo.jogador2.setPontuacao(40);
	    jogo.pontuarJogador(2);
	    expect(jogo.jogador1.getVantagem()).toBe(0);
	    expect(jogo.jogador2.getVantagem()).toBe(1);
	  });
		it("O jogador 1 com vantagem jogador 2 pontua e fica vant 0 0", function() {
	    jogo.jogador1.setPontuacao(40);
	    jogo.jogador2.setPontuacao(40);
	    jogo.pontuarJogador(1);
	    jogo.pontuarJogador(2);
	    expect(jogo.jogador1.getVantagem()).toBe(0);
	    expect(jogo.jogador2.getVantagem()).toBe(0);
	  });
		it("O jogador 1 com vantagem jogador 1 pontua e ganha", function() {
	    jogo.jogador1.setPontuacao(40);
	    jogo.jogador2.setPontuacao(40);
	    jogo.pontuarJogador(1);
	    jogo.pontuarJogador(1);
	    expect(jogo.jogador1.getJogosGanhos()).toBe(1);
	    expect(jogo.jogador2.getJogosGanhos()).toBe(0);
	  });
		it("O jogador 2 com vantagem jogador 2 pontua e ganha", function() {
	    jogo.jogador1.setPontuacao(40);
	    jogo.jogador2.setPontuacao(40);
	    jogo.pontuarJogador(2);
	    jogo.pontuarJogador(2);
	    expect(jogo.jogador1.getJogosGanhos()).toBe(0);
	    expect(jogo.jogador2.getJogosGanhos()).toBe(1);
	  });


});  

