using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.CadCartao
{
    public class CadCartaoViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "O Nome é obrigatório.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Data de vencimento é obrigatória.")]
        public DateTime DataVencimento { get; set; }

        [Required(ErrorMessage = "Data de fechamento é obrigatória.")]
        public DateTime DataFechamento { get; set; }
        [Required(ErrorMessage = "Limite é obrigatório.")]
        public decimal Limite { get; set; }
    }
}
