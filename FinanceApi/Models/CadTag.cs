namespace FinanceApi.Models
{
    public class CadTag : BaseModel
    {
        #region Campos
        public string Nome { get; private set; }

        #endregion

        #region Métodos públicos
        public CadTag(string nome)
        {
            Nome = nome;
        }

        public void Update(string nome)
        {
            Nome = nome;
        }

        #endregion
    }
}
