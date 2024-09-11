namespace FinanceApi.Models
{
    public class MovReceita : BaseModel
    {
        public string Descricao { get; private set; }
        public decimal Valor { get; private set; }
        public DateTime DataLancamento { get; private set; }
        public CCadTag? Tag { get; private set; }
        public CCadConta? Conta { get; private set; }

        #region Métodos públicos

        public MovReceita(string descricao, decimal valor, DateTime dataLancamento, CadConta? cadConta = null, CadTag? cadTag = null)
        {
            Descricao = descricao;
            Valor = valor;
            DataLancamento = dataLancamento.Date;
            Tag = cadTag != null ? new CCadTag(cadTag) : null;
            Conta = cadConta != null ? new CCadConta(cadConta) : null;
        }

        public void Update(string descricao, decimal valor, DateTime dataLancamento, CadTag cadTag, CadConta cadConta)
        {
            Descricao = descricao;
            Valor = valor;
            DataLancamento = dataLancamento.Date;
            Conta = cadConta != null ? new CCadConta(cadConta) : null;
            Tag = cadTag != null ? new CCadTag(cadTag) : null;
        }

        #endregion

        #region Classes

        public class CCadConta(CadConta cadConta)
        {
            public Guid Id { get; private set; } = cadConta.Id;
            public string Nome { get; private set; } = cadConta.Nome;
        }

        public class CCadTag(CadTag cadTag)
        {
            public Guid Id { get; private set; } = cadTag.Id;
            public string Nome { get; private set; } = cadTag.Nome;
        }

        #endregion
    }
}
