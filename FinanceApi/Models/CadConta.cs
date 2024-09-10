namespace FinanceApi.Models
{
    public class CadConta : BaseModel
    {
        #region Campos

        public string Nome { get; private set; }
        public double Saldo { get; private set; }
        public bool Status { get; private set; }

        #endregion

        #region Métodos púbicos

        public CadConta(string nome, double saldo, bool status)
        {
            Nome = nome;
            Saldo = saldo;
            Status = status;
        }

        public void Update(string nome, double saldo, bool status)
        {
            Nome = nome;
            Saldo = saldo;
            Status = status;
        }

        #endregion
    }
}
