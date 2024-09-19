namespace FinanceApi.Models
{
    public class CadCartao : BaseModel
    {
        #region Campos

        public string Nome { get; private set; }
        public DateTime DataVencimento { get; private set; }
        public DateTime DataFechamento { get; private set; }
        public decimal ValorFatura { get; private set; }

        #endregion

        #region Métodos públicos

        public CadCartao(string nome, DateTime dataVencimento, DateTime dataFechamento, decimal valorFatura)
        {
            Nome = nome;
            DataFechamento = dataFechamento;
            DataVencimento = dataVencimento;
            ValorFatura = valorFatura;
        }

        public void Update(string nome, DateTime dataVencimento, DateTime dataFechamento, decimal valorFatura)
        {
            Nome = nome;
            DataFechamento = dataFechamento;
            DataVencimento = dataVencimento;
            ValorFatura = valorFatura;
        }

        #endregion
    }
}
