namespace FinanceApi.Models
{
    public class MovDespesa(string descricao, decimal valor, Guid userId, DateTime dataLancamento,
        CadConta? cadConta = null, CadCartao? cadCartao = null, CadTag? cadTag = null) : BaseModel(userId)
    {
        #region Campos

        public string Descricao { get; private set; } = descricao;
        public decimal Valor { get; private set; } = valor;
        public DateTime DataLancamento { get; private set; } = dataLancamento.Date;
        public CCadTag? Tag { get; private set; } = cadTag != null ? new CCadTag(cadTag) : null;
        public CCadConta? Conta { get; private set; } = cadConta != null ? new CCadConta(cadConta) : null;
        public CCadCartao? Cartao { get; private set; } = cadCartao != null ? new CCadCartao(cadCartao) : null;
        //TODO: Colocar cartao
        //TODO: Colocar usuario

        #endregion

        #region Métodos públicos

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

        public class CCadCartao(CadCartao cadCartao)
        {
            public Guid Id { get; private set; } = cadCartao.Id;
            public string Nome { get; private set; } = cadCartao.Nome;
        }

        #endregion
    }
}
