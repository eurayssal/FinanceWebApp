namespace FinanceApi.Models
{
    public class MovTransferencia(string descricao, decimal valor, string observacao, DateTime dataTransferencia, CadConta contaEntrada, CadConta contaSaida) : BaseModel
    {
        public string Descricao { get; private set; } = descricao;
        public decimal Valor { get; private set; } = valor;
        public string Observacao { get; private set; } = observacao;
        public DateTime DataTransferencia { get; private set; } = dataTransferencia;
        public CCadConta ContaSaida { get; private set; } = contaSaida != null ? new CCadConta(contaSaida) : null;
        public CCadConta ContaEntrada { get; private set; } = contaEntrada != null ? new CCadConta(contaEntrada) : null;


        public class CCadConta(CadConta cadConta)
        {
            public Guid Id { get; private set; } = cadConta.Id;
            public string Nome { get; private set; } = cadConta.Nome;
        }
    }
}

