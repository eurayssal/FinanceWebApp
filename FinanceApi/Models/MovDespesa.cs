namespace FinanceApi.Models
{
    public class MovDespesa : BaseModel
    {
        #region Campos
        public string Descricao { get; private set; }
        public decimal Valor { get; private set; }
        public bool IsPago { get; private set; }
        public CCadTag? Tag { get; private set; }

        #endregion

        #region Métodos públicos
        public MovDespesa(string descricao, decimal valor, bool isPago, CadTag? cadTag = null)
        {
            Descricao = descricao;
            Valor = valor;
            IsPago = isPago;
            Tag = cadTag != null ? new CCadTag(cadTag) : null;
        }

        public void Update(string descricao, decimal valor, bool isPago, CadTag cadTag)
        {
            Descricao = descricao;
            Valor = valor;
            IsPago = isPago;
            Tag = cadTag != null ? new CCadTag(cadTag) : null;
        }

        #endregion

        #region Classes

        public class CCadTag(CadTag cadTag)
        {
            public Guid Id { get; private set; } = cadTag.Id;
            public string Nome { get; private set; } = cadTag.Nome;
        }

        #endregion
    }
}
