using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.MovDespesa
{
    public class MovDespesaViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "A Descrição é obrigatória.")]
        public string? Descricao { get; set; }
        public decimal Valor { get; set; }
        public DateTime DataLancamento { get; set; }
        public bool IsPago { get; set; }
    }
}
