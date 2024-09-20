namespace FinanceApi.Models.Authorization
{
    public class Login(string email, string senha)
    {
        public string Email { get; private set; } = email;

        public string Senha { get; private set; } = senha;
    }
}
