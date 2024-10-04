namespace FinanceApi.Models
{
    public class Usuario(string nome, string email, string senha) : BaseModel(null)
    {
        public string Nome { get; private set; } = nome;
        public string Email { get; private set; } = email;
        public string Senha { get; private set; } = senha;
    }
}
