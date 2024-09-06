namespace FinanceApi.Models
{
    public class MovDespesa : BaseModel
    {
        #region Campos
        public string Nome { get; set; }
        public decimal Valor { get; set; }
        public DateTime DataLancamento { get; set; }
        public bool Status { get; set; }
        public CTag Tag { get; set; }

        #endregion

        #region Métodos públicos
        public MovDespesa(string nome, decimal valor, bool status, CadTag cadTag)
        {
            Nome = nome;
            Valor = valor;
            DataLancamento = DateTime.Today;
            Status = status;
            Tag = new CTag(cadTag);
        }

        public void Update(string nome, decimal valor, bool status, CadTag cadTag)
        {
            Nome = nome;
            Valor = valor;
            DataLancamento = DateTime.Today;
            Status = status;
            Tag = new CTag(cadTag);
        }

        #endregion

        #region Classes
        public class CTag(CadTag cadTag)
        {
            public Guid Id { get; private set; } = cadTag.Id;
            public string Nome { get; private set; } = cadTag.Nome;
        }

        #endregion
    }
}
