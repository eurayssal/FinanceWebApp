namespace FinanceApi.Models
{
    public class MovDespesa : BaseModel
    {
        #region Campos
        public string Descricao { get; private set; }
        public decimal Valor { get; private set; }
        public bool isPago { get; private set; }

        #endregion

        #region Métodos públicos
        public MovDespesa(string descricao, decimal valor, bool isPago)
        {
            Descricao = descricao;
            Valor = valor;
            this.isPago = isPago;
        }

        public void Update(string descricao, decimal valor, bool isPago)
        {
            Descricao = descricao;
            Valor = valor;
            this.isPago = isPago;
        }

        #endregion
    }
}
