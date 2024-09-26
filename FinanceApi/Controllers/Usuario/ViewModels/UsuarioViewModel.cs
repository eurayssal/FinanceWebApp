using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.Authorization.ViewModels
{
    public class UsuarioViewModel
    {
        [Required]
        public string Nome { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(6)]
        public string Senha { get; set; }
    }
}
