namespace FinanceApi.Models
{
    public class MovDespesa : BaseModel
    {
        #region Campos
        public string Descricao { get; private set; }
        public decimal Valor { get; private set; }
        public bool IsPago { get; private set; }
        public DateTime DataLancamento { get; private set; }
        public CCadTag? Tag { get; private set; }
        public CCadConta? Conta { get; private set; }

        #endregion

        #region Métodos públicos
        public MovDespesa(string descricao, decimal valor, bool isPago, DateTime dataLancamento, CadConta cadConta, CadTag? cadTag = null)
        {
            Descricao = descricao;
            Valor = valor;
            IsPago = isPago;
            DataLancamento = dataLancamento;
            Tag = cadTag != null ? new CCadTag(cadTag) : null;
            Conta = cadConta != null ? new CCadConta(cadConta) : null;
        }

        public void Update(string descricao, decimal valor, bool isPago, DateTime dataLancamento, CadTag cadTag, CadConta cadConta)
        {
            Descricao = descricao;
            Valor = valor;
            IsPago = isPago;
            DataLancamento = dataLancamento;
            Conta = cadConta != null ? new CCadConta(cadConta) : null;
            Tag = cadTag != null ? new CCadTag(cadTag) : null;
        }

        #endregion

        #region Classes

        public class CCadTag(CadTag cadTag)
        {
            public Guid Id { get; private set; } = cadTag.Id;
            public string Nome { get; private set; } = cadTag.Nome;
        }

        public class CCadConta(CadConta cadConta)
        {
            public Guid Id { get; private set; } = cadConta.Id;
            public string Nome { get; private set; } = cadConta.Nome;
        }

        #endregion
    }
}
