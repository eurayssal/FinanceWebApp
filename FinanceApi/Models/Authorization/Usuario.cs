namespace FinanceApi.Models.Authorization
{
    public class Usuario(string nome, string email, string senha) : BaseModel
    {
        public string Nome { get; private set; } = nome;
        public string Email { get; private set; } = email;
        public string Senha { get; private set; } = senha;
    }
}
