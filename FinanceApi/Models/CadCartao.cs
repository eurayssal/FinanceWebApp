namespace FinanceApi.Models
{
    public class CadCartao(string nome, DateTime dataVencimento, DateTime dataFechamento, decimal valorFatura) : BaseModel
    {
        #region Campos

        public string Nome { get; private set; } = nome;
        public DateTime DataVencimento { get; private set; } = dataVencimento;
        public DateTime DataFechamento { get; private set; } = dataFechamento;
        public decimal ValorFatura { get; private set; } = valorFatura;

        #endregion

        #region Métodos públicos

        public void Update(string nome, DateTime dataVencimento, DateTime dataFechamento, decimal valorFatura)
        {
            Nome = nome;
            DataFechamento = dataFechamento;
            DataVencimento = dataVencimento;
            ValorFatura = valorFatura;
        }

        public void SomarValorFatura(decimal valor)
        {
            ValorFatura += valor;
        }

        #endregion
    }
}
