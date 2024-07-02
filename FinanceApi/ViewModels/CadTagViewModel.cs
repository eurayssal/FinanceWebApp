using System.ComponentModel.DataAnnotations;

namespace FinanceApi.ViewModels
{
    public class CadTagViewModel
    {
        public Guid Id { get; set; }
        [Required(ErrorMessage = "O Nome é obrigatório.")]
        public string Nome { get; set; }
    }
}
