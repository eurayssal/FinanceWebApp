namespace FinanceApi.Models
{
    public class CadConta : BaseModel
    {
        #region Campos

        public string Nome { get; private set; }
        public decimal Saldo { get; private set; }
        public bool Status { get; private set; }

        #endregion

        #region Métodos púbicos

        public CadConta(string nome, decimal saldo, bool status)
        {
            Nome = nome;
            Saldo = saldo;
            Status = status;
        }

        public void Update(string nome, decimal saldo, bool status)
        {
            Nome = nome;
            Saldo = saldo;
            Status = status;
        }

        public void SubtrairSaldo(decimal valor)
        {
            Saldo -= valor;
        }

        public void SomarSaldo(decimal valor)
        {
            Saldo += valor;
        }

        #endregion
    }
}
