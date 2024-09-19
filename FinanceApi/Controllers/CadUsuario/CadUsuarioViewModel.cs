using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.CadUsuario
{
    public class CadUsuarioViewModel
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
