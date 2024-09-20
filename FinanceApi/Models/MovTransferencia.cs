namespace FinanceApi.Models
{
    public class MovTransferencia : BaseModel
    {
        public string Descricao { get; private set; }
        public decimal Valor { get; private set; }
        public string Observacao { get; private set; }
        public DateTime DataTransferencia { get; private set; }
        public CCadConta ContaSaida { get; private set; }
        public CCadConta ContaEntrada { get; private set; }

        public class CCadConta(CadConta cadConta)
        {
            public Guid Id { get; private set; } = cadConta.Id;
            public string Nome { get; private set; } = cadConta.Nome;
        }
    }
}
