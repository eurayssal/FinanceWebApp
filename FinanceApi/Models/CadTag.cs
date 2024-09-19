namespace FinanceApi.Models
{
    public class CadTag(string nome) : BaseModel
    {
        #region Campos
        public string Nome { get; private set; } = nome;

        #endregion

        #region Métodos públicos

        public void Update(string nome)
        {
            Nome = nome;
        }

        #endregion
    }
}
