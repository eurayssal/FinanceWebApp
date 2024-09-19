using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.CadCartao
{
    public class CadCartaoViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "O Nome é obrigatório.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "DataVencimento é obrigatória.")]
        public DateTime DataVencimento { get; set; }

        [Required(ErrorMessage = "DataFechamento é obrigatória.")]
        public DateTime DataFechamento { get; set; }
        public decimal ValorFatura { get; set; }
    }
}
