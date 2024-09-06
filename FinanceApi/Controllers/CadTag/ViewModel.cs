using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.CadTag
{
    public class ViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "O Nome é obrigatório.")]
        public string Nome { get; set; }
    }
}
