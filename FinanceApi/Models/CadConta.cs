namespace FinanceApi.Models
{
    public class CadConta(string nome, decimal saldo, bool status) : BaseModel
    {
        #region Campos

        public string Nome { get; private set; } = nome;
        public decimal Saldo { get; private set; } = saldo;
        public bool Status { get; private set; } = status;

        #endregion

        #region Métodos públicos

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
