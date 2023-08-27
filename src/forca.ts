export class Forca {
  erros: number;
  mensagemFinal: string;
  palavraSecreta: string;
  letrasEncontradas: string[];

  constructor() {
    this.mensagemFinal = '';
    this.palavraSecreta = this.obterPalavraSecreta();
    this.letrasEncontradas = new Array(this.palavraSecreta.length).fill('_');
    this.erros = 0;
  }

  obterPalavraSecreta(): string {
    const palavras: string[] = [
      "ABACATE", "ABACAXI", "ACEROLA", "ACAI", "ARACA", "ABACATE", "BACABA",
      "BACURI", "BANANA", "CAJA", "CAJU", "CARAMBOLA", "CUPUACU", "GRAVIOLA",
      "GOIABA", "JABUTICABA", "JENIPAPO", "MACA", "MANGABA", "MANGA", "MARACUJA",
      "MURICI", "PEQUI", "PITANGA", "PITAYA", "SAPOTI", "TANGERINA", "UMBU",
      "UVA", "UVAIA"
    ];

    const indiceAleatorio = Math.floor(Math.random() * palavras.length);

    return palavras[indiceAleatorio];
  }

  obterPalavraParcial(): string {
    return this.letrasEncontradas.join('');
  }

  obterQuantidadeErros(): number {
    return this.erros;
  }

  obterQuantidadeLetras(): number {
    return this.palavraSecreta.length;
  }

  jogar(palpite: string): void {
    let letraFoiEncontrada: boolean = false;

    for (let i = 0; i < this.obterQuantidadeLetras(); i++) {
      if (palpite == this.palavraSecreta[i]) {
        this.letrasEncontradas[i] = palpite;
        letraFoiEncontrada = true;
      }
    }

    if (!letraFoiEncontrada)
      this.erros++;

    if (this.jogadorGanhou())
      this.mensagemFinal = `Você acertou a palavra ${this.palavraSecreta}, parabéns!`;
    else if (this.jogadorPerdeu())
      this.mensagemFinal = `Você perdeu! Tente novamente, a palavra era ${this.palavraSecreta}`;
  }

  jogadorGanhou(): boolean {
    return this.letrasEncontradas.join("") === this.palavraSecreta;
  }

  jogadorPerdeu(): boolean {
    return this.obterQuantidadeErros() === 7;
  }
}