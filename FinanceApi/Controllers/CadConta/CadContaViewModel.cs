using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.CadConta
{
    public class CadContaViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "O Nome é obrigatório.")]
        public string Nome { get; set; }
        public double Saldo { get; set; }
        public bool Status { get; set; }
    }
}
